LK Physik Q3 Woche 01 Mechanische Wellen
==============================

## Ziele

* Die Lernenden…
  * … veranschaulichen die Entstehung (stehender) Wellen in sachgerechten Darstellungsformen, auch mithilfe digitaler Werkzeuge. (K 6)
  * … präsentieren Eigenschaften und Anwendungen von Frequenzbereichen des elektromagnetischen Spektrums sach- und adressatengerecht unter Einsatz geeigneter analoger und digitaler Medien. (K 7)
  * … bilden sich reflektiert und rational in außerfachlichen Kontexten (z.B. „Handystrahlung“) ein eigenes Urteil. (B4)
  * … reflektieren Risikoeinschätzungen zur Mobilfunktechnologie („Handystrahlung“) hinsichtlich der Güte des durchgeführten Bewertungsprozesses. (B 5)
* Basiskonzepte
  * Superposition und Komponenten
    * Erklärung von Interferenzphänomenen mithilfe der Superposition von Wellen

## Inhalte

### Einstieg Resonanz

<img src='https://g.gravizo.com/svg?
 digraph G {
  graph [fontname = "Handlee"];
  node [fontname = "Handlee"];
  edge [fontname = "Handlee"];

  bgcolor=white;

  R [label="Resonanz"];
  Err [label="Erregerschwingung"];
  Erz [label="Erzwungene\nSchwingung"];
  K [label="Resonanzkatastrophe"];
  O[label="Oszillatoren"];
  D[label="Dämpfung"];
  RK[label="Resonanzkurve"];
  E[label="Eigenfrequenz"];
  RB[label="Resonanzbedingung"];
  A[label="Amplitude"]

  O -> E [label="hat"];
  RK -> D [label="ist abhängig von"]
  Err -> O [label="wirkt auf"]
  Err -> Erz [label="ist ähnlich (f)"]
  Err -> RB [label="f_0 approx f_E"];
  O -> Erz [label="führt aus"]
  Err -> Erz [label="führt Energie zu"]
  Erz -> K [label="ohne Dämpfung"]
  RB -> R [label="wenn erfüllt dann"];
  R -> K [label="eskaliert zu"];
  D -> K [label="verhindert"];
  K -> O [label="zerstört"]
  A->Err [label="ist abhängig"]
  D->A [label="beeinflusst"]
 }
'/>


### Aufgaben


## Nur ein Technik-Test

