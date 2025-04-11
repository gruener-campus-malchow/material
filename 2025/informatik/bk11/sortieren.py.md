~~~python
from datetime import datetime 

def generateList(größe):
    print("Erzeuge zufällig sortierte Liste mit ",größe," Elementen.")
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
            return "Die Liste ist nicht sortiert!"
        fortschritt += 1
    return "Die Liste wurder wirklich sortiert."

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

def mergesort(liste):
    laenge = len(liste)
    index = int(abs(laenge/2))
    if laenge != 1:
        linkeliste = liste[:index]
        rechteliste = liste[index:]
        linkeliste = mergesort(linkeliste)
        rechteliste = mergesort(rechteliste)
        liste = vereinige(linkeliste,rechteliste)
    else:
        return liste
    return liste

def vereinige(liste_a,liste_b):
    liste = []
    while liste_a != [] and liste_b != []:
        if liste_a[0] < liste_b[0]:
            liste = liste + [liste_a.pop(0)]
        else:
            liste = liste + [liste_b.pop(0)]
    while liste_b != []:
            liste = liste + [liste_b.pop(0)]
    while liste_a != []:
            liste = liste + [liste_a.pop(0)]
    return liste;

#Liste erzeugen
liste = generateList(10000)
selectsort(liste)
liste = generateList(10000)
bubblesort(liste)

liste = generateList(10000)
#print (liste)
start = datetime.now()
result = mergesort(liste)
end = datetime.now() 
print(checklistorder(result))
dauer = (end - start).total_seconds() * 10**3
#print(liste)
print("Mergesort benötigte: ", dauer, "ms") 
~~~
