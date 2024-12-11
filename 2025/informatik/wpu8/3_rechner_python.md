Python reloaded
================

~~~python
def nachfolger(zahl): # Die Funktion namens "nachfolger" wird festgelegt und der Parameter "zahl""
    return zahl + 1 # zahl wird zurück gegeben und vorher um 1 erhöht

def vorgaenger(zahl):# wie zeile 1 heißt nur anders
    return zahl - 1 # wie Zeile 2, nur um eins verringert

def addieren(summand1, summand2): # Eine Funktion wird definiert, die zwei Parameter hat
    while summand2 > 0 : # eine Schleife, die so lange läuft, wie summand2 größer als 0 ist
        summand1 = nachfolger(summand1) # einer Variable wird der Rückgabewert der Funktion zugewiesen
        summand2 = vorgaenger(summand2) # wie Zeile 9 nur mit anderer Funktion
    return summand1 # rückgabe des Inhalts der Variable summand 1

def multiplizieren(faktor1,faktor2): #Die Funktion Multiplizieren hat die Parameter faktor1 und faktor2
    ergebnis = 0 # Der Variable ergebnis wird der Wert 0 zugewiesen
    while faktor2 > 0 : #So lange faktor2 größer als 0 ist, wiederhole...
        ergebnis = addieren(ergebnis,faktor1) #die Funktion addieren wird aufgerufen und der Rückgabewert der Variable ergebnis zugewiesen
        faktor2 = vorgaenger(faktor2) #Die Funktion vorgaenger wird aufgerufen und der Rückgabewert der Variable faktor2 zugewiesen
    return ergebnis # Ergebnis wird zurück gegeben 

print("gib zwei Zahlen ein") #gib eine Zeichenkette aus
var1 = int(input("erste Zahl: ")) #Der Benutzer wird zu einer Eingabe aufgefordert, die in eine Zahl umgewandelt wird. Das Ergebnis wird var1 zugewiesen.
var2 = int(input("zweite Zahl: ")) #wie Zeile 21 nur mit var2
ergebnis = addieren(var1,var2) #Die Funktion addieren wird aufgerufen und der Rückgabewert der Variable ergebnis zugewiesen
print("Die Summe ist") #gib eine Zeichenkette aus
print(ergebnis) #Der Inhalt der Variable ergebnis wird ausgegeben
ergebnis = multiplizieren(var1,var2) #wie Zeile 23 nur mit Multiplizieren
print("Das Produkt ist") #wie Zeile 24, nur mit einer anderen Zeichenkette
print(ergebnis) #Der Inhalt der Variable ergebnis wird ausgegeben
~~~

## Subtrahieren als Programmablaufpläne

[Einführung in Programmablaufpläne](3_programmablaufplan.md)

<img height="300px" src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b -> c;
   c->d[label="true"];
   c->e[label="false"];
   d->d2->c;
   e -> stop;
   a[label="eingabe von var1", shape=box];
   b[label="eingabe von var2", shape=box];
   c[label="var2 > 0 ???", shape=diamond];
   d[label="vorgaenger von var1 bilden", shape=box];
   d2[label="vorgaenger von var2 bilden", shape=box];
   e[label="ausgabe von var1", shape=box];
 }
'/>

## Subtrahieren in Python

~~~python
def subtrahieren(var1, var2): # Eine Funktion wird definiert, die zwei Parameter hat
    while var2 > 0 : # eine Schleife, die so lange läuft, wie var2 größer als 0 ist
        var1 = vorgaenger(var1) # einer Variable wird der Rückgabewert der Funktion zugewiesen
        var2 = vorgaenger(var2) # wie Zeile 9 nur mit anderer Funktion
    return var1 #rückgeben des Inhalts von var1
~~~
