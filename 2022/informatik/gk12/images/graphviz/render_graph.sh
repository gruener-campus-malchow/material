#! /bin/bash

# Dieses Skript überwacht die Datei input.gv auf Änderungen.
# Wenn etwas geändert wurde, wird automatisch eine neue Grafik erzeugt und ersetzt die alte.
# Jeder Browser kann die Datei darstellen und "neu laden"
# Das Skript muss im Terminal ausgeführt werden
# Voraussetzung
# sudo apt install graphviz
# sudo apt install entr

echo input.gv | entr -r dot -Tpng input.gv -o graph_`date +"%Y-%m-%d_%H-%M-%S"`.png
