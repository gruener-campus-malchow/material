Übungen aus einer Klausur von 2019
=============

[toc]

# Material

## Szenario "MesswertStorageManagmentTool"

In einer Datenbank sollen beliebige Messwerte aus unterschiedlichsten Quellen gespeichert werden.
Dabei wird jede Quelle mit einer Beschreibung, einer Bezeichnung, einem Ort und *** versehen.
Es gibt keine zwei Orte mit der gleichen Bezeichnung. Weitere Eigenschaften von Orten sind:
Bezeichnung, Straße, Hausnummer, Postleitzahl, Stadt und GPS-Koordinaten. An einem Ort können
mehrere Sensoren sein aber ein Sensor ist immer nur an einem Ort. Ein Sensor ist charakterisiert
durch eine Bezeichnung, eine Beschreibung und einen Typ. Die Bezeichnung eines Sensors
identifiziert ihn eindeutig. Ein Sensor kann nur einen einzigen Typ haben. Typen (von Sensoren)
haben eine Einheit, eine Typenbezeichnung und eine Beschreibung. Es kann mehrere Sensoren vom
gleichen Typ geben. Ein Messwert ist besteht aus der Vorkommastelle, der Nachkommastelle und
der Zeit an der er aufgenommen wurde. Ein Messwert muss einem Sensor zugeordnet sein.
Personen sind verantwortlich für mehrere Sensoren und ein Sensor kann von mehreren Personen
betreut werden. Personen haben einen Vornamen und Nachnamen und eine E-Mailadresse für die
Kontaktaufnahme bei Fehlern oder Fragen.

## ERM "Nachrichtensystem"

![](Nachrichtensyste_ERM.png)

## Relationen für ein Redaktionssystem

~~~SQL
article(url,title, author_FK, content, tag_FK, creation_date,
publish_date, last_edit_date, authorised, authorised_by_author_FK)
author(username, prename, lastname, pseudonym, mail, hash,
first_login_date)
tag(tag, description)
comment(url, content, creator, article_FK, creation_date,authorised,
authorised_by_author_FK)
~~~

## Einfache Datenbankenzugriffe in PHP (noch python)

~~~python
import sqlite3
connection = sqlite3.connect("my.db")
cursor = connection.cursor()
sql = "PRAGMA foreign_keys = ON;"
cursor.execute(sql)
connection.commit()
connection.close()
~~~

# Aufgaben

## Modellieren (ca. 30 Minuten)

### Datenbank als ERM aus Text entwerfen (10 BE, AB 2)

Entwickeln Sie aus dem Text in MesswertStorageManagmentTool ein Entity-Relationship-Model.

### ERM in Relationenschreibweise überführen (10 BE, AB 1)

Überführen Sie das ER-Modell in Nachrichtensystem in Relationenschreibweise.

### Relationenschreibweise in SQL überführen (10 BE, AB 2)

Erzeugen Sie CREATE-Statements aus den Relationen in Relationen für ein Redaktionssystem.
Fremdschlüssel erkennen Sie an dem Suffix _FK und dem Namen des Attributs, der auf die
gleichnamige Relation verweist. Als Datentypen stehen Ihnen: TEXT, VARCHAR(255), INTEGER
und DATETIME zur Verfügung.

## Programmieren von DB mit PHP (ca. 30 Minuten)

Folgende Aufgaben sind noch auf Python gemünzt, werden aber bei Zeiten auf PHP umgewandelt.

### Bestehenden Python-Code kommentieren (10 BE, AB 2)

Kommentieren Sie zeilenweise das Skript Einfache Datenbankenzugriffe hinsichtlich der
syntaktischen und semantischen Bedeutung.

### Programm erweitern (15 BE, AB 3)

Ergänzen Sie das Programm in Einfache Datenbankenzugriffe so, dass Sie eine zufällige Anzahl
an Datenbanken zwischen 1 und 100 erzeugen, welche jeweils nur eine Tabelle namens „default“
mit den Attributen „attribute“ und „value“ jeweils vom Typ TEXT beinhalten.

## SQL (ca. 30 Minuten)

### Anfragen stellen (10 Minuten, AB 2)

Entwerfen Sie eine Anfrage für das ERM in Nachrichtensystem, die

a) ... die Anzahl der gesendeten Nachrichten pro Person ausgibt.

b) ... alle Nachrichten, die „Bob“ empfangen hat, sortiert nach Zeit, ausgibt.

### Datensätze speichern (10 Minuten, AB 3)

Entwerfen Sie Anfragen für das ERM in Nachrichtensystem, so dass jede Entität existiert und über
tatsächliche Datensätze verknüpft wird. Alle Beziehungen sollen berücksichtigt werden. Achten Sie
auf die richtige Reihenfolge, damit keine Verweise auf nicht existierende Daten entstehen. Gehen
Sie davon aus, dass alle Anfragen nacheinander und einzeln ausgeführt werden.

### Datensätze ändern (10 Minuten, AB 2)

Ändern Sie mindestens einen fiktiven Datensatz pro Entität aus dem ERM in Nachrichtensystem.
Sollte eine Beziehung dadurch verändert werden müssen, muss dies in diesem Fall ausdrücklich
durch eine Anfrage geschehen.

# Lösungen

[Lösungen](Lösungen.md)
