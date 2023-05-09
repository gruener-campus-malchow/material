Grundkurs Informatik Klasse 12 2022-2023
========================================

[toc]

*Willkommen!*

In diesem Dokument werden im Verlauf des Jahres diverse Materialien und Aufgaben zusammengestellt, die zum Slebstlernen und Lernen in der Schule geeignet sind.

Zunächst besprechen wir ein wenig [Organisatorisches](01_intro-orga.slides.md).

# Webentwicklung

Hier geht es um Markdown, HTML und CSS.

## Markdown

[Steckbriefe](./steckbriefe.md)

## PHP

- [Erste Schritte](02_erste_schritte.md)
- [Auf zum Server](02_client-server.slides.md)

## Softwareentwicklung

- [Einführung in GIT](03_git_einführung.md)
- [Transparenzpapier Klausur](04_transparenzpapier_klausur.md)
- SCRUM-Theorie im Lernraum

# Q2

- [2023-01-05](./05_projektplanung_product-backlog.md)

## Datenbankensysteme

- [Einführung](06_Einführung_DBMS.md)

### Funktionen eines DBMS

Der erste Abschnitt von https://de.wikipedia.org/wiki/Datenbank#Funktionen_eines_DBMS stellt eine Übersicht und Verlinkungen auf weiterführende Artikel dar.

Nach einer Sichtung von 10 Minuten teilen wir diesen Komplex in ca. 6 Kurzvorträge auf, die als Einzelarbeit zu halten sind. Medium ist, wie immer, [CampusSlides](https://docs.gcm.schule/slides/).

Die (kreative) Anforderung ist: Es dürfen keine Sichpunkte, sondern nur Bilder oder Grafiken (die dann Worte beinhalten dürfen) verwendet werden.

Für das Speichern und Sichern der Vorträge gibt es eine Abgabe im Lernraum.

Have a lot of fun!

## Theorie-Sessions

Wir haben folgende Fachinhalte erarbeitet:

- Modellierung in Tabellen
- Relationenmodell (RM)
- Entity-Relationship-Models (ERM)
    - (Kardinalitäten) in RM überführen

### Praxisteil 1

- gemeinsames ERM entwickeln
- Diversifizierung und Spezialisierung paarweise
- selbständiges Überführen in RM

![Tafelbild](ERM_Schule_Tafelbild.jpeg)

~~~SQL

Person(_vorname_, _nachname_, _geburtsdatum_, mail, kuerzel, Klasse, Kursjahrgang)
Raum(_haus_, _etage_, _nr_, zweck, paltzzahl, Fach.bezeichnung)
Fach(_bezeichnung_, stufen)
Kurs(_jahrgang_von_, _bezeichnung_, istKlasse, Fach.bezeichnung, Raum.haus, Raum.etage, Raum.nr)
Unterrichtet(Person.vorname, Person.nachname, Person.geburtsdatum, Kurs.bezeichnung, Kurs.jahrgang_von)
Nimmt_Teil(-||-) #siehe Unterrichtet -,-

~~~

### Praxisteil 2

Viele der hier genannten Schritte werden im Lernraum mit Abgaben der Arbeitsergebnisse kombiniert.

- paarweise ein ERM zu einem Szenario entwickeln
- Vorstellen des ERM im Auditorium
- Überführung in ein RM
- Einführung in SQL bzw. DDL (Theorie im Praxisteil)
- Entscheidung: Arbeit mit MariaDB/MySQL statt mit SQLite
- Überführen des RM in CREATE-Statements
- Testen mit eigenen Datenbanken mit Hilfe von phpMyAdmin auf bplaced.net

Beispiel:

~~~SQL

CREATE TABLE nutzer(
	id INT PRIMARY KEY AUTO_INCREMENT, 
	nutzername VARCHAR(100) NOT NULL, 
	passwort VARCHAR(255) NOT NULL, 
	datum DATE, 
	email VARCHAR(255) NOT NULL, 
	beschreibung TEXT, 
	bild BLOB, 
	link VARCHAR(255)
)

~~~

### Klausurvorbereitung

* [Übungsklausur von 2019](07_Klausurvorbereitung_Modelle_SQL.md)
* [Transparenzdokument Klausur Q2](08_transparenzdokument_Klausur_Q2.md)



> Have a lot of fun!