<?php

// Zugangsdaten für die DB anlegen
$host='localhost';
$username='maihoernchen_admin';
$password='ySkAgZ9hwEZztQSa';
$database='maihoernchen_reddit';

// Verbindung zur DB herstellen
$connection = new PDO("mysql:host=".$host.";dbname=".$database, $username, $password);

// Anlegen einer Anfrage
$statement = $connection -> prepare("SELECT * FROM nutzer WHERE nutzername = :ph");
// Anlegen eines Wertes
$wert = "Liand-ry";
// Binden des Wertes an einen Parameter
$statement->bindParam(':ph', $wert);
// Ausführen der Anfrage
$statement -> execute();
// Holen und Vorverarbeiten der gesamten Antwort (keine gute Idee für große Datenmengen)
$result = $statement->fetchAll();

print_r($result);
echo('<hr>');
var_dump($result);
