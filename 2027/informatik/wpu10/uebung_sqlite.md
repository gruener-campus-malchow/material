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

Führt die folgenden Eingaben durch. **Beschreibt** jeweils, wie das Programm reagiert, und **erklärt** die Reaktion mithilfe der Einstellungen eurer Tabelle.

- a) Legt einen zweiten Benutzer mit einem Benutzernamen an, den es schon gibt.
- b) Legt einen Benutzer ohne Benutzernamen an.
- c) Gebt bei `geburtsjahr` den Text „zweitausendzehn“ ein.
- d) Löscht einen Benutzer und legt danach einen neuen an. **Notiert** die `benutzer_id`, die der neue Benutzer erhält.

### Reflexion

- **Begründet**, warum ein Chat-System jedem Benutzer eine Nummer (`benutzer_id`) gibt, obwohl der Benutzername schon eindeutig ist. *Tipp:* Bezieht euch auf den Fall, dass jemand seinen Benutzernamen ändern möchte.
- **Erläutert** den Vorteil, wenn bereits die Datenbank doppelte Benutzernamen verhindert und nicht erst die Chat-App.

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

| Nr. | Auftrag |
|---|---|
| a | **Ermittelt** die Gesamtzahl der gespeicherten Nachrichten. |
| b | **Ermittelt** die zuerst und die zuletzt verschickte Nachricht. **Gebt** jeweils Zeitstempel und Text **an**. |
| c | **Ermittelt** die Anzahl der Nachrichten, die der Benutzer mit der `benutzer_id` 3 verschickt hat. |
| d | **Nennt** alle Nachrichten, in denen das Wort „Party“ vorkommt, und **bestimmt** mithilfe der Tabelle `benutzer` jeweils den Absender. |
| e | **Ermittelt** die Anzahl der Nachrichten, die nach dem 1. Oktober 2026 verschickt wurden. |
| f | **Ermittelt** die Anzahl der Nachrichten, die Benutzer 3 an Benutzer 5 geschickt hat. *(Ihr braucht zwei Filter gleichzeitig.)* |
| g | *Zusatz:* **Ermittelt** den aktivsten Benutzer im Chat. **Beschreibt** euer Vorgehen und **erläutert** die Schwierigkeiten, die dabei aufgetreten sind. |

---

## Übung 3: Wer schreibt wem? Tabellen verknüpfen

**Ziel:** Ihr versteht, warum man Daten auf mehrere Tabellen verteilt (*Redundanz vermeiden*), und lernt den **Fremdschlüssel** kennen.

### Einstieg: Eine schlecht aufgebaute Tabelle

| text | absender_name | absender_anzeigename | empfaenger_name | empfaenger_anzeigename | zeitstempel |
|---|---|---|---|---|---|
| Hast du Mathe? | leo_k | Leo | mia2010 | Mia ✨ | 2026-11-10 16:02 |
| Ja, Seite 54 | mia2010 | Mia ✨ | leo_k | Leo | 2026-11-10 16:05 |
| Danke!! | leo_k | Leo | mia2010 | Mia | 2026-11-10 16:06 |

- **Nennt** alle Angaben, die mehrfach in der Tabelle gespeichert sind.
- **Identifiziert** den Fehler in der Tabelle und **erklärt**, wie er entstehen konnte.
- Mia ändert ihren Anzeigenamen. **Beschreibt**, welche Änderungen in einem echten Chat mit 10 000 Nachrichten dann nötig wären, und **beurteilt** diesen Aufbau der Tabelle.

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
3. **Testet den Fremdschlüssel:** Tragt eine Nachricht ein, die an `empfaenger_id` 999 gehen soll. **Beschreibt** die Reaktion des Programms und **begründet**, warum dieses Verhalten für ein Chat-System wichtig ist.
4. **Testet das Löschen:** Versucht, einen Benutzer zu löschen, der schon Nachrichten geschrieben hat. **Beschreibt** die Reaktion des Programms. **Diskutiert** anschließend, wie ein Chat-System in diesem Fall vorgehen sollte.
5. **Folgt den Verknüpfungen:** Haltet in der Tabelle `nachricht` **Strg + Umschalt** gedrückt und klickt auf eine Zahl in `absender_id`. **Beschreibt**, wohin das Programm springt, und **erklärt** den Zusammenhang mit dem Fremdschlüssel.
6. **Stellt** die beiden Tabellen in einem Beziehungsdiagramm **dar**. Zeichnet Pfeile von den Fremdschlüsseln zum Primärschlüssel und **kennzeichnet** an den Pfeilen, wie viele Nachrichten ein Benutzer schreiben kann (eine oder viele).

### Zusatz für Schnelle: Gruppenchats

Bisher kann eine Nachricht nur an *eine* Person gehen. **Entwerft** die Tabellen und Felder, die man für **Gruppenchats** braucht, **stellt** euren Entwurf als Beziehungsdiagramm **dar** und **setzt** ihn danach im DB Browser **um**.

### Abschlussdiskussion: Datenschutz

Schaut euch eure fertige Datenbank an:
- **Untersucht**, welche Informationen der Betreiber eines Chat-Dienstes allein aus diesen zwei Tabellen über seine Nutzer gewinnen könnte, ohne die Nachrichten zu lesen.
- **Beurteilt**, was das für Chat-Apps bedeutet, die ihr selbst benutzt.
