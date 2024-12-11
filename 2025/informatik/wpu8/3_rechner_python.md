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

def multiplizieren(faktor1,faktor2):
    ergebnis = 0
    while faktor2 > 0 :
        ergebnis = addieren(ergebnis,faktor1)
        faktor2 = vorgaenger(faktor2)
    return ergebnis # 

print("gib zwei Zahlen ein")
var1 = int(input("erste Zahl: "))
var2 = int(input("zweite Zahl: "))
ergebnis = addieren(var1,var2)
print("Die Summe ist")
print(ergebnis)
ergebnis = multiplizieren(var1,var2)
print("Das Produkt ist")
print(ergebnis)
~~~

## Subtrahieren als PAP

Muss noch gemacht werden:

<img src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b -> c;
   c->d[label="true"];
   c->e[label="false"];
   d->d2->c;
   e -> stop;
   a[label="eingabe var1", shape=box];
   b[label="eingabe var2", shape=box];
   c[label="var2 > 0 ???", shape=diamond];
   d[label="vorganger(var1)", shape=box];
   d2[label="vorganger(var2)", shape=box];
   e[label="ausgabe(var1)", shape=box];
 }
'/>

