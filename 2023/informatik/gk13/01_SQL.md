# Einführung DML

Um Tabellen zu erstellen, kann man SQL-CREATE-Statements verwenden. Der Folgende Code ist für sqlite optimiert.

~~~sql

CREATE TABLE personen (id INTEGER PRIMARY KEY AUTOINCREMENT);

CREATE TABLE befehle
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
adressat INTEGER NOT NULL,
befehl TEXT,
sender INTEGER NOT NULL,
FOREIGN KEY (adressat) REFERENCES personen(id),
FOREIGN KEY (sender) REFERENCES personen(id),
);

~~~

## Aufgabe

Erstellen Sie CREATE-Statements für folgende Relationen.

![](01_tabellen.png)


# Daten in die Datenbank einführen

~~~sql
INSERT INTO befehle(adressat, befehl, sender) VALUES
(2,"Fliegen Sie nach Andromeda",1),
(2,"Melden Sie sich bei der Sternenflotte",1),
(14,"Reparieren Sie den Warpantrieb",2);
~~~

Ein Beispiel aus dem (ehemaligen) Produktivbetrieb (Achtung, das ist MySQL/MariaDB):

![](./Wetterstation_Datenbank_Datenstruktur.png)

Daten von 2016/2017

[Daten Vorschau (32kb)](./wetterdatenbank_kurz.sql)
[Daten Vollständig (42mb)](./wetterdatenbank.sql)

