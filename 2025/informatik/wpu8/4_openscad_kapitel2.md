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

> Aufgabe: Baue einen Turm!

### Theorie

Zunächst brauchen wir einen Ring aus Steinen. Erst im zweiten Schritt können wir die Ringe übereinander setzen und dadurch einen Turm entstehen lassen.

Der Ring soll einen Durchmesser haben und wir kennen natürlich die Länge der Steine. Die Steinlänge wird eine Variable sein. 

Um vom Durchmesser des Turms auf den Umfang zu kommen, benutzen wir eine mathematische Formel:

~~~
Umfang = Pi * Durchmesser
~~~

Die Anzahl der Steine berechnen wir, indem wir den Umfang durch die Steinlänge teilen. Dabei kommt aber oft eine Kommazahl heraus. Das ist gut, denn wir brauchen ja auch einen Abstand zwischen den Steinen - man nennt das eine Fuge.

Um die richtige Anzahl zu berechnen benutzen wir die nächst kleinere natürliche Zahl:

~~~
richtige_Anzahl = floor(Anzahl)
~~~

Das Platzieren der Steine ist jetzt möglich. Dafür benutzen wir eine Schleife die so oft läuft, wie wir Steine setzen wollen. Wir brauchen außerdem einen Winkel um den wir die Steine rotieren und natürlich den Abstand vom Mittelpunkt.

![](./img/OpenScad_musterlösung_turm.png)

> Zusatzaufgabe: Baue eine Kuppel!

## Mauer Reloaded

> Der folgende Code erzeugt eine Mauer auf einen Befehl hin.

~~~
steinlaenge = 5;

module mauer(anzahl_breite, anzahl_hoehe){
    for (reihennummer = [0:anzahl_hoehe-1]){
        for (steinnummer = [0:anzahl_breite-1]){
            if (reihennummer % 2 == 0){
                color("red")translate([steinnummer*(steinlaenge+0.1),0,reihennummer * (steinlaenge+0.1)])cube([steinlaenge,steinlaenge,steinlaenge]);
            } 
            else{
                translate([steinnummer*(steinlaenge+0.1) + steinlaenge/2,0,reihennummer * (steinlaenge+0.1)])cube([steinlaenge,steinlaenge,steinlaenge]);
            }
        }
    }
}
~~~

## Eine bleibig-eckige Burg

> Burgen sind nichts Anderes, als Mauern und Türme...

![](./img/OpenScad_Musterlösung_Beispiel_Burg.png)

~~~
steinlaenge = 5;

module mauer(anzahl_breite, anzahl_hoehe){
    for (reihennummer = [0:anzahl_hoehe-1]){
        for (steinnummer = [0:anzahl_breite-1]){
            if (reihennummer % 2 == 0){
                color("red")translate([steinnummer*(steinlaenge+0.1),0,reihennummer * (steinlaenge+0.1)])cube([steinlaenge,steinlaenge,steinlaenge]);
            } 
            else{
                translate([steinnummer*(steinlaenge+0.1) + steinlaenge/2,0,reihennummer * (steinlaenge+0.1)])cube([steinlaenge,steinlaenge,steinlaenge]);
            }
        }
    }
}
module ring(durchmesser)
{
    umfang = 3.142 * durchmesser ;
    anzahl = umfang / steinlaenge;
    genaue_anzahl = floor(anzahl);
    winkel = 360 / genaue_anzahl;
    
    for(zaehler = [0:genaue_anzahl-1]){
        rotate([0,0,winkel*zaehler])translate([durchmesser / 2,0,0])cube([steinlaenge,steinlaenge,steinlaenge]);
    }
    echo(genaue_anzahl);
}

module turm(hoehe){
    for(zaehler = [0:hoehe-1]){
        rotate([0,0,zaehler*steinlaenge/2])translate([0,0,zaehler*(steinlaenge+0.1)])ring(50);
        }
}

module spitze(hoehe,durchmesser){
    verkleinerung = floor(durchmesser / hoehe);
    for( zaehler = [0:hoehe-1] ){
             
     rotate([0,0,zaehler*steinlaenge/2])translate([0,0,zaehler*(steinlaenge+0.1)])ring(durchmesser-verkleinerung*zaehler);   
        
    }  
}

module burg(turmanzahl){
    segment = 360/turmanzahl;
    for(zaehler = [0:turmanzahl-1]){ 
        rotate([0,0,segment*zaehler])translate([turmanzahl*30,0,0])turm(10);
    }
    abstand_tuerme = 2 * turmanzahl*30 * sin(segment/2);
    anzahl_steine = floor(abstand_tuerme/5);
    for(zaehler = [0:turmanzahl-1]){ 
        rotate([0,0,segment*zaehler])translate([turmanzahl*30,0,0])rotate([0,0,90+segment/2])mauer(anzahl_steine,7);;
    }
}

burg(16);
~~~
