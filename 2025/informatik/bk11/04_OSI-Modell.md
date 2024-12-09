Das OSI-Modell
====================

## Schicht 1 - Bitübertragung

- Übertragen der Daten
- Adressierung: MAC-Adresse
- Hardware: Kabel, Verteiler (Switch/Hub), Netzwerkkarte
- Protokolle: V.24, V.28, X.21, RS 232, RS 422, RS 423, RS 499 (c&p)

## Schicht 2 – Sicherungsschicht (Data Link Layer)

- Datensicherheit im Sinne der Vollständigkeit und Fehlerfreiheit
- Hardware: Switch, Netzwerkkarte
- Protkolle: Ethernet, IEEE 802.11 (WLAN), MAC, u.v.m.

## Schicht 3 – Vermittlungsschicht (Network Layer)

- Netzwerkpakete werden über verschiedene Routen versendet
- Zwischenziele werden adressiert
- Ist ein Gerät nur ein Zwischenziel, wird das Paket nicht an Schicht 4 weiter geleitet
- Adressen im Internet/Netzwerk: IP-Adresse
- Hardware: Router
- Protkoll: IP, u.v.m.

## Schicht 4 – Transportschicht (Transport Layer)

- Zerlegung von Datenströmen in Pakete oder anders herum Rekonstruktion des Datenstroms aus Paketen
- Adressierung: Zuordnung der Pakete an Ports, an denen die Anwendungen lauschen
- Protkolle: TCP, UDP, u.v.m.

## Schicht 5 - Sitzungsschicht (Session Layer)

- Es werden Daten und Techniken eingesetzt, damit Verbindungen zwischen zwei Partnern als solche identifiziert werden. Die Kommunikation erfolgt über Datenpakete. In dieser Schicht werden diese bestimmten Sessions zugeordnet, damit eine kontinuierliche Kommunikation zwischen zwei Teilnehmern möflich wird.
- Protokolle (krypischer, nicht wichtig für uns): ISO 8822 / X.216 (Presentation Service), ISO 8823 / X.226 (Connection-Oriented Presentation Protocol), ISO 9576 (Connectionless Presentation Protocol) 

## Schicht 6 - Darstellungsschicht (Presentation Layer)

- Daten werden von einer systemunabhängigen Darstellung (z.B. Binärcode) in eine Systemabhängige Darstellung überführt (z.B. ASCII)
- Verantwortlich ist i.d.R. das Betriebssystem
- Protokolle (krypischer, nicht wichtig für uns): ISO 8822 / X.216 (Presentation Service), ISO 8823 / X.226 (Connection-Oriented Presentation Protocol), ISO 9576 (Connectionless Presentation Protocol) 

## Schicht 7 - Anwendungsschicht (Application Layer)

- Hier sind die eigentlichen von Benutzern oder grundsätzlich laufenden Programme angesiedelt - beziehungsweise bietet diese Schicht die Schnittstellen an, damit die Programme darauf zugreifen können.
- Anwendungen: Webbrowser, E-Mail-Programm, Instant Messaging
- Protkolle: HTTP(S), FTP, SMTP, usw.

# Protokolle

> ... vereinfacht: Standardisieren die Schnittstellen zwischen den Schichten.

# Eselsbrücken

> „Alle deutschen Studenten trinken verschiedene Sorten Bier“ (Anwendungsschicht, Darstellungsschicht, …)

# Trivia

> Layer-8-Witze (Ebene-8-Witze) beziehen sich oft auf den Benutzer vor dem Bildschirm: "Das ist wohl ein Ebene-8-Problem..."

https://en.wikipedia.org/wiki/Layer_8

# XKCD

> Sehr wichtig: https://xkcd.com/2105/





