# Übungsarbeit Informatik WPU 9 – JavaScript und Events

**Name:** ______________________  **Datum:** ______________

**Hinweise**
- Antworte in **ganzen Sätzen**, nicht in Stichpunkten, wenn nicht anders verlangt.
- Übernimm die Aufgabennummerierung für deine Lösung.
- Bei **Wahlaufgaben** bearbeitest du nur die linke **oder** die rechte Aufgabe.
- Das Material findest du am Ende des Aufgabenblatts.

**Operatoren – was wird von dir verlangt?**

| Operator | Bedeutung |
|----------|-----------|
| **Nenne** | Begriffe ohne Erklärung aufzählen |
| **Definiere** | einen Begriff genau und in eigenen Worten bestimmen |
| **Beschreibe** | einen Sachverhalt in eigenen Worten genau wiedergeben |
| **Erkläre** | einen Sachverhalt verständlich machen, also sagen, *wie* und *warum* |
| **Erläutere** | erklären **und** mit Beispielen oder dem Material belegen |
| **Ordne zu** | Dinge einander begründet zuweisen |
| **Entwirf** | eine eigene Lösung (z. B. Code) erstellen |

---

## Szenario: Die Schülerzeitung wird lesefreundlich

Die Schülerzeitung eurer Schule hat eine eigene Webseite. Viele Leserinnen und Leser wünschen sich, dass sie die Seite an ihre Vorlieben anpassen können. Ein Informatikkurs hat deshalb einen **Dunkelmodus**, eine **Schriftvergrößerung** und ein **Titelbild, das sich vergrößert**, sobald man mit dem Zeiger darüberfährt, programmiert. Außerdem soll das **Menü** der Seite verschoben werden können.

---

## Aufgaben

| # | Aufgabe | AFB | BE |
|---|---------|-----|----|
| **1** | **Webtechnologien** | | |
| | a) **Nenne** die drei Webtechnologien, mit denen eine Webseite erstellt wird. | I | 3 |
| | b) **Erkläre** anhand des Szenarios, welche der drei Technologien jeweils für den Button „Dunkelmodus“, für die schwarze Hintergrundfarbe und für die Reaktion auf den Klick zuständig ist. | II | 3 |
| **2** | **Definiere** in eigenen Worten, was ein Event in JavaScript ist. | I | 3 |
| **3** | **Erkläre**, was ein EventListener in JavaScript ist. | I | 3 |
| **4** | **WAHLAUFGABE** – nur links **oder** rechts bearbeiten | I / II | max. 4 |
| | *Basisniveau (2 BE):* **Erläutere**, was passiert, sobald ein Event ausgelöst wird. <br> *Erweitertes Niveau (4 BE):* **Erläutere** anhand von **Zeile 6** im Material 2, was passiert, sobald das Event ausgelöst wird. | | |
| **5** | **Beschreibe** den EventListener in **Zeile 8** von Material 2. Gehe dabei auf das HTML-Element, das Event, die Funktion und die sichtbare Wirkung für den Nutzer ein. | II | 4 |
| **6** | **Erläutere** die Aufgabe von **Zeile 3** und der Funktion `registerEvents` in Material 2. Erkläre auch, warum die EventListener erst nach dem Laden der Seite angehängt werden. | II | 3 |
| **7** | **Ordne** den folgenden Codeausschnitten aus **Material 3** jeweils ein Grundprinzip der Programmierung zu (**Schleife, Verzweigung, Befehl, Variable, Funktion**) und **begründe** deine Zuordnung in jeweils einem Satz. <br> A: Zeile 1 – B: Zeilen 3 bis 10 – C: Zeilen 4 bis 8 – D: Zeilen 13 bis 16 – E: Zeile 14 | I / II | 5 |
| **8** | **WAHLAUFGABE** – nur links **oder** rechts bearbeiten | II | max. 5 |
| | *Basisniveau (3 BE):* Gib für die Funktion `vergroessern` in Material 3 den **Funktionskopf**, den **Funktionskörper** (Zeilennummern) und den **Parameter** an. <br> *Erweitertes Niveau (5 BE):* Gib wie links Kopf, Körper und Parameter an. **Erkläre** außerdem zeilenweise, was beim Aufruf `vergroessern(2)` passiert, wenn `schriftgroesse` den Wert 16 hat. | | |
| **9** | **Erkläre** die **Zeilen 12 bis 16** in Material 3 zeilenweise. Gib außerdem an, was das Programm in der Konsole ausgibt, und begründe, warum die Schleife endet. | II | 5 |
| **10** | **Entwirf JavaScript-Code** für einen EventListener und die zugehörige Funktion. Sobald ein Leser auf den Button mit der ID `btnUntenLinks` klickt, soll das Menü mit der ID `menue` **nach unten links (bottom left)** verschoben werden. Nutze Material 2 und Material 4 als Vorlage. | II / III | 9 |
| | | **Summe** | **47** |

---

## Material

### Material 1 – Wichtige Events

| Event | Wird ausgelöst, wenn … |
|-------|------------------------|
| `DOMContentLoaded` | … die HTML-Seite vollständig geladen ist. |
| `click` | … ein Element angeklickt oder angetippt wird. |
| `pointerover` | … der Zeiger (Maus, Stift oder Finger) auf das Element kommt. |
| `pointerleave` | … der Zeiger das Element verlässt. |
| `pointerdown` | … der Zeiger auf das Element drückt. |
| `pointerup` | … der Zeiger losgelassen wird. |

### Material 2 – Beispielcode aus dem Schülerzeitungsprojekt

```javascript
1   'use strict';
2
3   document.addEventListener('DOMContentLoaded', registerEvents);
4
5   function registerEvents() {
6     document.getElementById('btnDunkel').addEventListener('click', dunkelModus);
7     document.getElementById('btnHell').addEventListener('click', hellModus);
8     document.getElementById('titelbild').addEventListener('pointerover', bildGross);
9     document.getElementById('titelbild').addEventListener('pointerleave', bildKlein);
10  }
11
12  function dunkelModus() {
13    document.body.style.backgroundColor = 'black';
14    document.body.style.color = 'white';
15  }
16
17  function hellModus() {
18    document.body.style.backgroundColor = 'white';
19    document.body.style.color = 'black';
20  }
21
22  function bildGross() {
23    document.getElementById('titelbild').style.width = '600px';
24  }
25
26  function bildKlein() {
27    document.getElementById('titelbild').style.width = '300px';
28  }
```

### Material 3 – Schriftgröße und Artikel laden

```javascript
1   var schriftgroesse = 16;
2
3   function vergroessern(schritt) {
4     if (schriftgroesse < 30) {
5       schriftgroesse = schriftgroesse + schritt;
6     } else {
7       alert('Größer geht es nicht!');
8     }
9     document.body.style.fontSize = schriftgroesse + 'px';
10  }
11
12  var zaehler = 1;
13  while (zaehler <= 3) {
14    console.log('Artikel ' + zaehler + ' geladen');
15    zaehler++;
16  }
```

### Material 4 – Positionierung von HTML-Elementen mittels CSS über JS

```javascript
1   function oben_rechts() {
2     document.getElementById('beispiel').style.position = 'fixed';
3     document.getElementById('beispiel').style.left = 'auto';
4     document.getElementById('beispiel').style.right = '0';
5     document.getElementById('beispiel').style.top = '0';
6     document.getElementById('beispiel').style.bottom = 'auto';
7   }
```
