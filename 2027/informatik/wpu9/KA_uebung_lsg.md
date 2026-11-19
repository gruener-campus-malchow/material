# Lösungen und Erklärungen zu den Übungsaufgaben

---

## Aufgabe 1 – Webtechnologien nennen

| Technologie | Wofür ist sie zuständig? |
|-------------|--------------------------|
| **HTML** (HyperText Markup Language) | Legt den **Inhalt und die Struktur** fest, also Überschriften, Absätze, Bilder und Buttons. |
| **CSS** (Cascading Style Sheets) | Bestimmt das **Aussehen** (Design), also Farben, Schriftarten, Größen und Abstände. |
| **JavaScript** | Sorgt für **Verhalten und Interaktivität**, also Reaktionen auf Klicks, Berechnungen und das Ändern der Seite. |

**Erklärung:** Ein Vergleich mit einem Haus hilft beim Merken. HTML ist das Gerüst, CSS ist die Farbe und Einrichtung, JavaScript ist der Strom, mit dem das Licht beim Drücken des Schalters angeht.

---

## Aufgabe 2 – Webtechnologien zuordnen

| Code | Technologie |
|------|-------------|
| `<h1>Willkommen</h1>` | HTML |
| `h1 { color: blue; }` | CSS |
| `var zahl = 5;` | JavaScript |
| `<button id="start">Start</button>` | HTML |
| `body { background-color: yellow; }` | CSS |
| `console.log("Hallo");` | JavaScript |

**Erklärung:**
- **HTML** erkennt man an den spitzen Klammern, den **Tags** `< >`.
- **CSS** erkennt man am Aufbau **Selektor { Eigenschaft: Wert; }**.
- **JavaScript** erkennt man an Schlüsselwörtern wie `var`, `function`, `if` und `while` oder an Befehlen wie `console.log()`.

---

## Aufgabe 3 – Was ist ein Event?

a) Ein **Event** ist ein **Ereignis**, das auf der Webseite passiert. Meistens löst der Nutzer es aus. Das Programm kann auf dieses Ereignis reagieren.

b) Mögliche Beispiele:
- `click`: Ein Element wird angeklickt.
- `mouseover`: Die Maus fährt über ein Element.
- `mouseout`: Die Maus verlässt ein Element.
- `keydown`: Eine Taste wird gedrückt.
- `input`: In ein Eingabefeld wird etwas getippt.
- `dblclick`: Ein Doppelklick.

**Erklärung:** Ohne Events wäre eine Webseite starr. Events machen sie interaktiv, weil das Programm „wartet“, bis etwas passiert, und dann reagiert.

---

## Aufgabe 4 – Das Event-Konzept

| Nr. | Schritt |
|-----|---------|
| **4** | Die Funktion wird ausgeführt und die Webseite reagiert. |
| **1** | Ein EventListener wird an ein HTML-Element gehängt. |
| **3** | Der EventListener bemerkt das Event. |
| **2** | Der Nutzer klickt auf das Element (das Event tritt ein). |

**Richtige Reihenfolge:** Listener anhängen → Event tritt ein → Listener bemerkt es → Funktion wird ausgeführt.

**Erklärung:** Der EventListener ist wie ein **Wachposten**. Er wird zuerst aufgestellt, dann wartet er. Erst wenn das Event passiert, ruft er die Funktion auf.

---

## Aufgabe 5 – Einen EventListener beschreiben

a) **Element:** der Button mit der id `knopf`. Er wird mit `document.getElementById("knopf")` geholt und in der Variable `knopf` gespeichert.

b) **Event:** `"click"`, also ein Mausklick.

c) **Funktion:** `zeigeNachricht`

d) **Wirkung:** Es öffnet sich ein Hinweisfenster mit dem Text **„Du hast geklickt!“**.

**Erklärung:** `addEventListener` bekommt zwei Angaben:
1. **welches Event** abgewartet werden soll (`"click"`),
2. **welche Funktion** dann ausgeführt wird (`zeigeNachricht`).

Hinter `zeigeNachricht` stehen **keine Klammern**. Die Funktion soll nicht sofort ausgeführt werden, sondern erst beim Klick.

---

## Aufgabe 6 – Noch ein EventListener

| Frage | Antwort |
|-------|---------|
| Element | Der Absatz `<p>` mit der id `text` |
| Event | `"mouseover"`, die Maus fährt über das Element |
| Funktion | `faerbeRot` |
| Wirkung | Die Schrift des Absatzes wird **rot** |

