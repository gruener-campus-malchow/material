# Zu erwartende Klausurinhalte

- Kondensatoren Aufbau und elektrisches Feld
- Entwerfen eines Stromkreises
- Entladen von Kondensatoren
- Dielektrikum
- Energie und Leistung (Kondensator als Energiespeicher)
- Vergleich Entladevorgang verschiedener Energiespeicher

# Kondensator oder Akku? – Energiespeicher im Vergleich

> **Leitfrage:** Warum fährt ein E-Auto mit Akku, während ein Bus ihre Bremsenergie oft in Kondensatoren speichert?

---

## Vergleich

|PKW | Capabus (Belgrad) |
|---|---|
|![foo](https://upload.wikimedia.org/wikipedia/commons/2/26/Elektroauto_CCS_HPC.jpg)| ![foo](https://upload.wikimedia.org/wikipedia/commons/7/78/Higer_GSP_2101.jpg)

Beide Fahrzeuge speichern elektrische Energie – aber in unterschiedlichen Speichern.

**Auftrag:** Stellen Sie Hypothesen auf, warum die Ingenieure jeweils einen anderen Speicher gewählt haben.

---

## Experiment

**Aufbau:** Ein Superkondensator (1 F), der mit einer R6-Batterie auf 1,5 V geladen wurde, und anschließend eine R6-Batterie (1,5 V) werden jeweils über einen Widerstand R = 10 Ω entladen. Die Spannung U(t) wird ca. 3 Minuten lang aufgezeichnet.

**Aufträge:**

1. **Skizzieren** Sie den Schaltplan in Ihrem Heft.
1. **Messen** Sie die Kurvenverläufe mit dem Messwerterfassungssystem.
2. **Beschreiben** Sie die Unterschiede zwischen den beiden Kurven.
3. **Bestimmen** Sie aus der Messkurve die Halbwertszeit.

---

## Info: Zwei Speicherprinzipien

### Kondensator – Energie im elektrischen Feld

Ein Superkondensator speichert Ladung in einer sehr dünnen **Doppelschicht** zwischen Elektrode (poröse Aktivkohle mit riesiger Oberfläche) und Elektrolyt. Dabei findet keine chemische Reaktion statt.

![Prinzip der Helmholtz-Doppelschicht in einem Superkondensator](https://upload.wikimedia.org/wikipedia/commons/b/b2/EDLC-simplified-principle.png)

- Spannung und Ladung sind proportional: **U = Q / C** → beim Entladen sinkt die Spannung.
- Gespeicherte Energie: **W = ½ · C · U²**

### Batterie und Akku – Energie in chemischen Bindungen

In Batterien und Akkus wird Energie elektrochemisch gespeichert. Im Lithium-Ionen-Akku werden Li⁺-Ionen beim Laden und Entladen in die Elektroden eingelagert und wieder ausgelagert (**Interkalation**). Die Zellspannung wird von den beteiligten Stoffen bestimmt und bleibt beim Entladen lange nahezu konstant.

- Gespeicherte Energie: **W ≈ Q · U_Nenn** (Q in As: 1 Ah = 3600 As)
- Lithium-Eisenphosphat-Zellen (LiFePO4, LFP) haben eine Nennspannung von ca. 3,2 V – unabhängig von ihrer Größe:

![Große LiFePO4-Zellen mit 700 Ah und 3,25 V](https://upload.wikimedia.org/wikipedia/commons/4/43/Lithium_Iron_Phosphate_LiFePO4_Cells_700_Ah_Amp_Hours_3.25_Volts_-_2.jpg)

Weiterlesen: [Lithium-Ionen-Akkumulator](https://de.wikipedia.org/wiki/Lithium-Ionen-Akkumulator) · [Lithium-Eisenphosphat-Akkumulator](https://de.wikipedia.org/wiki/Lithium-Eisenphosphat-Akkumulator) · [Superkondensator](https://de.wikipedia.org/wiki/Superkondensator)

---

## Arbeitsauftrag (Partnerarbeit, 15 min)

### Aufgabe 1 – Energie im Versuch

Gegeben: Superkondensator 1 F / 2,7 V, Masse ca. 1 g, im Versuch mit einer R6-Batterie auf 1,5 V geladen; R6-Batterie (Alkali-Mangan) mit einer Kapazität von ca. 2,5 Ah bei geringer Last, mittlerer Entladespannung ca. 1,25 V und Masse ca. 23 g.

1. **Berechnen** Sie die im auf 1,5 V geladenen Superkondensator gespeicherte Energie. *(AFB I)*
2. **Bestimmen** Sie die Energie, die bei der Entladung bis auf 0,75 V entnommen werden kann. **Zeigen** Sie allgemein, dass bei Entladung auf die halbe Ausgangsspannung stets 75 % der gespeicherten Energie entnommen werden. *(AFB II)*
3. **Berechnen** Sie die in der R6-Batterie gespeicherte Energie und **vergleichen** Sie beide Speicher hinsichtlich gespeicherter Energie und spezifischer Energie (Energie pro Masse). *(AFB II)*

### Aufgabe 2 – Äquivalente Kapazität

Gegeben: große LiFePO4-Zelle 3,2 V / 100 Ah, Masse ca. 2 kg; Superkondensator 3000 F / 2,7 V, Masse 0,51 kg.

1. **Berechnen** Sie die in der LiFePO4-Zelle gespeicherte Energie. *(AFB I)*
2. **Bestimmen** Sie die Kapazität eines Kondensators, der bei 3,2 V dieselbe Energie speichert. *(AFB II)*
3. **Ermitteln** Sie Anzahl und Gesamtmasse der Superkondensatoren, die dieselbe Energie speichern, unter der Annahme, dass sie vollständig bis 0 V entladen werden können. **Vergleichen** Sie mit der Masse der LiFePO4-Zelle. *(AFB II)*
4. **Beurteilen** Sie, ob die Annahme vollständiger Entladung realistisch ist, und **erläutern** Sie, wie sich das Ergebnis aus 2.3 bei einer Nutzung zwischen 2,7 V und 1,35 V verändert. *(AFB III)*

### Aufgabe 3 – Leistung (Zusatzaufgabe)

Eine Spannungsquelle mit Leerlaufspannung U und Innenwiderstand Rᵢ wird mit einem Lastwiderstand R belastet.

1. **Leiten** Sie **her**, dass die im Lastwiderstand umgesetzte Leistung für R = Rᵢ maximal wird und P_max = U² / (4 · Rᵢ) beträgt. *(AFB II)*
2. **Berechnen** Sie P_max und die massenbezogene Leistung für (a) einen Superkondensator 3000 F / 2,7 V mit Rᵢ = 0,3 mΩ und 0,51 kg sowie (b) eine LiFePO4-Zelle (Bauform 18650) mit 3,2 V, Rᵢ = 30 mΩ und 40 g. *(AFB I)*
3. **Begründen** Sie, warum es sich bei diesen Werten nur um theoretische Obergrenzen handelt. *(AFB II)*

---

## Sicherung

### Vergleichstabelle

Ergänzen Sie die leeren Felder mit Ihren Ergebnissen aus dem Experiment und den Aufgaben 1 und 2. Die übrigen Werte sind Richtwerte.

| Kenngröße | Superkondensator | Li-Ionen-Akku (NMC) | LiFePO4-Akku (LFP) |
|---|---|---|---|
| Speicherprinzip | | | |
| Spannungsverlauf beim Entladen | | | |
| Zellspannung | max. 2,5–3 V | 3,6–3,7 V nominal | 3,2–3,3 V nominal |
| Spezifische Energie | | ca. 150–270 Wh/kg | |
| Spezifische Leistung | ca. 5–15 kW/kg | ca. 0,3–1,5 kW/kg | ca. 0,3–2 kW/kg |
| Zyklenfestigkeit | 500 000–1 000 000 | ca. 500–2000 | ca. 2000–6000 und mehr |
| Ladezeit | Sekunden | ca. 0,5 bis mehrere Stunden | ca. 0,5 bis mehrere Stunden |
| Sicherheit | kein thermisches Durchgehen | thermisches Durchgehen möglich | thermisch und chemisch deutlich stabiler |
| Typische Anwendung | | | |

### Ragone-Diagramm

![!large Ragone-Diagramm: Leistungsdichte gegen Energiedichte verschiedener Energiespeicher](https://upload.wikimedia.org/wikipedia/commons/2/28/Power-energy_for_energy_storage_systems.png)

**Aufträge:**

1. **Beschreiben** Sie, wo Kondensatoren, Superkondensatoren und Akkus im Diagramm liegen.
2. **Erläutern** Sie, warum der Quotient aus spezifischer Energie und spezifischer Leistung die typische Entladezeit angibt.
3. **Beantworten** Sie die Leitfrage in 3–5 Sätzen.

---

## Hausaufgabe – Anwendung Straßenbahn

Eine Straßenbahn (m = 30 t) bremst gleichmäßig aus 50 km/h in 10 s bis zum Stillstand. Die Bremsenergie soll vollständig gespeichert werden.

1. **Berechnen** Sie die zurückzugewinnende Energie und die mittlere Bremsleistung. *(AFB I)*
2. **Ermitteln** Sie Anzahl und Masse der Superkondensatorzellen aus Aufgabe 2, die benötigt werden, wenn jede Zelle nur zwischen 2,7 V und 1,35 V genutzt wird. *(AFB II)*
3. Eine LiFePO4-Batterie darf dauerhaft höchstens mit 10 C belastet werden (Strom in A = 10 × Kapazität in Ah). **Bestimmen** Sie die Mindestkapazität der Batterie in kWh, damit sie die Bremsleistung aufnehmen kann, und **schätzen** Sie ihre Masse bei einer spezifischen Energie von 150 Wh/kg **ab**. *(AFB II)*
4. Die Bahn bremst etwa 100-mal pro Tag. **Bewerten** Sie beide Speicherlösungen unter Berücksichtigung von Masse, Zyklenfestigkeit und Lebensdauer. *(AFB III)*

---

# Musterlösungen und Erläuterungen

*Erst selbst bearbeiten, dann zum Vergleichen auf eine Aufgabe klicken.*

## Vergleich (Einstieg)

<details>
<summary><b>Mögliche Hypothesen</b></summary>

- **Pkw:** Er muss viel Energie für große Reichweiten (mehrere 100 km) mitführen. Entscheidend ist eine hohe **Energiedichte** (Energie pro Masse), die nur ein Akku bietet.
- **Capabus:** Er hält alle paar hundert Meter, bremst und beschleunigt ständig und kann an jeder Haltestelle in Sekunden nachladen. Entscheidend sind eine hohe **Leistungsdichte**, sehr kurze Ladezeiten und eine sehr hohe **Zyklenfestigkeit**. Dafür eignet sich der Superkondensator.
- Weitere sinnvolle Gesichtspunkte: Lebensdauer, Kosten, Gewicht, Sicherheit, Verhalten bei Kälte.

</details>

## Experiment

<details>
<summary><b>1. Schaltplan</b></summary>

Kondensatorkreis mit Umschalter S: Stellung 1 lädt den Kondensator über einen kleinen Vorwiderstand an der R6-Batterie, Stellung 2 entlädt ihn über R = 10 Ω. Das Messwerterfassungssystem misst die Spannung U(t) **parallel** zum Kondensator.

```
 Stellung 1: Laden                 Stellung 2: Entladen

 ┌─┤|──[ R_v ]──┬───┐              ┌───┬───────┐
 │  R6          │   │              │   │       │
 │            C ═  (V)           C ═  (V)    [ R ] 10 Ω
 │              │   │              │   │       │
 └──────────────┴───┘              └───┴───────┘
```

Batteriekreis: R6-Batterie direkt mit Schalter und R = 10 Ω, Spannungsmessung parallel zur Batterie.

**Hinweise:** Polung des Superkondensators beachten (Minus an Minus). Ohne Vorwiderstand fließt beim Laden kurzzeitig ein sehr großer Strom.

</details>

<details>
<summary><b>2. Messung: zu erwartende Kurven</b></summary>

- **Kondensator:** U fällt exponentiell nach U(t) = U₀ · e^(−t/(R·C)) mit τ = R · C = 10 Ω · 1 F = 10 s. Nach etwa 5τ ≈ 50 s ist der Kondensator praktisch entladen.
- **R6-Batterie:** U sinkt beim Einschalten etwas (Spannungsabfall am Innenwiderstand) und bleibt danach während der 3 Minuten nahezu konstant bei ca. 1,4–1,5 V.

</details>

<details>
<summary><b>3. Unterschiede zwischen den Kurven</b></summary>

- Die Kondensatorspannung sinkt stetig und schnell. Die Batteriespannung bleibt fast konstant.
- **Erklärung:** Beim Kondensator gilt U = Q / C. Mit jeder abfließenden Ladung sinkt die Spannung, und damit auch der Strom I = U / R, sodass die Entladung immer langsamer wird (Exponentialfunktion). Bei der Batterie wird die Spannung von der chemischen Reaktion bestimmt (Differenz der Elektrodenpotenziale) und hängt kaum davon ab, wie viel Ladung schon entnommen wurde.
- **Folge:** Beim Kondensator zeigt die Spannung den Ladezustand an, bei der Batterie kaum.

</details>

<details>
<summary><b>4. Halbwertszeit</b></summary>

Aus U(t½) = U₀ / 2 folgt e^(−t½/τ) = ½, also

**t½ = τ · ln 2 = R · C · ln 2 = 10 Ω · 1 F · 0,693 ≈ 6,9 s**

In der Messkurve: Zeitpunkt ablesen, an dem die Spannung von 1,5 V auf 0,75 V gesunken ist. Die Halbwertszeit ist unabhängig vom Startwert: Von 0,75 V auf 0,375 V dauert es wieder ca. 6,9 s.

Abweichungen sind normal: Superkondensatoren haben große Kapazitätstoleranzen (oft −20 % bis +80 %), dazu kommen Innen- und Leitungswiderstände. Umgekehrt lässt sich aus dem gemessenen t½ die tatsächliche Kapazität bestimmen: C = t½ / (R · ln 2).

Für die Batterie lässt sich keine Halbwertszeit angeben: Ihre Spannung halbiert sich in der Messzeit nicht.

</details>

## Aufgabe 1 – Energie im Versuch

<details>
<summary><b>1.1 Gespeicherte Energie</b></summary>

W = ½ · C · U² = ½ · 1 F · (1,5 V)² **≈ 1,1 J**

Zum Vergleich: Bei der Nennspannung 2,7 V wären es ½ · 1 F · (2,7 V)² ≈ 3,6 J. Da W ~ U² gilt, bringt die höhere Spannung mehr als die dreifache Energie.

</details>

<details>
<summary><b>1.2 Entnehmbare Energie und 75-%-Regel</b></summary>

Restenergie bei 0,75 V: W_Rest = ½ · 1 F · (0,75 V)² ≈ 0,28 J

Entnehmbar: ΔW = 1,125 J − 0,28 J **≈ 0,84 J**

**Allgemein:** W_Rest / W₀ = (½ · C · (U₀/2)²) / (½ · C · U₀²) = 1/4. Bei Entladung auf die halbe Spannung bleiben 25 % im Kondensator, **75 % werden entnommen**, und zwar unabhängig von C und U₀.

</details>

<details>
<summary><b>1.3 Vergleich mit der R6-Batterie</b></summary>

W = Q · U = 2,5 Ah · 3600 s/h · 1,25 V = 11 250 J **≈ 11 kJ ≈ 3,1 Wh**

| | Superkondensator (1,5 V) | R6-Batterie |
|---|---|---|
| Energie | ≈ 1,1 J | ≈ 11 000 J |
| Masse | ≈ 1 g | ≈ 23 g |
| spezifische Energie | ≈ 1,1 J/g ≈ 0,3 Wh/kg | ≈ 490 J/g ≈ 135 Wh/kg |

Die Batterie speichert etwa **10 000-mal** so viel Energie bei nur etwa 23-facher Masse. Ihre spezifische Energie ist also rund 400-mal größer.

</details>

## Aufgabe 2 – Äquivalente Kapazität

<details>
<summary><b>2.1 Energie der LiFePO4-Zelle</b></summary>

W = Q · U = 100 Ah · 3600 s/h · 3,2 V = 1 152 000 J **≈ 1,15 MJ = 320 Wh**

</details>

<details>
<summary><b>2.2 Äquivalente Kapazität</b></summary>

Aus W = ½ · C · U² folgt C = 2W / U² = 2 · 1,152 · 10⁶ J / (3,2 V)² **≈ 225 000 F**

Das entspricht 75 Superkondensatoren mit je 3000 F, allerdings bei 3,2 V, was über deren Nennspannung liegt.

</details>

<details>
<summary><b>2.3 Anzahl und Masse der Superkondensatoren</b></summary>

Energie pro Zelle: W = ½ · 3000 F · (2,7 V)² ≈ 10 935 J ≈ 3 Wh

Anzahl: n = 1 152 000 J / 10 935 J ≈ 105,3, also **106 Zellen** (aufrunden!)

Masse: 106 · 0,51 kg **≈ 54 kg** gegenüber ca. 2 kg für die LiFePO4-Zelle, also etwa das 27-Fache.

Spezifische Energie: Superkondensator ≈ 6 Wh/kg, LiFePO4 ≈ 160 Wh/kg

</details>

<details>
<summary><b>2.4 Beurteilung der Annahme</b></summary>

Die Annahme ist **nicht realistisch**:

- Die angeschlossene Elektronik (DC/DC-Wandler) braucht eine Mindestspannung. Damit die Leistung P = U · I gleich bleibt, muss der Strom bei sinkender Spannung immer weiter steigen. Unterhalb etwa der halben Nennspannung ist das nicht mehr sinnvoll (hohe Verluste, Überlastung).
- Bei Nutzung zwischen 2,7 V und 1,35 V stehen nach der 75-%-Regel nur 0,75 · 10 935 J ≈ 8 200 J pro Zelle zur Verfügung.

Neue Anzahl: n = 1 152 000 J / 8 200 J ≈ 140,5, also **141 Zellen ≈ 72 kg**. Der Massennachteil gegenüber dem Akku wird noch größer.

</details>

## Aufgabe 3 – Leistung

<details>
<summary><b>3.1 Herleitung von P_max</b></summary>

Strom im Kreis: I = U / (R + Rᵢ)

Leistung im Lastwiderstand: P(R) = I² · R = U² · R / (R + Rᵢ)²

Ableiten mit der Quotientenregel:

dP/dR = U² · [(R + Rᵢ)² − R · 2(R + Rᵢ)] / (R + Rᵢ)⁴ = U² · (Rᵢ − R) / (R + Rᵢ)³

dP/dR = 0 ⇒ **R = Rᵢ**. Es handelt sich um ein Maximum, weil dP/dR für R < Rᵢ positiv und für R > Rᵢ negativ ist.

Einsetzen: P_max = U² · Rᵢ / (2Rᵢ)² = **U² / (4 · Rᵢ)**

Dieser Fall heißt **Leistungsanpassung**.

</details>

<details>
<summary><b>3.2 Zahlenwerte</b></summary>

(a) Superkondensator: P_max = (2,7 V)² / (4 · 0,0003 Ω) ≈ 6 100 W → 6 100 W / 0,51 kg **≈ 12 kW/kg**

(b) LiFePO4-Zelle: P_max = (3,2 V)² / (4 · 0,030 Ω) ≈ 85 W → 85 W / 0,040 kg **≈ 2,1 kW/kg**

Der Superkondensator erreicht also eine etwa sechsmal höhere Leistung pro Masse.

</details>

<details>
<summary><b>3.3 Warum nur theoretische Obergrenzen?</b></summary>

- Bei Leistungsanpassung wird im Innenwiderstand genauso viel Leistung in Wärme umgesetzt wie in der Last (Wirkungsgrad nur 50 %). Die Zellen würden sich stark erhitzen und Schaden nehmen.
- Beim Kondensator sinkt die Spannung während der Entladung. P_max gilt also nur im ersten Moment.
- Beim Akku begrenzen zusätzlich die Geschwindigkeit der chemischen Reaktion und die Diffusion der Ionen den Strom. Der Hersteller gibt deshalb eine maximale Belastung (C-Rate) an, die weit unter dem rechnerischen Kurzschlussstrom liegt.

</details>

## Sicherung

<details>
<summary><b>Vergleichstabelle (ergänzte Felder)</b></summary>

| Kenngröße | Superkondensator | Li-Ionen-Akku (NMC) | LiFePO4-Akku (LFP) |
|---|---|---|---|
| Speicherprinzip | elektrostatisch: Ladungstrennung in der Doppelschicht, keine chemische Reaktion | elektrochemisch: Einlagerung von Li⁺ (Interkalation) | elektrochemisch: Einlagerung von Li⁺ in Eisenphosphat |
| Spannungsverlauf beim Entladen | fällt stetig (über R exponentiell, bei konstantem Strom linear) | fällt langsam (ca. 4,2 V → 3,0 V) | sehr flaches Plateau bei ca. 3,2 V, erst am Ende steiler Abfall |
| Spezifische Energie | ca. 3–10 Wh/kg (Aufgabe 2: ≈ 6 Wh/kg) | ca. 150–270 Wh/kg | ca. 90–180 Wh/kg (Aufgabe 2: ≈ 160 Wh/kg) |
| Typische Anwendung | Rekuperation in Bussen und Straßenbahnen, Spannungspufferung, Überbrückung kurzer Ausfälle | E-Autos mit großer Reichweite, Smartphones, Laptops | Heimspeicher, Busse, E-Autos mit Standardreichweite |

</details>

<details>
<summary><b>Ragone-Diagramm 1: Lage der Speicher</b></summary>

- **Herkömmliche Kondensatoren:** sehr hohe Leistungsdichte, aber winzige Energiedichte.
- **Superkondensatoren:** dazwischen. Sie schließen die Lücke zwischen Kondensatoren und Akkus.
- **Akkus:** hohe Energiedichte, aber deutlich geringere Leistungsdichte.
- **Brennstoffzellen:** höchste Energiedichte, geringste Leistungsdichte.

Kein Speicher ist in beiden Größen gleichzeitig spitze.

</details>

<details>
<summary><b>Ragone-Diagramm 2: Quotient = Entladezeit</b></summary>

(W/m) / (P/m) = W / P = t, die Masse kürzt sich heraus. Die Einheit ist (Wh/kg) / (W/kg) = h.

Der Quotient gibt also an, wie lange der Speicher seine Leistung abgeben kann, bis er leer ist. Da beide Achsen logarithmisch sind, liegen alle Punkte mit gleicher Entladezeit auf einer Geraden (Diagonale). Typische Werte: Kondensator Millisekunden bis Sekunden, Superkondensator Sekunden, Akku Minuten bis Stunden.

Beispiel: LiFePO4 mit 160 Wh/kg und 0,5 kW/kg: t = 160 Wh / 500 W ≈ 0,3 h ≈ 20 min.

</details>

<details>
<summary><b>Ragone-Diagramm 3: Antwort auf die Leitfrage</b></summary>

Ein E-Auto braucht für seine Reichweite sehr viel Energie bei moderater Leistung. Das kann nur ein Akku mit seiner um etwa den Faktor 20–50 höheren Energiedichte leisten. Ein Bus im Stadtverkehr muss dagegen bei jedem Halt in wenigen Sekunden eine große Bremsleistung aufnehmen und beim Anfahren wieder abgeben, oft hunderte Male am Tag. Superkondensatoren speichern Energie im elektrischen Feld ohne chemische Reaktion. Deshalb vertragen sie sehr hohe Ströme und Hunderttausende Ladezyklen. Ihre geringe Energiedichte stört nicht, weil pro Bremsvorgang nur wenig Energie anfällt und sie an Haltestellen schnell nachgeladen werden können.

</details>

## Hausaufgabe – Anwendung Straßenbahn

<details>
<summary><b>1. Energie und Bremsleistung</b></summary>

v = 50 km/h = 13,9 m/s

E_kin = ½ · m · v² = ½ · 30 000 kg · (13,9 m/s)² **≈ 2,9 MJ ≈ 0,8 kWh**

P = E / t = 2,9 MJ / 10 s **≈ 290 kW**

</details>

<details>
<summary><b>2. Anzahl und Masse der Superkondensatorzellen</b></summary>

Nutzbare Energie pro Zelle (75-%-Regel): 0,75 · 10 935 J ≈ 8 200 J

n = 2 894 000 J / 8 200 J ≈ 352,9, also **353 Zellen**

Masse: 353 · 0,51 kg **≈ 180 kg**

</details>

<details>
<summary><b>3. Mindestkapazität und Masse des LiFePO4-Akkus</b></summary>

Bei 10 C gilt I = 10 h⁻¹ · Q. Damit ist P = U · I = 10 h⁻¹ · (Q · U) = 10 h⁻¹ · W.

W = P / 10 h⁻¹ = 290 kW / 10 h⁻¹ **= 29 kWh**

Masse: 29 000 Wh / 150 Wh/kg **≈ 190 kg**

Auffällig: Gespeichert werden müssen nur 0,8 kWh. Der Akku muss aber 36-mal so groß sein, nur damit er die **Leistung** verträgt.

</details>

<details>
<summary><b>4. Bewertung</b></summary>

*(Andere begründete Urteile sind möglich.)*

- **Masse:** Beide Lösungen liegen bei rund 180–190 kg, also in derselben Größenordnung.
- **Ausnutzung:** Der Akku ist nur wegen der Leistung so groß. Rund 97 % seiner Speicherkapazität bleiben ungenutzt.
- **Zyklenfestigkeit:** 100 Bremsungen pro Tag ergeben über 36 000 Zyklen pro Jahr. Superkondensatoren halten 500 000 bis 1 000 000 Zyklen aus, also viele Jahre. Ein LiFePO4-Akku (ca. 2 000–6 000 Vollzyklen) altert unter häufigen Hochstrompulsen deutlich schneller. Die Zyklen sind hier zwar nur Teilzyklen, aber die hohen Ströme belasten ihn zusätzlich.
- **Urteil:** Für die Rückgewinnung von Bremsenergie ist der Superkondensator die bessere Wahl. Soll die Bahn dagegen längere Strecken ohne Oberleitung fahren (viel Energie), ist der Akku nötig. In der Praxis kombiniert man deshalb oft beide Speicher (Hybridspeicher).

</details>
