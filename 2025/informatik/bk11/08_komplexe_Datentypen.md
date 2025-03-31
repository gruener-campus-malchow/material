Komplexe Datentypen
===========

## Listen

> Wir haben gemeinsam in einem Code-Along ein Programm geschrieben, das einzelne Worte in einem Text findet und ersetzt. Das Programm verfolgt dabei einen primitiven Humor.

Zunächst haben wir mit der split()-Funktion einen String anhand von Leerzeichen aufgetrennt und damit die einzelne Worte in eine Liste geschrieben.

Anschließend haben wir alle einzelnen Listenelemente mit dem String "ist" verglichen. Immer, wenn das erfolgreich war, haben wir uns die Position gemerkt.

Schließlich haben wir in der ursprünglichen Liste alle Elemente mit den germekrten Ordnungszahlen durch das Wort "pupst" ersetzt.

Als letzte wichtige Operation, haben wir mit der join()-Funktion alle Listenelemente wieder mit Leerzeichen zu einem Text zusammengesetzt.

> Lustig ist es vielleicht, sich diesen Text von einer KI vorlesen zu lassen... vielleicht.
 

~~~python
text = '''Programmieren kann eine herausfordernde, aber auch äußerst lohnende Tätigkeit sein. Die Mühe, die beim Programmieren aufgebracht wird, ist oft vielschichtig und umfasst verschiedene Aspekte.

Zunächst einmal erfordert das Programmieren eine solide Grundlage in den Grundlagen der Informatik sowie in der spezifischen Programmiersprache, die verwendet wird. Das Verstehen von Syntax, Semantik und der Logik hinter dem Code ist entscheidend. Oft müssen Programmierer auch komplexe Probleme analysieren und in lösbare Teile zerlegen, was kreatives Denken und Problemlösungsfähigkeiten erfordert.

Ein weiterer Aspekt ist die Fehlersuche. Programmierer verbringen oft viel Zeit damit, Bugs zu finden und zu beheben. Dies kann frustrierend sein, da selbst kleine Fehler – wie ein fehlendes Semikolon oder ein Tippfehler – dazu führen können, dass der gesamte Code nicht funktioniert. Geduld und Ausdauer sind hier gefragt.

Darüber hinaus ist die ständige Weiterbildung ein wichtiger Teil des Programmierens. Die Technologie entwickelt sich rasant weiter, und neue Programmiersprachen, Frameworks und Tools erscheinen regelmäßig. Programmierer müssen sich kontinuierlich anpassen und lernen, um auf dem neuesten Stand zu bleiben.

Trotz all dieser Herausforderungen kann das Programmieren auch sehr befriedigend sein. Die Möglichkeit, kreative Lösungen zu entwickeln und funktionierende Software zu erstellen, die anderen Menschen hilft oder ihre Arbeit erleichtert, ist eine der größten Motivationen für viele Programmierer.

Wenn du mehr über spezifische Programmieransätze oder -techniken erfahren möchtest, lass es mich wissen!
'''
wortliste = text.split()

zähler = 0
ergebnis = 0
ist_liste = []

while(zähler < len(wortliste)):
    if wortliste[zähler] == "ist":
        ergebnis = ergebnis + 1
        ist_liste = ist_liste + [zähler]
    zähler = zähler + 1

print("Es sind",ergebnis, "ist-Worte im Text.")

zähler = 0
ausgabe = "Sie stehen an der Stelle "
while zähler < len(ist_liste):
    ausgabe = ausgabe + str(ist_liste[zähler]) + ", "
    zähler = zähler + 1
ausgabe = ausgabe + "im ganzen Text verteilt."

print(ausgabe)

zähler = 0
while zähler < len(ist_liste):
    position = ist_liste[zähler]
    wortliste[position] = 'pupst'
    zähler = zähler + 1

neuer_Text = ' '.join(wortliste)

print(neuer_Text)
~~~

### Sortieren von Listen

> Erzeugen Sie eine Liste mit zufällig generierten Integer. Die Liste soll 10.000 Elemente enthalten.

Lösung von KI generiert
~~~python
import random

# Leere Liste erstellen
zufallszahlen = []

# Füge 10.000 zufällige Ganzzahlen zur Liste hinzu
while len(zufallszahlen) < 10000:
    zufallszahlen.append(random.randint(1, 100))

# Ausgabe der Liste
print(zufallszahlen)
~~~


> Planen Sie gemeinsam mit ihrer Partnerin oder ihrem Partner einen Algorithmus mit dem Sie die Elemente der Größe nach sortieren.

Theorie: https://de.wikipedia.org/wiki/Sortierverfahren

#### Auswahl an Verfahren, die wir im Unterricht behandeln

- https://de.wikipedia.org/wiki/Selectionsort
- https://de.wikipedia.org/wiki/Bubblesort
- https://de.wikipedia.org/wiki/Mergesort
- https://de.wikipedia.org/wiki/Quicksort

#### Übung

- Erläutern Sie das Selection-Sortierverfahren an folgendem Beispiel: L = [7,6,5,4,3,2,100]
- Stellen Sie die Zwischenschritte in Form von Listen dar.

#### Musterlösung