**Erklärung:** Mit `text.style.color = "red";` ändert JavaScript eine **CSS-Eigenschaft**. Hier sieht man gut, wie die drei Webtechnologien zusammenarbeiten: HTML liefert das Element, JavaScript reagiert auf das Event, und dabei wird das CSS-Aussehen verändert.

---

## Aufgabe 7 – Programmierprinzipien zuordnen

| Code | Prinzip | Woran erkennt man es? |
|------|---------|------------------------|
| A | **Variable** | `var` und ein Name speichern einen Wert. |
| B | **Verzweigung** | `if` prüft eine Bedingung, der Code läuft nur, wenn sie wahr ist. |
| C | **Befehl** | Eine einzelne Anweisung, die etwas tut (hier: ausgeben). |
| D | **Schleife** | `while` wiederholt den Code, solange die Bedingung wahr ist. |
| E | **Funktion** | `function`, ein Name und Klammern bündeln Code unter einem Namen. |

---

## Aufgabe 8 – Prinzipien in einem Programm finden

a) **Variable:** Zeile **1** (`var alter = 16;`)

b) **Funktion:** beginnt in Zeile **3**, endet in Zeile **9**

c) **Verzweigung:** Zeilen **4 bis 8** (`if … else`)

d) **Befehl:** z. B. Zeile **5** oder Zeile **7** (`console.log(...)`). Auch Zeile **11**, der Funktionsaufruf, ist eine Anweisung.

**Erklärung:** In echten Programmen kommen die Prinzipien **gemischt** vor. Die Verzweigung steckt hier **innerhalb** der Funktion. Ausgegeben wird **„minderjährig“**, weil 16 nicht größer oder gleich 18 ist.

---

## Aufgabe 9 – Eine Funktion zeilenweise erklären

a) **Funktionskopf:** Zeile **1**, also `function begruesse(name) {`

b) **Funktionskörper:** Zeilen **2 und 3**, der Code zwischen `{` und `}`

c) **Funktionsname:** `begruesse`. **Parameter:** `name`

d) In Zeile 6 wird die Funktion **aufgerufen**. Der Wert `"Mia"` wird an den Parameter `name` übergeben. Ausgabe: **`Hallo Mia!`**

**Erklärung der Fachbegriffe:**

| Begriff | Bedeutung | Im Beispiel |
|---------|-----------|-------------|
| Schlüsselwort | zeigt an, dass eine Funktion folgt | `function` |
| Funktionsname | Name, mit dem man die Funktion aufruft | `begruesse` |
| Parameter | „Platzhalter“, der beim Aufruf einen Wert bekommt | `name` |
| Funktionskopf | Schlüsselwort, Name und Parameter | Zeile 1 |
| Funktionskörper | Anweisungen in den geschweiften Klammern | Zeilen 2–3 |
| Funktionsaufruf | startet die Funktion | Zeile 6 |
| Argument | der konkrete Wert beim Aufruf | `"Mia"` |

**Wichtig:** Eine Funktion macht nichts, solange sie nicht **aufgerufen** wird. Erst Zeile 6 bringt sie zum Laufen.

---

## Aufgabe 10 – Eine Schleife zeilenweise erklären

a) Zeile für Zeile:

| Zeile | Erklärung |
|-------|-----------|
| 1 | Die Variable `zahl` wird deklariert und bekommt den Startwert 1. |
| 2 | Die while-Schleife beginnt und läuft, solange `zahl` kleiner oder gleich 4 ist. |
| 3 | Verzweigung: Es wird geprüft, ob `zahl` genau 3 ist. |
| 4 | Wenn ja, wird „Drei!“ ausgegeben. |
| 5 | Sonst (else) … |
| 6 | … wird der aktuelle Wert von `zahl` ausgegeben. |
| 7 | Ende der Verzweigung. |
| 8 | `zahl` wird um 1 erhöht (`zahl++` bedeutet `zahl = zahl + 1`). |
| 9 | Ende des Schleifenkörpers, dann zurück zur Bedingung in Zeile 2. |

b) **Bedingung:** `zahl <= 4`

c) **Ausgabe:**
```
1
2
Drei!
4
```

**Erklärung:** Die while-Schleife ist **kopfgesteuert**. Die Bedingung wird **vor** jedem Durchlauf geprüft. Wenn `zahl` den Wert 5 hat, ist `5 <= 4` falsch und die Schleife endet.

Zeile 8 ist wichtig: Ohne `zahl++` bliebe `zahl` immer 1. Die Bedingung wäre dann immer wahr und die Schleife würde **nie enden** (Endlosschleife).

Für die Prüfung `===` gilt: **ein** `=` weist einen Wert zu, **drei** `===` vergleichen zwei Werte.
