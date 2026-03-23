Wärmeübertragung
================

Wir haben folgende Mitschrift erarbeitet:

![!large](waermeuebertragung.png)

Dafür wurde die Graphviz-IDE [Sketchviz](https://sketchviz.com/new) verwendet und folgender Code generiert:

~~~dot
digraph G {
  graph [fontname = "Handlee"];
  node [fontname = "Handlee"];
  edge [fontname = "Handlee"];
  
  //layout = neato;

  bgcolor=transparent;

 a [label="Arten der Wärmeübertragung" fontsize=20  shape=cube color=red]
 
 a-> Strahlung;
 a-> Leitung;
 a-> Konvektion;
 
  subgraph cluster_2 {
    Strahlung;
    
    label = "*ohne Medium*";
    fontsize = 20;
 }
 
  subgraph cluster_0 {
    Leitung
    Konvektion -> natürliche
    Konvektion -> erzwungene
    label = "*mit Medium*";
    fontsize = 20;
  }
 
 subgraph cluster_1 {
    Sonne -> Strahlung
    Herdplatten -> Leitung
    Kochen -> Leitung
    Kochen -> natürliche;
    Wind -> natürliche;
    Wasserkühlung -> erzwungene;
    label = "*Beispiele*";
    fontsize = 20;
  }
}

~~~

Die KI hat folgende Grafik erzeugt:

![!large](waermeuebertragung_KI.png)

## Kontext Wärmeübertragung

![foo](https://www.harm-haustechnik.de/images/solarthermieschema.jpg)

![foo](https://schlieger.de/wp-content/uploads/2024/08/WAeRMEPUMPENGRUPPE-FUeR-HEIZUNG-UND-WARMWASSER.jpg.webp)

1. Erstellen Sie eine Concept-Map, die die verschiedenen Wärmeübertragungen bei einer modernen Heizungsanlage erklärt.


