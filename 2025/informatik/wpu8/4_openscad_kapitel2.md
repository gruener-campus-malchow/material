Kapitel 2 - Algorithmik
==============

[toc]

# Programmfluss-Kontrolle

Um Objekte nach von uns selbst festgelegten Regeln immer wieder platzieren zu können, bieten sich Schleifen und Verzweigungen aus der Programmierung an.

## Wir haben die Absicht, eine Mauer zu bauen

> Erstelle eine Reihe von Mauersteinen und aus einer Reihe gleich ganz viele übereinander.

## Musterlösung

![](./img/OpenScad_Musterlösung_Beispiel_Mauer.png)

**Hinweis**: Hier wird mit dem %-Zeichen die Modulo-Operation benutzt. Damit soll jede gerade Reihe von der jeweils ungeraden Reihe unterschieden werden. [Modulo gibt immer den ganzzahligen Rest bei der Division aus.](https://www.die-denkschule.ch/data/documents/Modulo-Teilen-mit-Rest.pdf) 

Beispiele:

- 1 % 2 = 5
- 2 % 2 = 0
- 100 % 2 = 0
- 101 % 2 = 5
- 1234567765432234567 = 5
- 1234567765432234568 = 0
- 0 % 3 = 0
- 1 % 3 = 1
- 2 % 3 = 2
- 3 % 3 = 0
- 4 % 3 = 1

## Schleifen

Die FOR-Schleife gibt es in verschiedenen Varianten. Wir benutzen die Einfachste:

~~~
for ( foo = [0:9]) {
    translate([foo * 10,0,0])cube();
}
~~~

Im Kopf der Schleife werden die einzelnen Zahlen für die Variable "foo" hochgezählt. Beim ersten Schleifendurchlauf hat "foo" den Wert 0. Im zweiten Durchlauf ist der Wert von "foo" gleich 1, dann 2, usw. Im Körper der Schleife kann ich die Variable nutzen, um damit die Position zu berechnen. Die Variable wird dann ein Faktor bei der Berechnung des x-Wertes.


## Mengenoperationen

> Mengenoperationen werden auch Boolsche Operationen genannt. Sie dienen dazu verschiedene einfache Objekte zu kombinieren. Man kann sie zusammenfügen (union). Man kann Objekte voneinander subtrahieren oder "herausschneiden" (difference). Oder man kann, das ist am Schwersten zu verstehen, nur die Überschneidungen von Objekten verwenden (intersection).

### difference

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Boolean_Difference_1a.jpg/118px-Boolean_Difference_1a.jpg)

~~~
difference()
{
    cube(12, center=true); 
    sphere(8);
}
~~~

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OpenScad_Boolean_Difference_2.jpg/120px-OpenScad_Boolean_Difference_2.jpg)


~~~ 
difference()
{
    sphere(8); 
    cube(12, center=true);
}
~~~

### union

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/OpenScad_Boolean_Union.jpg/107px-OpenScad_Boolean_Union.jpg)

~~~
union()
{
    cube(12, center=true);
    sphere(8);
}
~~~

### intersection

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/OpenScad_Boolean_Intersection.jpg/120px-OpenScad_Boolean_Intersection.jpg)

~~~
intersection(){
    cube(12, center=true);
    sphere(8);
}
~~~

## Module

> Erstelle eine Strasse aus Häusern. Die Häuser dürfen aber nicht aus Einzelteilen zusammengesetzt sein, sondern sie müssen quasi aus einem Block bestehen, aus denen der Innenraum, die Fenster und die Türen "herausgeschnitten" werden.

Wir benutzen, um Code zu vereinfachen und wieder zu verwenden sogenannte **Module**. Die funktionieren im Prinzip, wie Funktionen in anderen Programmiersprachen. Die Syntax ist relativ einfach:

~~~
module Modulname(Paramater1, Parameter2, ...)
{
    //Körper des Moduls
}

Modulname(1,2,...) //Aufruf des Moduls
~~~

### Musterlösung

![](./img/OpenScad_Musterlösung_Dorf.png)

## Für die Schnellen und Hungrigen: Zufallszahlen

> Probiere folgenden Code aus.

~~~
$fn = 50;
for (foo = [0:10]){
    zufallszahlliste = rands(0,30,1);
    translate([foo*3,0,0])cylinder(zufallszahlliste[0]);
}
~~~

Der Befehl *rands(0,30,1)* erzeugt eine einzige Zahl zwischen 0 und 30. Eigentlich wird durch diesen Befehl eine Liste erstellt. Diese Liste ist in unserem Beispiel nur ein Element lang - dafür steht die 1 am Ende. Weil eine Liste (openScad nennt das Vektor) entsteht, erfolgt der Zugriff über die Variable *zufallszahlliste[0]*. Mit den eckigen Klammern am Ende greift man auf das erste, also "nullte", Element der Liste zu. Man kann den Code auch "brutal" vereinfachen, dann ist er aber schwerer lesbar.

~~~
$fn = 50;
for (foo = [0:10]){
    translate([foo*3,0,0])cylinder(rands(0,30,1)[0]);
}
~~~

## Turm bauen

!()[OpenScad_musterlösung_turm.png]
