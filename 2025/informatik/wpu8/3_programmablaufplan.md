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

## Verzweigungen und Schleifen



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

