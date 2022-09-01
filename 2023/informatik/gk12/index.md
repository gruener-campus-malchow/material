**Webseite mit Material der Informatik**
	Grundkurs Klasse 12 2022-2023

# Willkommen

In diesem Dokument werden im Verlauf des Jahres diverse Materialien und Aufgaben zusammengestellt, die zum Slebstlernen und Lernen in der Schule geeignet sind.

Zunächst besprechen wir ein wenig [Organisatorisches](01_intro-orga.slides.md).

# Webentwicklung

Hier geht es um Markdown, HTML und CSS.

## Markdown

[Steckbriefe](./steckbriefe.md)

## PHP

* https://onlinephp.io/
* Grundlagen
    * öffnendes Tag
    * Output ist Code (MD oder HTML)
    * Trick: markdeep und PHP

### Aufgabe

Erstellen Sie eine beliebige Webseite mit Blindtext, die mittels Schleifen beliebig viele Überschriften mit einer Tiefe von maximal h6 generiert. Treiben wir Markdeep an die Grenzen.

~~~php
$content = file_get_contents('http://loripsum.net/api');
~~~

Für die schnellen und erfahrenen PHP-Programmierer: Machen Sie mir einen sinnvollen Projektvorschlag. Erfüllen Sie immer(!) zuerst die Stundenaufgaben.

### Beispiele

~~~
<?php
// Enter your code here, enjoy!

/*
df
sdf
sdf
*/

$var = 2; 
//echo 'Hello '.$var.' World <br> \n'; 
//echo 'SELECT * FROM table WHERE name="foo"\ņ';
if ($var == 1) 
{
	echo 'SUPER';
}
else if ($var == 2)
{
	echo 'fast SUPER';	
}
else
{
	echo 'gar nicht SUPER';
}

function irgendwas($ausgeben)
{
	$zahl = 0;
	while ($zahl < 9)
	{
		echo $ausgeben;
		$zahl++;
	}
}

irgendwas('man ey');
~~~