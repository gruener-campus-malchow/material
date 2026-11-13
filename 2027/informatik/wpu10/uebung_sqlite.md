# Einführung in Datenbanken mit DB Browser for SQLite
**Kontext:** Wir bauen die Datenbank eines einfachen Chat-Systems

> Du kannst alle Aufgaben, bei den es um den Austausch geht, zunächst mündlich mit einem Partner erledigen. Bedenke: Zukünftig musst Du Dich schriftlich äußern und Text formulieren.

---

## Übung 1: Die Benutzertabelle anlegen

**Ziel:** Du lernst die Begriffe *Tabelle, Datensatz, Attribut, Datentyp, Primärschlüssel* und *Bedingung (Constraint)* kennen.

### Aufgaben

1. Starte DB Browser for SQLite und lege mit **„Neue Datenbank“** die Datei `chat.db` an.
2. Erstelle die Tabelle `benutzer` mit diesen Feldern:

   | Feld | Datentyp | Einstellungen |
   |---|---|---|
   | `benutzer_id` | INTEGER | PK (Primärschlüssel), AI (AutoIncrement) |
   | `benutzername` | TEXT | NN (nicht leer), U (eindeutig) |
   | `anzeigename` | TEXT | – |
   | `geburtsjahr` | INTEGER | – |
   | `registriert_am` | TEXT | NN |

3. Wechsle zum Reiter **„Daten durchsuchen“** und lege mindestens 8 Benutzer an.
4. Speichere deine Arbeit mit **„Änderungen schreiben“**.

### Teste die Regeln deiner Tabelle

Führe die folgenden Eingaben durch. **Beschreibe** jeweils, wie das Programm reagiert, und **erkläre** die Reaktion mithilfe der Einstellungen deiner Tabelle.

- a) Lege einen zweiten Benutzer mit einem Benutzernamen an, den es schon gibt.
- b) Lege einen Benutzer ohne Benutzernamen an.
- c) Gib bei `geburtsjahr` den Text „zweitausendzehn“ ein.
- d) Lösche einen Benutzer und lege danach einen neuen an. **Notiere** die `benutzer_id`, die der neue Benutzer erhält.

### Reflexion

- **Begründe**, warum ein Chat-System jedem Benutzer eine Nummer (`benutzer_id`) gibt, obwohl der Benutzername schon eindeutig ist. *Tipp:* Bezieh dich auf den Fall, dass jemand seinen Benutzernamen ändern möchte.
- **Erläutere** den Vorteil, wenn bereits die Datenbank doppelte Benutzernamen verhindert und nicht erst die Chat-App.

---

## Übung 2: Ein Chat-Archiv untersuchen

**Ziel:** Du lernst, Daten mit **Filtern und Sortieren** gezielt auszuwerten, ganz ohne SQL.

Lade die Datei [chat_archiv.db](chat_archiv.db). Sie enthält die Tabellen `benutzer` und `nachricht` mit etwa 200 Nachrichten.

### So funktioniert das Filtern im Reiter „Daten durchsuchen“

- Ein **Klick auf eine Spaltenüberschrift** sortiert die Tabelle nach dieser Spalte. Ein zweiter Klick dreht die Reihenfolge um.
- Unter den Überschriften gibt es eine **Filterzeile**. Was du dort einträgst, wirkt so:
  - `Hausaufgabe` findet alle Einträge, die dieses Wort *enthalten*.
  - `=3` findet nur Einträge, die *genau* 3 sind.
  - `>2026-10-01` findet alle Werte, die *größer* sind (also späteres Datum).
- Unten im Fenster siehst du, **wie viele Datensätze** zum Filter passen.
- Wenn du mehrere Filter gleichzeitig setzt, müssen **alle** zutreffen.

### Aufgaben

Notiere zu jeder Aufgabe die Filter, die du gesetzt hast, und das Ergebnis.

| Nr. | Auftrag |
|---|---|
| a | **Ermittle** die Gesamtzahl der gespeicherten Nachrichten. |
| b | **Ermittle** die zuerst und die zuletzt verschickte Nachricht. **Gib** jeweils Zeitstempel und Text **an**. |
| c | **Ermittle** die Anzahl der Nachrichten, die der Benutzer mit der `benutzer_id` 3 verschickt hat. |
| d | **Nenne** alle Nachrichten, in denen das Wort „Party“ vorkommt, und **bestimme** mithilfe der Tabelle `benutzer` jeweils den Absender. |
| e | **Ermittle** die Anzahl der Nachrichten, die nach dem 1. Oktober 2026 verschickt wurden. |
| f | **Ermittle** die Anzahl der Nachrichten, die Benutzer 3 an Benutzer 5 geschickt hat. *(Du brauchst zwei Filter gleichzeitig.)* |
| g | *Zusatz:* **Ermittle** den aktivsten Benutzer im Chat. **Beschreibe** dein Vorgehen und **erläutere** die Schwierigkeiten, die dabei aufgetreten sind. |

