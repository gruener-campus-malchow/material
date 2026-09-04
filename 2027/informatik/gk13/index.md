Grundkurs Informatik 13
================================

## 2026-08-26

- Rechner aufsetzen
- Planung Schuljahr
- [Intro-Video(s)](https://www.youtube.com/watch?v=5LyruYhfzRc)
- [Einführung Automatentheorie](https://unterrichten.zum.de/wiki/Einf%C3%BChrung_in_die_Automatentheorie)
- Tools testen:
    - https://www.automataaa.com/
    
> Ausprobieren: https://flaci.com/home/
    
### Übungsaufgaben aus der K"I"

**Übung 1: Wörter mit gerader Länge**
Konstruiere einen deterministischen endlichen Automaten (DEA) über dem Alphabet Σ = {0, 1}, der genau die Wörter akzeptiert, deren Länge gerade ist.

<!--
- **Erwartetes Ergebnis:** Ein Automat mit zwei Zuständen (gerade/ungerade Länge), die sich bei jedem eingelesenen Symbol abwechseln. Der Anfangszustand ist zugleich der Endzustand.
-->

**Übung 2: Wörter, die mit „10“ enden**
Entwickle einen DEA über dem Alphabet Σ = {0, 1}, der die Sprache aller Wörter beschreibt, die mit dem Teilwort „10“ enden.

<!--
- **Erwartetes Ergebnis:** Ein Automat, der schrittweise prüft, ob das letzte eingelesene Symbol ein „0“ ist und das vorletzte ein „1“. Nur der Zustand, in dem genau „10“ als Suffix erkannt wurde, ist ein Endzustand.
-->


**Übung 3: Wörter mit höchstens zwei „b“**
Erstelle einen DEA über dem Alphabet Σ = {a, b}, der die Sprache L = { w ∈ {a,b}* | w enthält höchstens zwei b's } erkennt.
<!--
- **Erwartetes Ergebnis:** Ein Automat mit drei akzeptierenden Zuständen (0, 1 bzw. 2 b's gezählt) und einem zusätzlichen „Fallen“-Zustand, der nach dem dritten b erreicht wird und von dem aus kein Wort mehr akzeptiert wird.   
-->
