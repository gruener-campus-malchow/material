LK Physik Q3 Woche 01 Mechanische Wellen
==============================

[toc]

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

### Einstieg: Resonanz

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
  A[label="Amplitude"];
  O -> E [label="hat"];
  RK -> D [label="ist abhängig von"];
  Err -> O [label="wirkt auf"];
  Err -> Erz [label="ist ähnlich (f)"];
  Err -> RB [label="f_0 approx f_E"];
  O -> Erz [label="führt aus"];
  Err -> Erz [label="führt Energie zu"];
  Erz -> K [label="ohne Dämpfung"];
  RB -> R [label="wenn erfüllt dann"];
  R -> K [label="eskaliert zu"];
  D -> K [label="verhindert"];
  K -> O [label="zerstört"];
  A->Err [label="ist abhängig"];
  D->A [label="beeinflusst"];
 }
'/>

### Aufgaben

1. Überführen Sie die ConceptMap in einen kurzen Fachtext.
1. Lesen Sie ihren Text einem anderen Mitschüler vor und holen Sie sich Feedback ein.
1. Bewerten Sie ihren eigenen Text auf Basis des Feedbacks.

### Von der Schwingung zur Welle

#### Schwingungen
* **Definition:** Schwingungen sind periodische Bewegungen eines Systems um eine stabile Gleichgewichtslage, die durch eine Rückstellkraft charakterisiert sind. Diese Bewegungen können als harmonisch oder nicht-harmonisch klassifiziert werden, abhängig von der Form der Zeitfunktion, die die Bewegung beschreibt.
* **Mathematische Beschreibung:** Schwingungen werden häufig durch sinusförmige Funktionen dargestellt, wobei die Parameter Amplitude (A), Frequenz (f) und Phase (φ) entscheidend sind. Die allgemeine Gleichung einer harmonischen Schwingung kann als $$x(t) = A \cdot \sin(2\pi f t + φ)$$ formuliert werden.
* **Beispiele:** Ein einfaches Pendel, das um seine Ruhelage schwingt, oder eine Feder, die komprimiert und wieder dekomprimiert wird, sind klassische Beispiele für schwingende Systeme.
Physikalische Eigenschaften: Schwingungen sind charakterisiert durch ihre Frequenz (Anzahl der Schwingungen pro Zeiteinheit), Periodendauer (T) und Amplitude, die die maximale Auslenkung von der Gleichgewichtslage angibt.

#### Wellen

* **Definition:** Wellen sind räumlich ausgedehnte Störungen, die sich durch ein Medium oder im Vakuum ausbreiten und dabei Energie und Impuls transportieren, ohne dass eine dauerhafte materielle Verschiebung des Mediums erfolgt. Wellen können als Überlagerung von Schwingungen beschrieben werden, die sich synchron in Raum und Zeit ausbreiten.
* **Mathematische Beschreibung:** Wellen werden durch Wellenfunktionen beschrieben, die Parameter wie Wellenlänge (λ), Frequenz (f), Amplitude (A) und Phasengeschwindigkeit (v) umfassen. Die Wellengleichung für lineare harmonische Wellen kann als $$y(x, t) = y_{max} \cdot \sin \left[ 2 \pi \left( {{t}\over{T}} - {{x}\over{\lambda}} + φ \right) \right]$$ dargestellt werden, wobei das \\( \lambda \\) die Wellenlänge und T die Periodendauer symbolisiert. x ist der Ort zum Zeitpunkt t. In dieser Form enthält die Gleichung also zwei Variablen für eine zweidimmensionale Schwingung (x,y). Die Ausbreitungsgeschwindigkeit ergibt sich aus \\( v = f \cdot \lambda = {{\lambda}\over{T}} \\).
* **Beispiele:** Schallwellen, die sich in Luft ausbreiten, elektromagnetische Wellen (wie Licht) und Wasserwellen sind exemplarische Darstellungen von Wellenphänomenen.
* **Physikalische Eigenschaften:** Wellen besitzen Eigenschaften wie Interferenz, Beugung und Reflexion. Sie können in verschiedene Kategorien unterteilt werden, darunter Transversalwellen (bei denen die Auslenkung senkrecht zur Ausbreitungsrichtung erfolgt) und Longitudinalwellen (bei denen die Auslenkung parallel zur Ausbreitungsrichtung erfolgt).

#### Zusammenfassung

Der fundamentale Unterschied zwischen Schwingungen und Wellen liegt darin, dass Schwingungen die zeitabhängige Bewegung eines einzelnen Systems um eine Gleichgewichtslage beschreiben, während Wellen die räumliche Ausbreitung von Störungen sind, die aus einer Vielzahl von Schwingungen bestehen und dabei Energie und Impuls transportieren.

### Aufgaben

* Skizzieren Sie eine reihe gekoppelter Oszillatoren und erläutern Sie anhand der Skizze den Unterschied zwischen Schwinungen und Wellen. Üben Sie das Erläutern in Partnerarbeit.
* Beschreiben Sie die Unterschiede bei der mathematischen Darstellung von Schwingungen und Wellen.
* Vergleichen Sie die hier gefundene Darstellung mit der des Lehrbuchs von Seite 222 bis 224. Notieren Sie bisher noch unvollständige Aspekte.
  * Skizzen
  * Rechnung
  
### Rechenaufgaben

LBS: 243 Nr. 1,2,3,5

### Eigenschaften von Wellen

> Das Konzept der Elementarwellen, das "Huygensche Prinzip" besagt, dass eine gewisse Menge Oszillatoren wieder Ausgangspunkt von neuen Wellen ist, die sich zu gemeinsamen Wellenfronten überlagern. Achtung: Während das Oszillatorkonzept quasi das Medium beschreibt, können sich im gleichen Medium Wellen unterschiedlicher Wellenlängen ausbreiten (z.B. 20m-Basswelle)

<iframe width="560" height="315" src="https://www.youtube.com/embed/cnVkYK2L-wI?si=JrclXoH-hNgi8L2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/a3OYsAzLpio?si=IM8MuEvlUTZaFqag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Skizzieren wir für dieses Konzept die Effekte der:

![reminder](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2lwYmswNTRvM2Q1bGJqbGd0enY2dWJrbWdwb29rMjh5MHJtd2M0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMOX8HAvNPtayDC/giphy.gif)

> Reminder: NTA - LRS

* Punktquelle
* Wellenfronten
* Reflektion
* Brechung (Dispersion erklären)
* Beugung
* den Einfachspalt
* Interferenz am Doppelspalt.

... und ergänzen ggf. um Erläuterungen
