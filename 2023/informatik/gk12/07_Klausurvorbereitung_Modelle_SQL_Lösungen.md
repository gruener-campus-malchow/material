Lösungen zur Übungsklausur von 2019
=============

> Bitte beachten Sie: Manche Designentscheidungen würden bei einer Korrektur im Sinne des Prüflings entschieden. Folglich ist die Musterlösung i.d.R. eine mögliche Lösung und Abweichungen im Rahmen der Aufgabenstellung sind möglich.

## Datenbank als ERM aus Text entwerfen

![!large](ER_Sensornetzwerk.png)

## ERM in Relationenschreibweise überführen

Person(<u>Pseudonym</u>, E-Mail, empfangsbereit)

Nachricht(Zeit, Inhalt)

Gruppe(Bezeichnung, Manifest)

empfängt(Person.Pseudonym, Nachricht.Zeit, Nachricht.Inhalt)

sendet(Person.Pseudonym, Nachricht.Zeit, Nachricht.Inhalt)

teilt( Nachricht.Zeit, Nachricht.Inhalt, Gruppe.Bezeichnung)

gehört_zu(Gruppe.Bezeichnung, Pseudonym)