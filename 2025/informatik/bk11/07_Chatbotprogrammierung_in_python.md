Chatbotprogrammierung in Python
===========

Vorbesprechung: Wir haben uns dafür entschieden, keinen Umweg über https://snap.berkeley.edu/ zu machen. Aber zum Selbststudium ist ein [Youtube-Tutorial](https://www.youtube.com/watch?v=kSLnwUuE3Xg) vielleicht hilfreich.


## Schritt 1: Verzweigungen und Endlosschleife

> Erstellen Sie einen mehr oder weniger witzigen Chatbot. Sie können dort gern andere Programme einbinden. Wie das geht sehen wir mit der Zeit.

Benutzen Sie dafür eine Endlosschleife, die die komplette Programmroutine ausführt. Verwenden Sie außerdem Verzweigungen, um die Eingaben der Benutzer zu verarbeiten.

### Musterlösung

![](CHATBOT_Schritt1.png)

## Schritt 2: Strukturierung von Code in Funktionen

Auf [dieses Seite](./rechner.md) befindet sich der Code des Rechners, allerdings ist der angepasst. Es wurde eine main-Funktion hinzugefügt. Diese main-Funktion wird nur dann ausgeführt, wenn man *rechner.py* als eigenständiges Programm ausführt. Wir werden aber diesen Rechner in unserem Chatbot verwenden.

### Verwendung von Funktionen aus anderen Programmen

Der Code des Chatbots wurde angepasst.

![](CHATBOT_Schritt2.png)

Mit der Zeile 1 haben wir die Datei "rechner.py" eingebunden. Dafür müssen beide Python-Dateien, also die Chatbot-Datei und die Rechner-Datei im gleichen Verzeichnis liegen.

In Zeile 12 können wir dann die Funktion addieren() benutzen.

> Ergänzen Sie die Fähigkeit Multiplikation auszuführen.
