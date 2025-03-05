**Webseite mit Material der Informatik**
	Wahlpflichtkurs Klasse 8 2021-2022


# Playground

Ab hier sind die Aufgaben zu finden, die für das zweite Halbjahr relevant sind.

## Playground start

edited since 22.02.2021, last update: 20.05.2021

Viele haben das bestimmt herbei gesehnt: Wir werden mit dem Raspberry Pi starten. Einige Vorbereitungen sind noch in Arbeit, aber im Wesentlichen ist der "Playground" startklar.

Ab diesem Kapitel sind die Anfänger- und Amteur-Aufgaben für jeden Pflicht. Die Fortgeschrittenen-Aufgabe ist freiwillig.

**Anfänger (Pflicht)**

1. Lies die [Informationsseite zum Playground](https://gruener-campus-malchow.github.io/fbi/playground.html)
1. Besorge Dir aus dem Lernraumkurs die PIN zum [Gatekeeper](https://gcm.schule/fb/informatik/playground/gatekeeper/)
1. Logge Dich mit den für Dich persönlich erstellen Zugangsdaten per SSH auf Level0 ein.
1. Erstelle die Datei "HelloTeacher.txt" und schreibe darin einen Witz Deiner Wahl

**Amateur (Pflicht)**

1. Erstelle ein Foto, wie es im Tutorial beschrieben ist und lade es herunter.
1. Lade das Foto im Lernraum hoch.

**Fortgeschrittene (Freiwillig)**

1. Erstelle wie zuvor ein Foto aber benutze hierfür einen Effekt.

<video src="http://gcm.schule/video/playground_level0_tutorial_01.mp4" controls>

## Welcome 2 Level0

edited since 01.03.2021, last update: 20.05.2021

Leider ist es bei dem Ausbau des Playgrounds zu Verzögerungen gekommen. Hier nun aber die neuen Aufgaben. Während in der letzten Woche der Zugriff auf die Kamera von Level0 über ein direkten Befehl erfolgte, soll nun mit Python auf die Kamera zugegriffen werden.

**Anfänger (Pflicht)**

1. Logge Dich auf den Pi ein und erstelle ein neues Foto. (Achtung: Nur tagsüber hast Du Licht!)
1. Beschrifte das Foto mit folgenden Bestandteilen, die zum Playground gehören. Benutzen dafür ein Grafik- oder Officeprogramm. Speichere das Foto im Lernraum.

 * Stromverteiler
 * Netzteil Raspberry Pi
 * Netzteil Switch
 * Switch (Verteilt das Netzwerk)
 * LAN-Kabel
 * Stromkabel
 * Raspberry Pi 4
 * Flachbandkabel zur Kamera
 
 ![Playground Seitenansicht](./images/playground_seite_2021-03-05.jpg)

**Amateur (Pflicht)**

1. Erstelle Fotos mit Python3(!), bei denen Du nur Teile der Sensorfläche der Kamera nutzt. Es sollen so die LEDs des Netzwerk-Switches und der gesamte Switch gemacht werden.

Eine sehr ergiebige Quelle für Code und eine Menge Erklärungen dazu in deutscher Sprache: http://www.netzmafia.de/skripten/hardware/RasPi/kamera/index.html

Speichere den Python-Code, den Du dafür verwendet hast, im Lernraum.

**Fortgeschrittene (Freiwillig)**

1. Entwirf in OpenScad verschiedene Dübel, sodass wir mit einer Bohrmaschine 5mm durchmessende Löcher in die große Holzplatte bohren können. Der Dübel soll hinein geschraubt oder gesteckt werden und an der Oberseite soll man mit Kabelbindern weitere Bauteile befestigen können. Sende Deine Entwürfe an Deinen Lehrer und besprich Dich über vor- und Nachteile. Denke an eine leichte mechanische Belastung, die über die normale Schwerkraft hinausgehen kann.

<video src="http://gcm.schule/video/playground_level0_tutorial_02.mp4" controls>

## LED onoff

edited since 22.3.2021, last update: 20.05.2021

Ab sofort gilt für die **10er** Hybridunterricht. Das bedeutet, dass zur Unterrichtszeit ein Teil der Schüler*innen anwesend sein muss, der andere Teil **muss** per Videokonferenz beteiligt sein. Der Link ist im Lernraum hinterlegt.

Für die **8er** gilt: Alles **muss** in den **verpflichtenden** Videokonferenzen passieren... zur Unterrichtszeit.

Ich hoffe Du verstehst, dass diese "Pflicht" Dir helfen soll, das Lernen zu strukturieren und gut durch die Corona-Zeit zu kommen. Wenn es Probleme gibt, Du etwas nicht verstehst, oder nicht weißt, warum Du etwas machen sollst: Sprich mich an!

Alle weiteren Infos, findest Du in diesem Video.

<video src="https://gcm.schule/video/playground_level0_wie_wir_uns_organisieren.mp4" controls>

### Aufgaben

Inzwischen funktionieren die LEDs, die man auf den neuesten Fotos erkennen kann. Du sollst aber zunächst herausfinden, über welchen PIN, welche LED angesteuert werden kann.

Folgender Code ist geeignet, um die LEDs zu testen:

~~~python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pin = 18  # alternativ: 12, 13
GPIO.setup(pin,GPIO.OUT)

print("LED on")
GPIO.output(pin,GPIO.HIGH)
time.sleep(1)
print("LED off")
GPIO.output(pin,GPIO.LOW)
~~~

Du musst bedenken, dass nicht alle gleichzeitig auf die LEDs zugreifen können. Also wundere Dich nicht, wenn die LEDs komische Dinge machen. Außerdem kannst Du ja nur Fotos machen. 

Hier ein wenig Code zum Räubern:

~~~python
import picamera
from time import sleep

cam = picamera.PiCamera()
try:
   cam.resolution = (800, 600)
   cam.capture('bild.jpg')
finally:
   cam.close()
~~~

Es bietet sich deshalb an, ein Programm zu schreiben, das folgende Abfolge abarbeitet:

1. LED einschalten
2. Foto machen
3. LED ausschalten

Am Ende sollst Du herausbekommen, welcher der PINs (12, 13, 18) für welche Farbe zuständig ist. Das schreibst Du in Deinen Code und lädst den im Lernraum hoch.


### Abgaben

Da der Lernraum offensichtlich stabiler läuft, kehren wir zu unserem alten Workflow zurück. Die Abgaben erfolgen über die Aufgaben im Lernraum. Von dort werde ich aber weiter auf diese Seite verlinken.

1. Weil ich zwei Jahrgänge parallel führe.
1. Weil auch Außenstehende von unserem Projekt profitieren können sollen.

## Traffic Lights

edited since 12.04.2021, last update: 20.05.2021

### Aufgaben

1. Erstelle ein Programm, bei dem zwischen den Farben der LEDs durch Knopfdruck gewechselt wird.
1. Stelle Dir vor, die LEDs wären eine Ampel. Erstelle ein Programm, bei dem automatisch alle 10s zwischen einer Grün-Phase und einer Rot-Phase gewechselt wird. Beachte, dass es als Übergang von Rot zu Grün die Rot-Gelb-Phase erscheint. Von Grün zu Rot wird nur eine kurze Gelb-Phase erscheinen. Die beiden Gelb-Phasen sollen 3s lang dauern. 

![Ampelphasen](./images/Traffic_lights_4_states.svg)

### Abgaben

Die Abgaben erfolgen über die Aufgaben im Lernraum. Es soll dort der Pythoncode hochgeladen werden. Wenn Du ein cooles Video von der eigenen Ampel gemacht hast, kannst Du mir das gern per Mail senden (max. 30MB), damit ich mir das gleich anschauen kann. Alternativ bin ich auch per Signal/Telegram/Discord/Threema erreichbar.

### Hilfestellungen

Funktionen könnnen helfen, den Code übersichtlicher zu gestalten.

~~~python
import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

pin_A = 18  
pin_B = 12
pin_C = 13

GPIO.setup(pin_A,GPIO.OUT)
GPIO.setup(pin_B,GPIO.OUT)
GPIO.setup(pin_C,GPIO.OUT)

# Hier folgt die Funktion mit Kopf und Körper
def ein_A(zeit):
   GPIO.output(pin_A,GPIO.HIGH)
   time.sleep(zeit)
   GPIO.output(pin_A,GPIO.LOW)   
   
while True:
   ein_A(10) # Das ist der Aufruf der Funktion
   time.sleep(3)
   
~~~

Um mit Python die Enter-Taste abzufangen ohne weitere Module zu verwenden, bedienen wir uns eines Tricks. Wir benutzen den input-Befehl und ignorieren alle Eingaben. Das Code-Beispiel hier schaltet natürlich noch keine LEDs.

~~~python
farben = ['rot', 'gelb', 'grün']
auswahl = 0
while True:
        input('Press ENTER!')
        print(str(farben[auswahl]))
        auswahl += 1
        if auswahl > 2:
                auswahl = 0
~~~

## PWM Grundlagen

edited since 10.5.2021, last update: 20.05.2021

Es geht los mit einer Kerntechnologie. Hierzu schon das Informationsvideo und im Anschluss die Aufgabenstellung.

<video src="http://gcm.schule/video/playground_level0_einfuehrung_pwm.mp4" controls>

### Aufgabe

Teste den Code aus dem Video. 

~~~ python
import RPi.GPIO as GPIO

pin = 18
frequenz = 50

GPIO.setmode(GPIO.BCM)
GPIO.setup(pin, GPIO.OUT)
pwmObjekt = GPIO.PWM(pin, frequenz)
pwmObjekt.start(0)

wert = input("Wie stark soll die LED leuchten (0-100)? ")
tastgrad = int(wert)
if (tastgrad > 0 and tastgrad < 101):
  pwmObjekt.ChangeDutyCycle(tastgrad)
else:
  print("Gib einen Wert zwischen 0 und 101 ein!")
input("Wenn Du fertig bist, drücke Enter!")

GPIO.cleanup()
~~~

Erweitere es um die Funktion, dass die LEDs automatisch gedimmt werden. Dazu musst Du mit einer Schleife den Tastgrad in Schritten erhöhen. Hierzu ein kleines Snippet. Darin fehlen natürlich die Funktionen zur PWM-Steuerung der GPIO-Pins

~~~ python
import time

tastgrad = 0
schritte = 5

while tastgrad < 95: # wird bei 94 ein letztes Mal durchlaufen
    tastgrad = tastgrad + schritte
    time.sleep(0.2)
    
while tastgrad > 5: # wird bei 6 ein letztes Mal durchlaufen
    tastgrad = tastgrad - schritte
    time.sleep(0.2)
~~~

### Abgaben

Die Abgaben erfolgen über die Aufgaben im Lernraum. Es soll dort der Pythoncode hochgeladen werden. Wenn Du ein cooles Video von der eigenen Ampel gemacht hast, kannst Du mir das gern per Mail senden (max. 30MB), damit ich mir das gleich anschauen kann. Alternativ bin ich auch per Signal/Telegram/Discord/Threema erreichbar.

### Musterlösung

<video src="http://gcm.schule/video/playground_level0_musterloesung_pwm_01.mp4" controls>

## Challenge

Emil schlägt folgende Challenge vor:

Stelle einen Code zusammen der auf einer Frequenz von 500 Hertz läuft. Man soll die LED je nach Tasteneingabe zwischen 1 und 100 dimmen können, wobei die LED animiert entweder heller oder dunkler wird. Das bedeutet, wenn der Wert zunächst auf 30 steht und durch die Eingabe auf 90 anwachsen soll, muss der Tastgrad über einen gewissen Zeitraum von 30 in kleinen Schritten bis 90 erhöht werden.

### LBNL

Last But Not Least: https://www.raspberry-pi-geek.de/ausgaben/rpg/2020/04/grundlagen-der-pulsweitenmodulation/ - das hier ist technisch wirklich teifergehend...

## Level1

Level1 wird insgesamt mit Servos ausgestattet. Grundsätzliche Informationen zum Servomotor findest Du z.B. hier: https://www.precifast.de/servomotor-funktion-ansteuern-anschliessen/

Um auf Level1 zu arbeiten, muss man sich erneut um Zugangsdaten bemühen (z.B. indem man die/den Lehrer*in fragt). Wenn man auf Level0 bereits per SSH eingeloggt ist, kann man sich von dort auf Level1 weiter SSHen (also SSH benutzen, um weiter zu kommen…).

### Kontinuierlich drehende Servos

Modellbauservos werden üblicherweise mit 40 Hz bis 50 Hz angesteuert. Interessant ist jedoch vor allem, bei welchem Tastgrad die Servos als analoge Bauteile wie reagieren. Damit sollst Du Dich in der nächsten Aufgabe beschäftigen. 

Ein wenig Theorie zum Thema und Beispielcode ist hier zu finden: https://tutorials-raspberrypi.de/raspberry-pi-servo-motor-steuerung/ . Der dort vorgestellte Code ist allerdings für Steuer-Servos mit denen ein Servo-Horn nach links oder rechts gedreht wird. Der angeschlossene Motor kann allerdings nur langsamer oder schneller mit dem Uhrzeigersinn oder entgegen diesem rotieren. Er ist also weniger für einen Robotergreifarm als für ein Antriebsrad geeignet. Und das ist ein wichtiger Grund, weshalb wir damit anfangen: Wie kann man mit dem Pi einen Motor schneller oder langsamer drehen?

### Servos kontrollieren

~~~ python
# Bilbiotheken, die man benötigt
import RPi.GPIO as GPIO

# GPIO-Pin, an dem der Servo angeschlossen ist
servoPIN = 18
# Frequenz des PWM-Signals
frequenz = 50

# ein paar Einstellungen
GPIO.setmode(GPIO.BCM)
GPIO.setup(servoPIN, GPIO.OUT)

# bereite das Signal am jeweiligen  Pin mit der eingestellten Frequenz vor
pwmSignal = GPIO.PWM(servoPIN, frequenz)
# starte das Signal mit einer Weite von 0
pwmSignal.start(0)

try:
  while True:
    weite = float(input('Gib die Weite ein: '))
    print('PWM-Signal mit Weite von '+str(weite))
    pwmSignal.ChangeDutyCycle(weite)

finally:
  pwmSignal.stop()
  GPIO.cleanup()
  
~~~

Der Code ist zum Räubern und als Beispiel gedacht. Kommen wir zur Aufgabenstellung:

### Aufgaben

1. Bekomme heraus, bei welchen Tastgraden der Servo im Uhrzeigersinn oder gegen den Uhrzeigersinn läuft. Dabei sollst Du aber auch unterscheiden, ob er jeweils langsam oder schnell ist. Hierfür sollst Du nicht mühsam den Beispielcode mit Werten durchprobieren, sondern ein Programm schreiben. Lade Deinen Code in den Lernraum hoch.

1. Erstelle ein Tabelle (in Markdown) in welcher der Tastgrad dem jeweiligen Motorverhalten gegenüber steht. In den Hilfestellungen findest Du dazu Code zum Räubern.

### Hilfestellungen

Der folgende Code zeigt, wie man einen Wert in fest definierten Schritten (steps) ändert. Das könnte ja der Tastgrad an einem PWM-Output sein...

~~~ python

import time

# hier nehmen wir float...
start = 0.0
ende = 50.0
step = 0.5

while start <= ende:
    print(start)
    start = start + step
    time.sleep(0.5)

~~~

Folgende Tabelle soll als Orientierung dienen:

| Tastgrad       | Verhalten                         |
| -------------- | --------------------------------- |
| hier eintragen | Start Rotation mit Uhrzeigersinn (MUS) |
|                | langsam Rotation MUS |
|                | mittelschnell Rotation MUS |
|                | schnell Rotation MUS |
| hier eintragen | Start Rotation gegen Uhrzeigersinn (GUS) |
|                | langsam Rotation GUS |
|                | mittelschnell Rotation GUS |
|                | schnell Rotation GUS |

Und das ist der Makrdown-Code für die Tabelle:

~~~ md

| Tastgrad       | Verhalten                         |
| -------------- | --------------------------------- |
| hier eintragen | Start Rotation mit Uhrzeigersinn (MUS) |
|                | langsam Rotation MUS |
|                | mittelschnell Rotation MUS |
|                | schnell Rotation MUS |
| hier eintragen | Start Rotation gegen Uhrzeigersinn (GUS) |
|                | langsam Rotation GUS |
|                | mittelschnell Rotation GUS |
|                | schnell Rotation GUS |

~~~

## Python

Wenn man ein Problem hat und die Lösung automatisieren will, könnte ein Programm helfen.

* [Slides 08](slides_08.slides.md)
* comming soon


# Ausblick

## Python

Wir haben einen Spielplatz... den: Playground.

https://gruener-campus-malchow.github.io/fbi/playground.html