Es wird mindestens so oft über die Liste iteriert, wie sie Elemente hat. Wenn keine Tauschoperation stattfindet und man alle Elemente untersucht hat, ist die Liste sortiert. Zu Beginn wird angenommen, das nullte Element L[0] sei das kleinste. Es wird mit allen Elementen verglichen und wenn ein kleineres gefunden wird, wird sich der Index gemerkt. Wenn alle Elemente untersucht wurden, wird das Element an der nullten Stelle mit dem indizierten Element vertauscht. Nun wird der Vorgang für das Element mit dem Index 1 wiederholt und das abgesehen von L[0] noch kleinste Element gesucht. Es wird weiterhin wiederholt, bis keine Tauschoperationen mehr stattfinden und man das vorletzte Element überprüft hat.

L = [7,6,5,4,3,2,100]
L = [2,6,5,4,3,7,100]
L = [2,3,5,4,6,7,100]
L = [2,3,4,5,6,7,100]

#### Selectsort aka Selection-Sortierverfahren

> Das hier gezeigt Programm kann etwas mehr: Es überprüft, ob eine List wirklich sortiert ist. Das hilft beim Fehler finden. 
>
> Außerdem kann das Programm die Laufzeit ausgeben und man bekommt damit einen Eindruck von der Leistung.
>
> Es taucht auch zum ersten Mal eine Abkürzung auf, die das **Iterieren** vereinfacht:
>
> Aus *fortschritt = fortschritt + 1* wird *fortschritt += 1*

~~~python

from datetime import datetime 

def generateList(größe):
    import random
    # Leere Liste erstellen
    zufallszahlen = []
    # Füge 10.000 zufällige Ganzzahlen zur Liste hinzu
    while len(zufallszahlen) < größe:
        zufallszahlen.append(random.randint(1, 1000))
    # Ausgabe der Liste
    return zufallszahlen

def checklistorder(liste):
    fortschritt = 0
    # Äußere Schleife zum Untersuchen fast aller Elemente (bis auf das Letzte)
    while fortschritt < len(liste) - 1:
        if liste[fortschritt] > liste[fortschritt+1]:
            return "Die Liste ist nicht sortiert"
        fortschritt += 1
    return "Alles okay!"

def selectsort():
    # Liste erzeugen
    liste = generateList(10000)
    # unsortierte Liste ausgeben
    #print(liste)
    print(checklistorder(liste))
    start = datetime.now() 
    # Den Zeiger auf das nullte Element setzen
    fortschritt = 0
    # Äußere Schleife zum Untersuchen fast aller Elemente (bis auf das Letzte)
    while fortschritt < len(liste) - 1:
        # es wird angenommen, das gerade ausgewählte, ist das kleinste Element
        kleinste = fortschritt
        zeiger = fortschritt
        while zeiger < len(liste):
            if liste[kleinste] >= liste[zeiger]:
                kleinste = zeiger
            zeiger = zeiger + 1
            
        puffer = liste[fortschritt]
        liste[fortschritt] = liste[kleinste]
        liste[kleinste] = puffer
        fortschritt = fortschritt + 1
    #print(liste)
    end = datetime.now() 
    print(checklistorder(liste))
    dauer = (end - start).total_seconds() * 10**3
    print("Das Programm benötigte: ", dauer, "ms") 

selectsort()

~~~

#### Bubblesort

~~~python

from datetime import datetime 

def generateList(größe):
    import random
    # Leere Liste erstellen
    zufallszahlen = []
    # Füge 10.000 zufällige Ganzzahlen zur Liste hinzu
    while len(zufallszahlen) < größe:
        zufallszahlen.append(random.randint(1, 1000))
    # Ausgabe der Liste
    return zufallszahlen

def checklistorder(liste):
    fortschritt = 0
    # Äußere Schleife zum Untersuchen fast aller Elemente (bis auf das Letzte)
    while fortschritt < len(liste) - 1:
        if liste[fortschritt] > liste[fortschritt+1]:
            return "Die Liste ist nicht sortiert"
        fortschritt += 1
    return "Alles okay!"

def selectsort(liste):
    # unsortierte Liste ausgeben
    #print(liste)
    #print(checklistorder(liste))
    start = datetime.now() 
    # Den Zeiger auf das nullte Element setzen
    fortschritt = 0
    # Äußere Schleife zum Untersuchen fast aller Elemente (bis auf das Letzte)
    while fortschritt < len(liste) - 1:
        # es wird angenommen, das gerade ausgewählte, ist das kleinste Element
        kleinste = fortschritt
        zeiger = fortschritt
        while zeiger < len(liste):
            if liste[kleinste] >= liste[zeiger]:
                kleinste = zeiger
            zeiger = zeiger + 1
            
        puffer = liste[fortschritt]
        liste[fortschritt] = liste[kleinste]
        liste[kleinste] = puffer
        fortschritt = fortschritt + 1
    #print(liste)
    end = datetime.now() 
    print(checklistorder(liste))
    dauer = (end - start).total_seconds() * 10**3
    print("Selectsort benötigte: ", dauer, "ms") 

def bubblesort(liste):
    #print(liste)
    #print(checklistorder(liste))
    start = datetime.now()

    unsortiert = True
    while unsortiert:
        unsortiert = False
        zeiger = 0
        while zeiger < len(liste) - 1:
            if liste[zeiger] > liste[zeiger+1]:
                puffer = liste[zeiger]
                liste[zeiger] = liste[zeiger+1]
                liste[zeiger+1] = puffer
                unsortiert = True
            zeiger += 1

    end = datetime.now() 
    print(checklistorder(liste))
    dauer = (end - start).total_seconds() * 10**3
    #print(liste)
    print("Bubblesort benötigte: ", dauer, "ms") 

# Liste erzeugen
liste = generateList(10000)
selectsort(liste)
bubblesort(liste)

~~~
