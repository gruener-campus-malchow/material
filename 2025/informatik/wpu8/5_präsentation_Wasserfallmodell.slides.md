# Wasserfallmodell

> sequentiell (mehr oder weniger strikt)

> seit den 50er Jahren 

> ursprünglich in Bau und Produktion

> einfach, weit verbreitet

---

## Beispielgrafik aus dem Netz

![](https://www.scnsoft.de/blog-pictures/softwareentwicklung/modelle-der-softwareentwicklung/1-wasserfall-.png)

> 6 Phasen, andere Namen

> frühe Phasen kommen oft zu kurz

---

![!contain](./img/5_WF.png)

---

## Initialisierung

![!right !small](./img/5_WF_Init.png)

- Problembeschreibung
- Projektziele
- Grobe Projektbeschreibung
- Grober Projektplan
- Kostenabschätzung
- Angebot an den Kunden

---

## Konzept

![!right !small](./img/5_WF_Konz.png)

- Wünsche des Kunden 
    - auswerten
    - aufschreiben (Papier) 
- am Ende: Pflichtenheft

Plichtenheft: Daten und deren Zusammenhänge verbal beschrieben (semantisches Datenmodell)

---

## Entwurf

![!right !small](./img/5_WF_Entw.png)

- eigentliche Entwicklung
- Ergebnis: Programmspezifikation
	- alle **Einzelheiten** beschrieben

> div. Technologien: Je einfacher, desto besser

---

## Implementierung

![!right !small](./img/5_WF_Impl.png)

**Entwurf** ==(Programmierung)=>> **Programm**

**Entwurf** ==(Konstruktion)=>> **Prototyp**

---

## Test

![!right !small](./img/5_WF_Test.png)

- zwei Arten
	- Programmtest: Teile auf logische Konsistenz
	- Benutzertest: unter Produktionsbedingungen durch ausgesuchte Benutzer
---

## Installation

![!right !small](./img/5_WF_Inst.png)

- Bei Software: Installationsroutine
- Sonst: Einbau, Aufbau beim Kunden

> Auslieferung

---

## Wartung

![!right !small](./img/5_WF_Wart.png)

- Anwenderschulungen
- Beseitigen von weiteren Fehlern
- Programmerweiterungen

---

## Rückkopplung

> Sinnvoll eine Phase zu wiederholen?

- falsche Annahmen
- neue Erkenntnisse
- unrealistische Planung
- fehlende Kompetenz
- zu wenig Geld

---

## Rückkopplung

> Sinnvoll eine Phase zu wiederholen?

![](./img/5_WF_Feedb_0.png)

---

![!contain](./img/5_WF_Feedb.png)

---

## Auffällig für Software-Projekte

| Phase | Anteil | Programmieren |
|---|---| ---|
| Initialisierung | 0,14 | nein |
| Konzept | 0,14 | nein |
| Entwurf | 0,14 | nein (vielleicht) |
| Implementierung | 0,14 | **ja** |
| Test | 0,14 | nein (teilweise) |
| Installation | 0,14 | nein (teilweise) |
| Wartung | 0,14 | nein (teilweise) |

---

# Quelle

- https://wiki.ibkastl.de/view/Wasserfallmodell
- https://www.scnsoft.de/blog-pictures/softwareentwicklung/modelle-der-softwareentwicklung/1-wasserfall-.png

alle abgerufen: 02.04.2025

---

# Grafiken

... gerendert mit https://sketchviz.com/

~~~dot
Initialisierung -> Konzept -> Entwurf -> Implementierung -> Test -> Installation -> Wartung
Wartung -> Installation -> Test -> Implementierung -> Entwurf -> Konzept -> Initialisierung [color=red]
~~~
