WPU 10 Informatik
===========


# Orga

> Wir sehen uns nur noch zwei Stunden pro Woche!

## Belehrungen

* [Regeln im NAWI-Fachraum](../../../Fachraumordnung_und_Experimentierregeln_SuS.pdf)
* [Regeln im Computerraum](../../../Regeln_Computerraum_2025-09-10.pdf)
* [Unterschriften](../../../Unterschriftenliste_Sicherheitsunterweisung_GCM_SuS.pdf)
* [Operatoren](../../../Operatoren_IQB_2025.md)
* [Kriterien für die mündliche Bewertung](../../../Kriterien_mündlich_SEK-I.md)

## Wichtige Tools

[![gcm_pad !small](../../../gcm_pad.png)](https://docs.gcm.schule/pad/)

[![gcm_slides !small](../../../gcm_slides.png)](https://docs.gcm.schule/slides/)

# Webentwicklung

![Technologien in WPU](01_Technologien.png)

> Vierte jetzt neue Technologie: PHP

# Spielen in PHP

https://www.programiz.com/php/online-compiler/

## Aufgaben

1. Erstelle ein Hello World.
1. Erstelle ein Programm, das eine Webseite ausgibt (Boilerplate genügt).
1. Die Webseite soll die Uhrzeit zum Zeitpunkt des Renderns ausgeben.
1. Die Webseite soll eine zufällige Anzahl an Uhren anzeigen, wobei die Zahl zwischen 1 und 100 liegen soll. Jede Uhr ist in einem eigenen DIV-Tag und hat eine eigene Hintergrundfarbe, die per inline-CSS gestaltet ist.

> Sende am Ende der Stunde den von Dir generierten Code per Mail.

### Code-Snippets

#### Uhrzeit bestimmen

~~~php
date_default_timezone_set("Europe/Berlin");
$timestamp = time();
$datum = date("d.m.Y",$timestamp);
$uhrzeit = date("H:i",$timestamp);
echo $datum," - ",$uhrzeit," Uhr";
~~~

# Einen eigenen Server betreiben

https://bplaced.net

* Upload des eigenen Codes per FTP und Testen mit dem Code aus der vergangenen Stunde.

## Aufgaben für Fortgeschrittene

1. Erstelle eine PHP-Datei, die ein Formular auslesen kann. Das Formular soll einen Benutzernamen und Passwort erfragen.
1. Damit das Passwort sicher übertragen wird, muss Serverseitig zu Beginn geprüft werden, ob es eine sichere und verschlüsselte Verbindung gibt. Dazu muss die Systemvariable **$_SERVER['HTTPS']** richtig gesetzt sein.
1. Wenn keine sichere Verbindung genutzt wird, wird kein Login angezeigt.
1. Ihr werdet feststellen, dass bplaced in der kostenlosen Variante keine Verschlüsselung anbietet - trotzdem solltet ihr das implementieren, weil es im realen Leben absolut notwendig ist.
1. Ein erfolgreicher Login geschieht, indem man den HASH, der aus dem Passwort erzeugt wird, mit dem HASH, der auf dem Server gespeichert ist, vergleicht.
1. Es gibt hier noch einige Stolperfallen - viel Spaß beim Tüfteln!

~~~php
// Serverseitige Hash-Erzeugung (z.B. bei Registrierung)
$hash = password_hash($_POST['password'], PASSWORD_DEFAULT);
$storedHash = '...'; // wie kommt man da nur heran? Tipp: Einmal vorher per echo das gehashte Passwort ausgeben und kopieren.

// Serverseitige Verifikation (z.B. bei Login)
if (password_verify($_POST['password'], $storedHash)) {
    echo "Login erfolgreich";
} else {
    echo "Login fehlgeschlagen";
}
~~~

## Aufgaben für weniger Fortgeschrittene

1. Erstelle eine PHP-Datei mit einem Formular, das eine Chat-Oberfläche darstellt.
1. Der Chatverlauf wird in einer Variable, einem Array gespeichert.
1. Folge dem **Code-Along** mit dem Lehrer.
