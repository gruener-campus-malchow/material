# Erwartungshorizont zur Übungsarbeit – JavaScript und Events

Die Musterantworten sind in ganzen Sätzen formuliert, so wie sie auch in der Klassenarbeit erwartet werden. Andere Formulierungen sind richtig, wenn der Inhalt stimmt.

**Bewertung bei Erklär-Aufgaben:** *ansatzweise* (1 BE) – *teilweise* (2 BE) – *vollständig* (3 BE)

---

## Aufgabe 1 – Webtechnologien (6 BE)

**a)** (AFB I, 3 BE)
Die drei Webtechnologien sind **HTML**, **CSS** und **JavaScript**.

**b)** (AFB II, 3 BE)
> Der Button „Dunkelmodus“ wird mit **HTML** erstellt, weil HTML den Inhalt und die Struktur der Webseite festlegt. Die schwarze Hintergrundfarbe ist eine Frage des Aussehens und wird deshalb mit **CSS** festgelegt. Dass die Seite auf den Klick reagiert, wird mit **JavaScript** programmiert, denn JavaScript ist für das Verhalten und die Interaktivität einer Webseite zuständig.

**Erklärung:** Im Projekt arbeiten alle drei zusammen. In Zeile 13 von Material 2 ändert JavaScript eine CSS-Eigenschaft (`backgroundColor`) eines HTML-Elements (`body`).

---

## Aufgabe 2 – Event definieren (AFB I, 3 BE)

> Ein Event ist ein **Ereignis**, das im **Browser** passiert, zum Beispiel ein Klick auf einen Button oder das Bewegen des Zeigers über ein Bild. Events werden meistens durch die **Interaktion des Nutzers** ausgelöst. Sie sind in allen Browsern **standardisiert** und können **Funktionen auslösen**.

**Für die volle Punktzahl** sollte die Antwort enthalten:
- Ein Event ist ein Ereignis (im Browser).
- Es entsteht durch eine Interaktion des Nutzers (oder z. B. durch das Laden der Seite).
- Es kann eine Funktion auslösen.
- Ein Beispiel (`click`, `pointerover` …).

---

## Aufgabe 3 – EventListener erklären (AFB I, 3 BE)

> Ein EventListener ist ein „Zuhörer“, der an ein HTML-Element gehängt wird und dort **auf ein bestimmtes Event wartet**. **Wenn das Event eintritt, führt er eine festgelegte Funktion aus.** Damit **verknüpft** der EventListener ein Event mit einer **Reaktion** der Webseite.

**Für die volle Punktzahl** sollte die Antwort enthalten:
- Er wartet auf ein Event.
- Wenn das Event eintritt, wird eine Funktion ausgeführt.
- Er verknüpft Event und Reaktion.

---

## Aufgabe 4 – Wahlaufgabe (AFB I / II, 2 oder 4 BE)

**Basisniveau (2 BE):**
> Sobald das Event ausgelöst wird, wird der Code einer Funktion ausgeführt.

**Erweitertes Niveau (4 BE):**
> Sobald das Event **„click“** auf dem HTML-Element mit der ID **„btnDunkel“** ausgelöst wird, wird der Code der Funktion **„dunkelModus“** ausgeführt. Dadurch wird der Hintergrund der Seite schwarz und die Schrift weiß.

**Erklärung:** Beim erweiterten Niveau werden die drei Angaben aus dem Code genannt, also **Event**, **ID des Elements** und **Funktionsname**.

---

## Aufgabe 5 – EventListener beschreiben (AFB II, 4 BE)

> In Zeile 8 wird mit `document.getElementById('titelbild')` das HTML-Element mit der ID **„titelbild“** ausgewählt. An dieses Element wird mit `addEventListener` ein EventListener gehängt, der auf das Event **„pointerover“** wartet. Dieses Event wird ausgelöst, sobald der Zeiger auf das Bild kommt. Dann wird die Funktion **„bildGross“** ausgeführt, die die Breite des Bildes auf **600 Pixel** setzt, sodass der Nutzer das Bild **vergrößert** sieht.

| Kriterium | BE |
|-----------|----|
| Element mit ID „titelbild“ | 1 |
| Event „pointerover“ mit Bedeutung | 1 |
| Funktion „bildGross“ | 1 |
| Wirkung: Bild wird auf 600px vergrößert | 1 |

**Hinweis:** Hinter `bildGross` stehen **keine Klammern**. Die Funktion wird nur übergeben und erst später ausgeführt, wenn das Event eintritt.

---

## Aufgabe 6 – DOMContentLoaded und registerEvents (AFB II, 3 BE)

> In Zeile 3 wird ein EventListener an das gesamte Dokument gehängt. Er wartet auf das Event **„DOMContentLoaded“**, das ausgelöst wird, sobald die HTML-Seite vollständig geladen ist. Dann wird die Funktion **„registerEvents“** ausgeführt, die alle anderen EventListener an die Buttons und an das Bild hängt. Das ist nötig, weil `getElementById` ein Element nur finden kann, **wenn es schon geladen ist**. Würde man die EventListener zu früh anhängen, gäbe es die Elemente noch nicht und es käme zu einem Fehler.

---

## Aufgabe 7 – Prinzipien zuordnen (AFB I / II, 5 BE)

