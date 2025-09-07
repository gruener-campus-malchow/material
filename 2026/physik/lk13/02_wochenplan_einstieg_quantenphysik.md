LK Physik Q3 Woche 01
==============================

## Ziele

* Den roten Faden in Q3 verstehen
* Verstehen, dass Energie quantisiert ist
  * Aufbau des Millikan-Versuch beschreiben
  * Ablauf des Millikan-Versuch beschreiben
  * Schlussfolgerungen aus dem M-V nachvollziehen

## Inhalte

### Millikan-Versuch

Gerthsen:

> Schwebekondensator, Millikan-Versuch. 
>
> Als Ladungsträger wird ein kleines Flüssigkeitströpfchen zwischen die Platten des horizontal gelagerten Kondensators gebracht. Im feldfreien Raum sinkt es unter dem Einfluss der Schwere und des Reibungswiderstandes mit gleichförmiger Geschwindigkeit, aus der nach dem Stokes-Gesetz (3.35) der Radius und damit auch das Gewicht mg bestimmt werden kann. Legt man eine veränderliche Spannung an den Kondensator, so kann man diese so regulieren, dass das Tröpfchen in der Schwebe gehalten wird. 
>
> Dann ist seine Ladung: 
\begin{equation}
  Q=\frac{mg}{|E|}\ = \frac{mgd}{U}\
\end{equation}

>
> Damit ist die zu messende Ladung direkt durch bekannte Größen ausgedrückt
> (Aufgabe 6.1.14).
> Mit dieser Methode fand Millikan heraus, dass die Ladung solcher Tröpfchen stets
> ein niedriges ganzes Vielfaches von 1,6 · 10^ −19 C beträgt, d. h. wenige Elementarladungen **e** enthält (Abschn. 6.1.1). Er konnte **e** so mit hoher Genauigkeit direkt bestimmen. Heutiger Wert: e = (1,602 176 46 ± 0,000 000 06) · 10 −19 C .

#### Aufgaben

1. Skizzieren Sie den Aufbau des Millikan-Versuchs.
2. Skizzieren Sie folgende Kräfteverhältnisse:
     1. Das Öltröpfchen steigt
     2. Das Öltröpfchen sinkt
     3. Das Öltröpfchen schwebt
3. Stellen Sie für den Schwebezustand eine mathematische Gleichung auf, bei der die nach oben wirkende Coulomb-Kraft gleich der nach unten wirkenden Gravitationskraft ist. Vereinfachen Sie diese Gleichung weitgehend.
4. Stellen Sie eine Vermutung auf, weshalb dieser Versuch an den Beginn einer Reihe über Quantenphysik gestellt wird.

[Material auf Leifi](https://www.leifiphysik.de/elektrizitaetslehre/ladungen-elektrisches-feld/versuche/millikan-versuch-schwebe-fall-methode-simulation)

### Nur ein Technik-Test

<img src='https://g.gravizo.com/svg?
 digraph G {
   main -> parse -> execute;
   main -> init;
   main -> cleanup;
   execute -> make_string;
   execute -> printf
   init -> make_string;
   main -> printf;
   execute -> compare;
 }
'/>
