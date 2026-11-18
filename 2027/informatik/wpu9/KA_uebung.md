# Übungsaufgaben zur Klassenarbeit – Webtechnologien & JavaScript

Name: ______________________  Datum: ______________

---

## Aufgabe 1 – Webtechnologien nennen

Eine Webseite wird meistens mit **drei Technologien** gebaut.
Nenne alle drei und beschreibe in **einem Satz**, wofür jede zuständig ist.

| Technologie | Wofür ist sie zuständig? |
|-------------|--------------------------|
|             |                          |
|             |                          |
|             |                          |

---

## Aufgabe 2 – Webtechnologien zuordnen

Zu welcher Technologie (HTML, CSS oder JavaScript) gehört der Code?

| Code | Technologie |
|------|-------------|
| `<h1>Willkommen</h1>` | |
| `h1 { color: blue; }` | |
| `var zahl = 5;` | |
| `<button id="start">Start</button>` | |
| `body { background-color: yellow; }` | |
| `console.log("Hallo");` | |

---

## Aufgabe 3 – Was ist ein Event?

a) Erkläre mit eigenen Worten, was ein **Event** (Ereignis) auf einer Webseite ist.

b) Nenne **drei Beispiele** für Events, die ein Nutzer auslösen kann.

---

## Aufgabe 4 – Das Event-Konzept

Bringe die Schritte in die richtige Reihenfolge (1 bis 4).

| Nr. | Schritt |
|-----|---------|
|     | Die Funktion wird ausgeführt und die Webseite reagiert. |
|     | Ein EventListener wird an ein HTML-Element gehängt. |
|     | Der EventListener bemerkt das Event. |
|     | Der Nutzer klickt auf das Element (das Event tritt ein). |

---

## Aufgabe 5 – Einen EventListener beschreiben

```html
<button id="knopf">Klick mich</button>
```

```javascript
var knopf = document.getElementById("knopf");

function zeigeNachricht() {
  alert("Du hast geklickt!");
}

knopf.addEventListener("click", zeigeNachricht);
```

a) An **welches Element** wird der EventListener gehängt?

b) Auf **welches Event** wartet der EventListener?

c) **Welche Funktion** wird ausgeführt, wenn das Event eintritt?

d) Was **passiert** für den Nutzer, wenn er auf den Button klickt?

---

## Aufgabe 6 – Noch ein EventListener

```html
<p id="text">Fahr mit der Maus über mich!</p>
```

```javascript
var text = document.getElementById("text");

function faerbeRot() {
  text.style.color = "red";
}

text.addEventListener("mouseover", faerbeRot);
```

Fülle die Tabelle aus:

| Frage | Antwort |
|-------|---------|
| Element | |
| Event | |
| Funktion | |
| Wirkung | |

---

## Aufgabe 7 – Programmierprinzipien zuordnen

Welches Prinzip zeigt der Code? Zur Auswahl stehen **Schleife, Verzweigung, Befehl, Variable, Funktion**.

**A**
```javascript
var punkte = 10;
```

**B**
```javascript
if (punkte > 5) {
  console.log("Gut gemacht!");
}
```

**C**
```javascript
console.log("Hallo Welt");
```

**D**
```javascript
var i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

**E**
```javascript
function verdopple(zahl) {
  return zahl * 2;
}
```

| Code | Prinzip |
|------|---------|
| A | |
| B | |
| C | |
| D | |
| E | |

---

## Aufgabe 8 – Prinzipien in einem Programm finden

```javascript
1  var alter = 16;
2
3  function pruefeAlter(jahre) {
4    if (jahre >= 18) {
5      console.log("volljährig");
6    } else {
7      console.log("minderjährig");
8    }
9  }
10
11 pruefeAlter(alter);
```

Gib jeweils die **Zeilennummer(n)** an:

a) Wo wird eine **Variable** deklariert?

b) Wo beginnt und endet die **Funktion**?

c) Wo steht die **Verzweigung**?

d) Wo steht ein **Befehl**, der etwas ausgibt? (Nenne ein Beispiel.)

---

## Aufgabe 9 – Eine Funktion zeilenweise erklären

```javascript
1  function begruesse(name) {
2    var nachricht = "Hallo " + name + "!";
3    console.log(nachricht);
4  }
5
6  begruesse("Mia");
```

a) Welche Zeile ist der **Funktionskopf**?

b) Welche Zeilen gehören zum **Funktionskörper**?

c) Wie heißt der **Funktionsname** und wie heißt der **Parameter**?

d) Was passiert in **Zeile 6**? Was wird ausgegeben?

---

## Aufgabe 10 – Eine Schleife zeilenweise erklären

```javascript
1  var zahl = 1;
2  while (zahl <= 4) {
3    if (zahl === 3) {
4      console.log("Drei!");
5    } else {
6      console.log(zahl);
7    }
8    zahl++;
9  }
```

a) Erkläre **jede Zeile** in einem kurzen Satz.

b) Wie lautet die **Bedingung** der Schleife?

c) Schreibe auf, was das Programm **genau ausgibt**.
