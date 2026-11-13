# Einführung in Datenbanken mit DB Browser for SQLite
**Kontext:** Wir bauen die Datenbank eines einfachen Chat-Systems

---

## Übung 1: Die Benutzertabelle anlegen

**Ziel:** Ihr lernt die Begriffe *Tabelle, Datensatz, Attribut, Datentyp, Primärschlüssel* und *Bedingung (Constraint)* kennen.

### Aufgaben

1. Startet DB Browser for SQLite und legt mit **„Neue Datenbank“** die Datei `chat.db` an.
2. Erstellt die Tabelle `benutzer` mit diesen Feldern:

   | Feld | Datentyp | Einstellungen |
   |---|---|---|
   | `benutzer_id` | INTEGER | PK (Primärschlüssel), AI (AutoIncrement) |
   | `benutzername` | TEXT | NN (nicht leer), U (eindeutig) |
   | `anzeigename` | TEXT | – |
   | `geburtsjahr` | INTEGER | – |
   | `registriert_am` | TEXT | NN; Format `JJJJ-MM-TT`, z. B. `2026-11-13` |

3. Wechselt zum Reiter **„Daten durchsuchen“** und legt mindestens 8 Benutzer an.
4. Speichert eure Arbeit mit **„Änderungen schreiben“**.

### Testet die Regeln eurer Tabelle

Probiert die folgenden Eingaben aus und notiert jeweils, was passiert und warum:

- a) Legt einen zweiten Benutzer mit einem Benutzernamen an, den es schon gibt.
- b) Legt einen Benutzer ohne Benutzernamen an.
- c) Gebt bei `geburtsjahr` den Text „zweitausendzehn“ ein.
- d) Löscht einen Benutzer und legt danach einen neuen an. Welche `benutzer_id` bekommt er?

### Reflexion

- Warum vergibt ein Chat-System für jeden Benutzer eine Nummer (`benutzer_id`), obwohl der Benutzername schon eindeutig ist? *Tipp:* Was passiert, wenn jemand seinen Benutzernamen ändern möchte?
- Warum ist es sinnvoll, dass die Datenbank doppelte Benutzernamen verhindert und nicht erst die Chat-App?

---

## Übung 2: Ein Chat-Archiv untersuchen

**Ziel:** Ihr lernt, Daten mit **Filtern und Sortieren** gezielt auszuwerten, ganz ohne SQL.

Ladet die Datei [chat_archiv.db](chat_archiv.db). Sie enthält die Tabellen `benutzer` und `nachricht` mit etwa 200 Nachrichten.

### So funktioniert das Filtern im Reiter „Daten durchsuchen“

- Ein **Klick auf eine Spaltenüberschrift** sortiert die Tabelle nach dieser Spalte. Ein zweiter Klick dreht die Reihenfolge um.
- Unter den Überschriften gibt es eine **Filterzeile**. Was ihr dort eintragt, wirkt so:
  - `Hausaufgabe` findet alle Einträge, die dieses Wort *enthalten*.
  - `=3` findet nur Einträge, die *genau* 3 sind.
  - `>2026-10-01` findet alle Werte, die *größer* sind (also späteres Datum).
- Unten im Fenster seht ihr, **wie viele Datensätze** zum Filter passen.
- Wenn ihr mehrere Filter gleichzeitig setzt, müssen **alle** zutreffen.

### Aufgaben

Notiert zu jeder Aufgabe die Filter, die ihr gesetzt habt, und das Ergebnis.

| Nr. | Frage |
|---|---|
| a | Wie viele Nachrichten sind insgesamt gespeichert? |
| b | Welche Nachricht wurde als erste verschickt, welche als letzte? |
| c | Wie viele Nachrichten hat der Benutzer mit der `benutzer_id` 3 verschickt? |
| d | In welchen Nachrichten kommt das Wort „Party“ vor? Wer hat sie geschrieben? |
| e | Wie viele Nachrichten wurden nach dem 1. Oktober 2026 verschickt? |
| f | Wie viele Nachrichten hat Benutzer 3 an Benutzer 5 geschickt? *(Ihr braucht zwei Filter gleichzeitig.)* |
| g | *Zusatz:* Wer ist am aktivsten im Chat? Beschreibt, wie ihr vorgegangen seid. Welche Schwierigkeit habt ihr dabei bemerkt? |

