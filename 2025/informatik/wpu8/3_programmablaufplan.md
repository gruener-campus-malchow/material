Einführung in Programmablaufpläne
================

> Sinn: Mit intuitiver und sehr einfacher Syntax Programme entwerfen und verstehen

# Syntax und Semantik

## Start und Ende eines Programms

Dafür werden Ellypsen verwendet.

<img height="150px" src='https://g.gravizo.com/svg?
 digraph G {
   start -> a ->  stop;
   a[label="gib Hello World aus", shape=box];
 }
'/>

## Befehle oder Anweisungen

Dafür werden Rechtecke verwendet. Für eine maximale Vereinfachung wird nicht zwischen Befehlen und Eingaben (üblicherweise Parallelogramme) unterschieden. Die Anweisungen oder Befehle können in Pseudocode oder auch schon in Programmsyntax geschrieben sein.

<img height="300px" src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b -> c ->  stop;
    a[label="Eingabe der Variable zahl", shape=box];
    b[label="ergebnis = rechne zahl mal zahl", shape=box];
    c[label="ausgeben(Die Quadratzahl ist: ergebnis)", shape=box];
 }
'/>

## Bedingungen für Verzweigungen und Schleifen

Eine Bedingung wird als Frage formuliert oder als Gleichung oder Ungleichung in eine Raute geschrieben. Es gibt üblicherweise nur die Ergebnisse wahr oder falsch.

### Verzweigung

<img height="300px" src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b; 
    b -> c [label="wahr"];
    c ->  stop;
    b -> d [label="falsch"];
    d ->  stop;
    a[label="Eingabe der Variablen zahl1 und zahl2", shape=box];
    b[label="ist zahl 1 größer als zahl2?", shape=diamond];
    c[label="ausgeben(zahl1 ist größer)", shape=box];
    d[label="ausgeben(zahl1 ist kleiner oder gleich)", shape=box];
 }
'/>

### Schleife

Wenn ein Zweig der Verzweigung wieder auf die Anfangsbedingung zurück führt, entsteht eine Schleife, die mehrmals (manchmal unendlich oft) durchlaufen werden kann.

<img height="300px" src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b; 
    b -> c [label="wahr"];
    c ->  stop;
    b -> d [label="falsch"];
    d -> e -> b;
    a[label="Eingabe der Variablen zahl1 und zahl2", shape=box];
    b[label="ist zahl 1 größer als zahl2?", shape=diamond];
    c[label="ausgeben(zahl1 ist größer)", shape=box];
    d[label="ausgeben(zahl1 ist kleiner oder gleich)", shape=box];
    e[label="zahl1 = zahl1 + 1", shape=box];
 }
'/>

## Subtrahieren als Programmablaufplan

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

