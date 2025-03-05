Lösungen zur Übungsklausur von 2019
=============

> Bitte beachten Sie: Manche Designentscheidungen würden bei einer Korrektur im Sinne des Prüflings entschieden. Folglich ist die Musterlösung i.d.R. eine mögliche Lösung und Abweichungen im Rahmen der Aufgabenstellung sind möglich.

## Datenbank als ERM aus Text entwerfen

![!large](ER_Sensornetzwerk.png)

## ERM in Relationenschreibweise überführen

Person(<u>Pseudonym</u>, E-Mail, empfangsbereit)

Nachricht(<u>Zeit, Inhalt</u>)

Gruppe(<u>Bezeichnung</u>, Manifest)

empfängt(<u>Person.Pseudonym, Nachricht.Zeit, Nachricht.Inhalt</u>)

sendet(<u>Person.Pseudonym, Nachricht.Zeit, Nachricht.Inhalt</u>)

teilt(<u>Nachricht.Zeit, Nachricht.Inhalt, Gruppe.Bezeichnung</u>)

gehört_zu(<u>Gruppe.Bezeichnung, Pseudonym</u>)

## Relationenschreibweise in SQL überführen

Der aktuelle Code ist auf bplaced getestet.

~~~SQL
CREATE TABLE tag (
tag VARCHAR(255) PRIMARY KEY,
description TEXT
);

CREATE TABLE author (
username VARCHAR(255) PRIMARY KEY,
prename VARCHAR(255),
lastname VARCHAR(255),
pseudonym VARCHAR(255),
mail VARCHAR(255),
hash VARCHAR(255),
first_login_date DATETIME
);

CREATE TABLE article (
url VARCHAR(255) PRIMARY KEY,
title VARCHAR(255),
author_FK VARCHAR(255),
content TEXT,
tag_FK VARCHAR(255),
creation_date DATETIME,
publish_date DATETIME,
last_edit_date DATETIME,
authorised INT,
authorised_by_author_FK VARCHAR(255),
FOREIGN KEY (tag_FK) REFERENCES tag(tag),
FOREIGN KEY (author_FK) REFERENCES author(username),
FOREIGN KEY (authorised_by_author_FK) REFERENCES author(username)
);

CREATE TABLE comment (
url VARCHAR(255),
content TEXT,
creator VARCHAR(255),
article_FK VARCHAR(255),
creation_date DATETIME,
authorised INT,
authorised_by_author_FK VARCHAR(255),
PRIMARY KEY (url),
FOREIGN KEY (authorised_by_author_FK) REFERENCES author(username)
)
~~~