Wahlpflichtkurs Informatik 8
=========================

Diese Seite soll die Informationen, das Material und Aufgabenstellungen einiger Kurse zusammenfassen, die im aktuellen Schuljahr am GCM unterrichtet werden.

# Was bisher geschah

* Wiederholung HTML
* Einführung in CSS
* Einführungen Binärsystem
* Einführung ASCII

# Bildformate

[Einführung Pixelmaps](2_pixelmaps.md)

# Python reloaded

~~~python
def nachfolger(zahl): # Die Funktion namens "nachfolger" wird fesgelegt und der Parameter "zahl""
    return zahl + 1 # zahl wird zurück gegeben und vorher um 1 erhöht

def vorgaenger(zahl):# wie zeile 1 heißt nur anders
    return zahl - 1 # wie Zeile 2, nur um eins verringert

def addieren(summand1, summand2): # Eine Funktion wird definiert, die zwei Parameter hat
    while summand2 > 0 : # eine Schleife, die so lange läuft, wie summand2 größer als 0 ist
        summand1 = nachfolger(summand1) # einer Variable wird der Rückgabewert der Funktion zugewiesen
        summand2 = vorgaenger(summand2) # wie Zeile 9 nur mit anderer Funktion
    return summand1 # rückgabe des Inhalts der Variable summand 1
~~~