---

## Übung 3: Wer schreibt wem? Tabellen verknüpfen

**Ziel:** Du verstehst, warum man Daten auf mehrere Tabellen verteilt (*Redundanz vermeiden*), und lernst den **Fremdschlüssel** kennen.

### Einstieg: Eine schlecht aufgebaute Tabelle

| text | absender_name | absender_anzeigename | empfaenger_name | empfaenger_anzeigename | zeitstempel |
|---|---|---|---|---|---|
| Hast du Mathe? | leo_k | Leo | mia2010 | Mia ✨ | 2026-11-10 16:02 |
| Ja, Seite 54 | mia2010 | Mia ✨ | leo_k | Leo | 2026-11-10 16:05 |
| Danke!! | leo_k | Leo | mia2010 | Mia | 2026-11-10 16:06 |

- **Nenne** alle Angaben, die mehrfach in der Tabelle gespeichert sind.
- **Identifiziere** den Fehler in der Tabelle und **erkläre**, wie er entstehen konnte.
- Mia ändert ihren Anzeigenamen. **Beschreibe**, welche Änderungen in einem echten Chat mit 10 000 Nachrichten dann nötig wären, und **beurteile** diesen Aufbau der Tabelle.

### Aufgaben


1. Öffne deine `chat.db` aus Übung 1 und lege die Tabelle `nachricht` an:

   | Feld | Datentyp | Einstellungen |
   |---|---|---|
   | `nachricht_id` | INTEGER | PK, AI |
   | `absender_id` | INTEGER | NN, **Fremdschlüssel** → `benutzer(benutzer_id)` |
   | `empfaenger_id` | INTEGER | NN, **Fremdschlüssel** → `benutzer(benutzer_id)` |
   | `text` | TEXT | NN |
   | `zeitstempel` | TEXT | NN|

   *So legst du den Fremdschlüssel an:* Geh in **„Tabelle bearbeiten“** und klicke beim Feld in die Spalte **„Fremdschlüssel“**. Wähle dort die Tabelle `benutzer` und die Spalte `benutzer_id` aus.

2. Trage mindestens 10 Nachrichten zwischen deinen Benutzern ein.
3. **Teste den Fremdschlüssel:** Trage eine Nachricht ein, die an `empfaenger_id` 999 gehen soll. **Beschreibe** die Reaktion des Programms und **begründe**, warum dieses Verhalten für ein Chat-System wichtig ist.
4. **Teste das Löschen:** Versuche, einen Benutzer zu löschen, der schon Nachrichten geschrieben hat. **Beschreibe** die Reaktion des Programms. **Diskutiere** anschließend, wie ein Chat-System in diesem Fall vorgehen sollte.
5. **Folge den Verknüpfungen:** Halte in der Tabelle `nachricht` **Strg + Umschalt** gedrückt und klicke auf eine Zahl in `absender_id`. **Beschreibe**, wohin das Programm springt, und **erkläre** den Zusammenhang mit dem Fremdschlüssel.
6. **Stelle** die beiden Tabellen in einem Beziehungsdiagramm **dar**. Zeichne Pfeile von den Fremdschlüsseln zum Primärschlüssel und **kennzeichne** an den Pfeilen, wie viele Nachrichten ein Benutzer schreiben kann (eine oder viele).

### Zusatz für Schnelle: Gruppenchats

Bisher kann eine Nachricht nur an *eine* Person gehen. **Entwirf** die Tabellen und Felder, die man für **Gruppenchats** braucht, **stelle** deinen Entwurf als Beziehungsdiagramm **dar** und **setze** ihn danach im DB Browser **um**.

### Abschlussdiskussion: Datenschutz

Schau dir deine fertige Datenbank an:
- **Untersuche**, welche Informationen der Betreiber eines Chat-Dienstes allein aus diesen zwei Tabellen über seine Nutzer gewinnen könnte, ohne die Nachrichten zu lesen.
- **Beurteile**, was das für Chat-Apps bedeutet, die du selbst benutzt.
