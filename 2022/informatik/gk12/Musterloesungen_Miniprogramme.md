**Webseite mit Material der Informatik**
	Grundkurs Klasse 12 2021-2022

# Miniprogramm - kommentierte Prinzipien

~~~php

<?php
print("Hello World<br>"); //das ist ein Befehl. man erkennt das üblicherweise an einen Namen keinem, einem oder mehreren Parametern in Klammern.
$var = 1; // Der Veriable namens "var" wird ein Wert zugewiesen. Variablen beginnen immer mit einem $-Zeichen

// Schleife mit enthaltener Verzweigung, die Prüft, ob eine Zahl im Array gerade oder ungerade ist

$feld = array(1,2,3,4); // Hier wird der Variable "feld" ein neu erzeugtes Array zugewiesen

foreach ($feld as $einzel) // im Kopf der Foreach-Schleife wird festgelegt, dass über die Elemente von "feld" iteriert wird. Jedes Element ist dann jeweils über die Variable "einzel" erreichbar.
{
    if($einzel%2 == 0) //Verzweiung, die Prüft, ob bei der Division mit zwei der Rest gleich Null ist (https://de.wikipedia.org/wiki/Division_mit_Rest#Modulo)
    {
        print("gerade<br>"); //gibt "gerade" aus
    }
    else // Alternativer Zweig, also, wenn der Rest ungleich 0 ist.
    {
        print("ungerade<br>"); //gibt "ungerade" aus
    }
    
}
?>

~~~

# Miniprogramm - Größtes Element finden

TODO