| Ausschnitt | Prinzip | Begründung (Beispielsatz) |
|------------|---------|---------------------------|
| A: Zeile 1 | **Variable** | Mit `var` wird die Variable `schriftgroesse` deklariert, die den Wert 16 speichert. |
| B: Zeilen 3–10 | **Funktion** | Mit `function` wird Code unter dem Namen `vergroessern` zusammengefasst, damit man ihn später aufrufen kann. |
| C: Zeilen 4–8 | **Verzweigung** | Mit `if … else` wird geprüft, ob die Schriftgröße kleiner als 30 ist, und je nach Ergebnis wird ein anderer Code ausgeführt. |
| D: Zeilen 13–16 | **Schleife** | Mit `while` wird der Code wiederholt, solange die Bedingung `zaehler <= 3` wahr ist. |
| E: Zeile 14 | **Befehl** | `console.log(...)` ist eine einzelne Anweisung, die einen Text in der Konsole ausgibt. |

Je richtiger Zuordnung **mit** passender Begründung gibt es 1 BE.

**Erklärung:** Die Prinzipien stecken ineinander. Die Verzweigung (C) liegt **innerhalb** der Funktion (B), der Befehl (E) liegt **innerhalb** der Schleife (D). Achte deshalb genau auf die angegebenen Zeilen.

---

## Aufgabe 8 – Wahlaufgabe Funktion (AFB II, 3 oder 5 BE)

**Basisniveau (3 BE):**
> Der Funktionskopf steht in **Zeile 3** und lautet `function vergroessern(schritt) {`. Der Funktionskörper umfasst die **Zeilen 4 bis 9**, also alles zwischen den geschweiften Klammern. Der Parameter der Funktion heißt **`schritt`**.

**Erweitertes Niveau (5 BE):** wie Basisniveau, zusätzlich:
> Beim Aufruf `vergroessern(2)` bekommt der Parameter `schritt` den Wert 2. In Zeile 4 wird geprüft, ob `schriftgroesse` kleiner als 30 ist. Da 16 kleiner als 30 ist, ist die Bedingung wahr und Zeile 5 wird ausgeführt. Dort wird `schriftgroesse` um 2 erhöht und hat danach den Wert **18**. Der else-Teil in Zeile 7 wird übersprungen. In Zeile 9 wird die Schriftgröße der Seite auf **„18px“** gesetzt.

**Begriffe zum Merken:**

| Begriff | Im Beispiel |
|---------|-------------|
| Funktionskopf | `function vergroessern(schritt) {` |
| Funktionsname | `vergroessern` |
| Parameter (Platzhalter) | `schritt` |
| Funktionskörper | Zeilen 4–9 |
| Aufruf mit Argument | `vergroessern(2)`, das Argument ist `2` |

---

## Aufgabe 9 – Schleife zeilenweise erklären (AFB II, 5 BE)

> In **Zeile 12** wird die Variable `zaehler` deklariert und bekommt den Startwert 1. In **Zeile 13** beginnt eine kopfgesteuerte while-Schleife, die so lange läuft, wie `zaehler` kleiner oder gleich 3 ist. In **Zeile 14** wird in der Konsole der Text „Artikel“, der aktuelle Wert von `zaehler` und „geladen“ ausgegeben. In **Zeile 15** wird `zaehler` um 1 erhöht. **Zeile 16** schließt den Schleifenkörper, danach wird die Bedingung in Zeile 13 erneut geprüft.

**Ausgabe:**
```
Artikel 1 geladen
Artikel 2 geladen
Artikel 3 geladen
```

> Die Schleife endet, weil `zaehler` nach dem dritten Durchlauf den Wert 4 hat und die Bedingung `4 <= 3` falsch ist. Ohne Zeile 15 bliebe `zaehler` immer 1 und es entstünde eine Endlosschleife.

| Kriterium | BE |
|-----------|----|
| Zeilen 12–16 richtig erklärt | 3 |
| Ausgabe richtig | 1 |
| Abbruch der Schleife begründet | 1 |

---

## Aufgabe 10 – EventListener und Funktion entwerfen (AFB II / III, 9 BE)

**Musterlösung:**

```javascript
'use strict';

document.addEventListener('DOMContentLoaded', registerEvents);

function registerEvents() {
  document.getElementById('btnUntenLinks').addEventListener('click', unten_links);
}

function unten_links() {
  document.getElementById('menue').style.position = 'fixed';
  document.getElementById('menue').style.left = '0';
  document.getElementById('menue').style.right = 'auto';
  document.getElementById('menue').style.top = 'auto';
  document.getElementById('menue').style.bottom = '0';
}
```

| Kriterium | AFB | BE |
|-----------|-----|----|
| EventListener ansatzweise / teilweise / vollständig (Element holen, `addEventListener`, Event, Funktionsname ohne Klammern, Registrierung nach `DOMContentLoaded`) | III | 3 |
| Funktion ansatzweise / teilweise / vollständig (Kopf, Körper, alle vier Positionsangaben passend zu „unten links“) | III | 3 |
| Verwendung des richtigen Events (`click`) und der richtigen IDs (`btnUntenLinks`, `menue`) | II | 3 |

**Erklärung:** Für „unten links“ werden `left` und `bottom` auf 0 gesetzt, `right` und `top` auf `auto`. So klebt das Menü an der unteren linken Ecke. Vergleiche dazu Material 4: Bei „oben rechts“ ist es genau umgekehrt.

**Typische Fehler:**
- Klammern hinter dem Funktionsnamen im EventListener, also `addEventListener('click', unten_links())`. Dann wird die Funktion sofort ausgeführt statt erst beim Klick.
- Falsche oder abweichend geschriebene IDs, z. B. `menu` statt `menue`. JavaScript unterscheidet genau.
- `auto` ohne Anführungszeichen schreiben. Richtig ist `'auto'` als Text.
