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
