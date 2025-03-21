Vokabeltrainer Quellcode
=====================================
~~~python
liste_de = ["Haus","Park","Stadt","Bahn","Wolke"]
liste_en = ["house","park","city","train","cloud"]

def show_lists():
    global liste_de
    global liste_en
    zahl = 0
    while zahl < len(liste_de):
        print("DE: ", liste_de[zahl], " - EN: ",liste_en[zahl])
        zahl = zahl + 1

def ask_for_random_DE():
    global liste_de
    global liste_en
    import random
    zahl = random.randint(0,len(liste_de)-1)
    inkorrekt = True
    while inkorrekt:
        antwort = input("Was ist das englische Wort für: "+liste_de[zahl]+"? ")
        if antwort == liste_en[zahl]:
            print("korrekt")
            inkorrekt = False
        else:
            print("falsch")

def main():
   show_lists()
   ask_for_random_DE()

if __name__ == "__main__":
    main()
~~~
