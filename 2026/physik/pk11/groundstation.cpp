// keep in mind to set your VSCode terminal output capacity
// to something big enough !!!
// otherwise: the start gets overwritten
// in settings.json add: "terminal.integrated.scrollback": 100000
extern "C" {
  #include <user_interface.h>
}
#include "Arduino.h"
#include <ESP8266WiFi.h>
#include <espnow.h>

const int STATUS_LED_PIN = 2; 
#define LED_ON LOW
#define LED_OFF HIGH

uint32_t lastPacketTime = 0;
uint32_t lastLedToggle = 0;
uint32_t sessionStartTime = 0;
bool ledState = true;
bool isSessionActive = false;
float runningMaxAltitude = 0.0; // automatically tracks peak apogee baseline locally

// telemetry structure
struct __attribute__((packed)) TelemetrySample {
    uint8_t state;
    uint8_t confidence;
    float alt;
    int16_t accX_scaled;
    int16_t accY_scaled;
    int16_t accZ_scaled;
    int16_t pitch_scaled;
    int16_t roll_scaled;
    int16_t yaw_scaled;
};
TelemetrySample receivedBundle[10];

// Data Reception Callback Function
void onDataReceive(uint8_t * mac, uint8_t *incomingData, uint8_t len) {
    if (len == sizeof(receivedBundle)) {
        memcpy(&receivedBundle, incomingData, sizeof(receivedBundle));
        uint32_t currentTime = millis();
        lastPacketTime = currentTime; 
        
        // set start time
        if (!isSessionActive) {
            sessionStartTime = currentTime;
            isSessionActive = true;
        }

        uint32_t relativeSessionTime = currentTime - sessionStartTime;
        
        // unpack and print recieved packets 
        for (int i = 0; i < 10; i++) {
            // Reconstruct timeline by shifting backwards from current time
            uint32_t calculatedSampleTime = relativeSessionTime - ((9 - i) * 10);

            // decompression
            float currentAlt = receivedBundle[i].alt;
            if (currentAlt > runningMaxAltitude) {
                runningMaxAltitude = currentAlt;
            }
            float ax = receivedBundle[i].accX_scaled / 100.0;
            float ay = receivedBundle[i].accY_scaled / 100.0;
            float az = receivedBundle[i].accZ_scaled / 100.0;
            float p  = receivedBundle[i].pitch_scaled / 10.0;
            float r  = receivedBundle[i].roll_scaled / 10.0;
            float y  = receivedBundle[i].yaw_scaled / 10.0;

            // output to terminal 
            Serial.print(calculatedSampleTime); Serial.print(",");
            Serial.print(receivedBundle[i].state); Serial.print(",");
            Serial.print(currentAlt, 2); Serial.print(",");
            Serial.print(runningMaxAltitude, 2); Serial.print(",");
            Serial.print(ax, 2); Serial.print(",");
            Serial.print(ay, 2); Serial.print(",");
            Serial.print(az, 2); Serial.print(",");
            Serial.print(p, 1); Serial.print(",");
            Serial.print(r, 1); Serial.print(",");
            Serial.print(y, 1); Serial.print(",");
            Serial.println(receivedBundle[i].confidence);
        }
    }
}

void setup() {
    Serial.begin(115200);

    pinMode(STATUS_LED_PIN, OUTPUT);
    digitalWrite(STATUS_LED_PIN, LED_ON);

    // force radio mode configuration
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(10);
    wifi_promiscuous_enable(1);
    wifi_set_channel(1);
    wifi_promiscuous_enable(0);
    delay(10);

    // initialize ESP-NOW
    if (esp_now_init() != 0) { while(1); }
    esp_now_set_self_role(ESP_NOW_ROLE_SLAVE);
    esp_now_register_recv_cb(onDataReceive);
}

// blink LED for signs of life 
void loop() {
    uint32_t now = millis();
    if (now - lastPacketTime < 1000) {
        if (now - lastLedToggle >= 500) {
            lastLedToggle = now;
            ledState = !ledState;
            digitalWrite(STATUS_LED_PIN, ledState ? LED_ON : LED_OFF);
        }
    } else {
        digitalWrite(STATUS_LED_PIN, LED_ON);
    }
    delay(20); 
}