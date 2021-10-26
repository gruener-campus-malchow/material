# WPU Informatik 8

2021-2022

---

## Attention

Klassenarbeit am 02.11.2021

---

## Einplatinencomputer

* CPU
* GPU
* RAM
* I/Os

---

## Review: Raspi-Facts

Erstelle eine Webseite, bei der Du einen Raspberry Pi vorstellst. 

Dabei soll enthalten sein:

* Geschichte
* Zweck
* Technische Daten
* Zubehör
* Beispielprojekt

---

Weitere 20 Minuten für Upgrades der Seiten!

Wer fertig ist: Build our Raspi-Webserver!

---

Let's look for the facts!

Let's note useful information!

---

## Start Programming

* drei große Paradigmen: logisch, funktional, imperativ
* imperativ: 
    * Befehle
    * Variablen
    * Kontrollstrukturen

---

### Befehle

Einfaches Konzept: Tu es!

~~~ python

print("Hello World")

~~~

---

### Variablen

~~~ python

speicher = input("Sag mal, was ich sagen soll: ")
print(speicher)

~~~

---

### Kontrollstrukturen

Schleifen: Wiederholen, bis (der Arzt kommt)

~~~ python

while True:
    speicher = input("Sag mal, was ich sagen soll: ")
    print(speicher)

~~~

Beenden mit neuem Shortcut...

---

### Kontrollstrukturen II

Verzweigungen: Entscheidungen treffen

~~~ python

while True:
    speicher = input("Sag mal, was ich sagen soll: ")
    if speicher == "foo":
        print("Man bist Du foo!")
    else:
        print(speicher)

~~~

Achtung: = ungleich ==

---

### Aufgabe

Erstelle ein Programm, das sich mit Dir unterhält. 

Es kann auch ein Quiz, ein (Adventure) Spiel oder ein Taschenrechner sein.

---

auf bald
