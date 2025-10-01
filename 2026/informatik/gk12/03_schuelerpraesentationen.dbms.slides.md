# Datenbanksprachen
![Datenbanksprache Wordcloud !large](https://as2.ftcdn.net/v2/jpg/00/61/67/71/1000_F_61677142_9l7GExCaq4ud0o35xOB5ffA68xc7qToq.jpg)

---

## Definition und Abgrenzung
<!-- Abgrenzung zu Abfragesprachen-->
<!--
- Turing-complete (es lässt sich theoretisch jede Funktion berechnen)
- keine klassische Programmiersprache -> es kann keine Anwendungssoftware damit geschrieben werden
- Mit Hilfe der Datenbanksprache kommuniziert ein Benutzer oder auch ein Programm mit der Datenbank bzw. dem Datenbankmanagementsystem
-->
![!left](https://i.imgur.com/rvtGeSA.png)
![!right](https://cdni.iconscout.com/illustration/premium/thumb/database-management-10216063-8266093.png)

---

## Unterteilung
<!--
Data Manipulation Language (DML, deutsch „Datenverarbeitungssprache“): Sprache oder Sprachteile für das Abfragen, Einfügen, Ändern oder Löschen von Nutzdaten (Schlüssel-Wert-Paare)
-->
<!--
Data Definition Language (DDL, deutsch „Datenbeschreibungssprache“): Sprache oder Sprachteile für das Anlegen, Ändern und Löschen von Datenstrukturen ( Tabellen, z.B. Entwurf der Spalten )
-->
<!--
Data Control Language (DCL, deutsch „Datenaufsichtssprache“): Sprache oder Sprachteile für die Zugriffskontrolle (Sicherheit)
-->
![!large](https://k21academy.com/wp-content/uploads/2022/02/SQL_Diagram-1024x972.png)

---

## Weitere Unterteilung
<!--
Kategorie Data Query Language (DQL) (oder auch DRL) für die Abfrage von Daten
 -> Diese Einteilung ist jedoch nicht allgemein anerkannt (gehört eigentlich zu DML)

Einen weiteren Sonderfall bilden die Sprachelemente zur Arbeit mit Transaktionen, die uneinheitlich entweder der DML, der DCL oder einer eigenen Kategorie Transaction Control Language (TCL) zugeordnet werden

Transaktion: logische Einheit, Folge von Programmierschritten,
		wird vollständig und fehlerfrei oder gar nicht ausgeführt.
-->
![!large](https://k21academy.com/wp-content/uploads/2022/02/SQL_Diagram-1024x972.png)

---

## SQL
<!--
SQL selbst schreibt nicht vor, wie die Befehle implementiert werden
-> sagt nur was passieren soll ( Entwurf )
weitverbreitete normierte Sprache
-->
![!contain](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/SQL.png/500px-SQL.png)

---

## SQL Syntax
<!-- Am Beispiel von SQL -->
```sql
INSERT INTO Vorlesung (VorlNr, Titel, PersNr) VALUES (1000, 'Softwareentwicklung 1', 12);
INSERT INTO Vorlesung (VorlNr, Titel, PersNr) VALUES (1600, 'Algorithmen', 12);
```

```sql
SELECT Titel
  FROM Vorlesung;
```
---

## Übersicht an SQL Dialekten
<!-- Es gibt auch andere Datenbanksprachen neben SQL, jedoch seltener benutzt -->
<!-- Elefant: PostgreSQL -->
![!large](https://www.c-sharpcorner.com/article/what-are-sql-dialects-with-example/Images/1676870252163%20(Small).png)

---

# Mehrbenutzerfähigkeit
<img src = "https://img.freepik.com/vektoren-premium/mehrere-personen-nutzen-die-vpn-technologie-auf-geraeten-um-die-online-privatsphaere-und-sicherheit-zu-gewaehrleisten_538213-147143.jpg" width = 21> 

---

## Locks
<img src = "https://media.istockphoto.com/id/2157164022/de/foto/hackerangriff-oder-sicherheitsverletzung-cybercrime-konzept-datenschutz.jpg?s=612x612&w=0&k=20&c=QlgdSLHP-KFt-ka6k36fDryKaJJ6wLIy1mnru7tUHwU=" width = 20 >

---

<img src = "https://www.kleingarten.de/img/newsletter/23-04/tipps-protokoll-beitrag.jpeg" width = 23> 

---

## Transaktionsverwaltung 
<img src = "https://www.chemicals.co.uk/wp-content/uploads/2022/01/acids-with-different-phs-1024x568-1.jpg" width = 23>

---

# Funktionen eines Datenbanksytems

## Transaktionen

---

 ![!large](https://cdn1.site-media.eu/images/2048%2C2522x1330%2B0%2B86/7172872/der-hase-und-der-igel.jpg)

---

# Funktion eines DBMS
## Anwendungsunterstützung
<img source=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Linearicons_database.svg/1024px-Linearicons_database.png>

---

## Datenbanktrigger

![!contain](https://datascientest.com/de/files/2023/09/trigger-sql.png)

![Ein Datenbanktrigger, in der Informatik meist nur Trigger genannt, ist eine Funktion diverser Datenbankmanagementsysteme, insbesondere großer relationaler Datenbankmanagementsysteme.

Bei einer bestimmten Art der Änderungen (z. B. INSERT, UPDATE, DELETE bei SQL) von Daten in einer Tabelle wird ein gespeichertes Programm aufgerufen, das diese Änderung erlaubt, verhindert und/oder weitere Tätigkeiten vornimmt.]

---

![!contain](https://www.j-breuer.de/blog/wp-content/uploads/2012/07/mysql-workbench-trigger.gif)

---

## Stored Procedures

![!contain](https://www.sqlservertutorial.net/wp-content/uploads/SQL-Server-Stored-Procedure-Compiling.png)

---

Eine gespeicherte Prozedur (englisch stored procedure) ist eine Anweisung in Datenbankmanagementsystemen, mit der ganze Abläufe von Anweisungen vom Datenbank-Client aufgerufen werden können. Sie ist somit ein eigenständiger Befehl, der eine Abfolge gespeicherter Befehle ausführt. Gespeicherte Prozeduren werden im Data-Dictionary der jeweiligen Datenbank gespeichert. 

---

![!contain](https://www.revealbi.io/wp-content/uploads/2021/08/what-is-stored-procedure.png)

---

![!contain](https://kinsta.com/wp-content/uploads/2020/03/How-Web-Cache-Works.png)

---

Ein Cache ist ein schneller Pufferspeicher, der häufig genutzte Daten zwischenspeichert, um den Zugriff darauf zu beschleunigen und die Systemleistung zu verbessern. Caches kommen in vielen Bereichen vor, z. B. in Webbrowsern (zum schnelleren Laden von Websites), Prozessoren (CPU-Cache), Festplatten und Smartphones. Das Leeren des Caches kann helfen, Probleme zu beheben, die durch zu viele gespeicherte Daten entstehen, wie z. B. eine verlangsamte Performance