---

## Übung 3: Wer schreibt wem? Tabellen verknüpfen

**Ziel:** Ihr versteht, warum man Daten auf mehrere Tabellen verteilt (*Redundanz vermeiden*), und lernt den **Fremdschlüssel** kennen.

### Einstieg: Was ist an dieser Tabelle schlecht?

| text | absender_name | absender_anzeigename | empfaenger_name | empfaenger_anzeigename | zeitstempel |
|---|---|---|---|---|---|
| Hast du Mathe? | leo_k | Leo | mia2010 | Mia ✨ | 2026-11-10 16:02 |
| Ja, Seite 54 | mia2010 | Mia ✨ | leo_k | Leo | 2026-11-10 16:05 |
| Danke!! | leo_k | Leo | mia2010 | Mia | 2026-11-10 16:06 |

- Welche Angaben stehen mehrfach in der Tabelle?
- Findet den Fehler in der Tabelle. Wie konnte er entstehen?
- Mia ändert ihren Anzeigenamen. Was müsste man in einem echten Chat mit 10 000 Nachrichten alles ändern?

### Aufgaben

1. Öffnet eure `chat.db` aus Übung 1 und legt die Tabelle `nachricht` an:

   | Feld | Datentyp | Einstellungen |
   |---|---|---|
   | `nachricht_id` | INTEGER | PK, AI |
   | `absender_id` | INTEGER | NN, **Fremdschlüssel** → `benutzer(benutzer_id)` |
   | `empfaenger_id` | INTEGER | NN, **Fremdschlüssel** → `benutzer(benutzer_id)` |
   | `text` | TEXT | NN |
   | `zeitstempel` | TEXT | NN; Format `JJJJ-MM-TT HH:MM` |

   *So legt ihr den Fremdschlüssel an:* Geht in **„Tabelle bearbeiten“** und klickt beim Feld in die Spalte **„Fremdschlüssel“**. Wählt dort die Tabelle `benutzer` und die Spalte `benutzer_id` aus.

2. Tragt mindestens 10 Nachrichten zwischen euren Benutzern ein.
3. **Testet den Fremdschlüssel:** Tragt eine Nachricht ein, die an `empfaenger_id` 999 gehen soll. Was passiert? Erklärt, warum das für ein Chat-System wichtig ist.
4. **Testet das Löschen:** Versucht, einen Benutzer zu löschen, der schon Nachrichten geschrieben hat. Was passiert? Diskutiert, was ein Chat-System in diesem Fall tun sollte.
5. **Folgt den Verknüpfungen:** Haltet in der Tabelle `nachricht` **Strg + Umschalt** gedrückt und klickt auf eine Zahl in `absender_id`. Wohin springt das Programm?
6. Zeichnet die beiden Tabellen als Beziehungsdiagramm. Zeichnet Pfeile von den Fremdschlüsseln zum Primärschlüssel und schreibt an die Pfeile, wie viele Nachrichten ein Benutzer schreiben kann (eine oder viele?).

### Zusatz für Schnelle: Gruppenchats

Bisher kann eine Nachricht nur an *eine* Person gehen. Überlegt euch, welche Tabellen und Felder man für **Gruppenchats** braucht. Zeichnet euren Entwurf und setzt ihn danach im DB Browser um.

### Abschlussdiskussion: Datenschutz

Schaut euch eure fertige Datenbank an:
- Welche Informationen könnte der Betreiber eines Chat-Dienstes allein aus diesen zwei Tabellen über seine Nutzer herausfinden, ohne die Nachrichten zu lesen?
- Was bedeutet das für Chat-Apps, die ihr selbst benutzt?
