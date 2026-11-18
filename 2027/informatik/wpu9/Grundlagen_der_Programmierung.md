# Exkurs Programmieren lernen

Hausaufgabe: Spiele alle Levels durch von https://compute-it.toxicode.fr/ und https://silentteacher.toxicode.fr/

Erkläre auf Basis des Gelernten folgende Konzepte:

- Anweisung (Befehl)
- Variable
- Schleife
- Verzweigung
- Funktion

## KI-generierte Beispiele

> **Prompt:** Erstelle zwanzige JS-Codebeispiele der Programmierprinzipien Schleife, Verzweigung, Befehl, Variable und Funktion. Nummeriere die Beispiele in einem jeweils einleitenden Kommentar. Sortiere die Beispiele zufällig. Erstelle am Ende eine Lösung mit der Zuordnung von Prinzip zu Kommentar. Nur mit while-Schleifen (Kopfgesteuert) und nur if, if-else, if-else-if-ketten. Deklarationen nur mit "var".

~~~js
// Beispiel 1
var runde = 1;
while (runde <= 5) {
  console.log("Runde " + runde);
  runde++;
}

// Beispiel 2
var punkte = 0;
punkte = punkte + 10;
console.log(punkte);

// Beispiel 3
var regen = true;
if (regen) {
  console.log("Regenschirm mitnehmen!");
}

// Beispiel 4
function begruesse(name) {
  console.log("Hallo " + name + "!");
}
begruesse("Mia");

// Beispiel 5
console.log("Willkommen beim Training!");

// Beispiel 6
var temperatur = 23;
if (temperatur > 25) {
  console.log("Es ist heiß.");
} else {
  console.log("Es ist angenehm.");
}

// Beispiel 7
var countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Los!");

// Beispiel 8
console.log(Math.max(4, 17, 9));

// Beispiel 9
function quadrat(zahl) {
  return zahl * zahl;
}
console.log(quadrat(7));

// Beispiel 10
var vorname = "Lena";
var nachname = "Schulz";
var vollerName = vorname + " " + nachname;
console.log(vollerName);

// Beispiel 11
var note = 2;
if (note === 1) {
  console.log("sehr gut");
} else if (note === 2) {
  console.log("gut");
} else if (note === 3) {
  console.log("befriedigend");
} else {
  console.log("ausreichend oder schlechter");
}

// Beispiel 12
var einkaufsliste = ["Brot"];
einkaufsliste.push("Milch");
console.log(einkaufsliste);

// Beispiel 13
var farben = ["rot", "grün", "blau"];
var index = 0;
while (index < farben.length) {
  console.log(farben[index]);
  index++;
}

// Beispiel 14
var a = 5;
var b = 8;
var tausch = a;
a = b;
b = tausch;
console.log(a, b);

// Beispiel 15
var verdopple = function (x) {
  return x * 2;
};
console.log(verdopple(21));

// Beispiel 16
console.log("JavaScript".toUpperCase());

// Beispiel 17
var alter = 15;
if (alter >= 18) {
  console.log("volljährig");
} else {
  console.log("minderjährig");
}

// Beispiel 18
var summe = 0;
var zaehler = 1;
while (summe < 20) {
  summe = summe + zaehler;
  zaehler++;
}
console.log("Summe: " + summe);

// Beispiel 19
function flaeche(breite, hoehe) {
  return breite * hoehe;
}
console.log(flaeche(4, 3));

// Beispiel 20
var piGerundet = 3.14;
var radius = 2;
var umfang = 2 * piGerundet * radius;
console.log(umfang);


/* ================================================
   LÖSUNG – Zuordnung Prinzip → Beispiel
   ================================================
   Schleife:     1, 7, 13, 18   (jeweils kopfgesteuerte while-Schleife)
   Verzweigung:  3 (if), 6 (if-else), 11 (else-if-Kette), 17 (if-else)
   Befehl:       5 (Ausgabe), 8 (Math.max), 12 (push), 16 (toUpperCase)
   Variable:     2 (Wert ändern), 10 (Texte verbinden), 14 (Werte tauschen), 20 (Berechnung mit Variablen)
   Funktion:     4 (ohne Rückgabe), 9 (mit return), 15 (Funktion in einer Variable), 19 (zwei Parameter)

   Nach Nummer:
   1 Schleife      6 Verzweigung  11 Verzweigung  16 Befehl
   2 Variable      7 Schleife     12 Befehl       17 Verzweigung
   3 Verzweigung   8 Befehl       13 Schleife     18 Schleife
   4 Funktion      9 Funktion     14 Variable     19 Funktion
   5 Befehl       10 Variable     15 Funktion     20 Variable
*/
~~~
