## Sensornetzwerke

Diverse einfache Sensoren bilden ein Mesh-Netzwerk, welches, je nach Anzahl, Verfügbarkeit und Aktivität der Knoten, eine unterschiedliche Struktur hat. An ein solches Netz sind i.d.R. über mehrere Routen Server angebunden.

---

<img src=sensornetzwerke.png style=background-color:white>

---

## Sensornetzwerke

Details: https://www.generic.de/blog/sensornetzwerk-was-ist-es-und-wie-funktioniert-es

---

### Anhang

~~~dot

# http://www.graphviz.org/content/cluster

digraph G {
  graph [fontname = "Handlee"];
  node [fontname = "Handlee"];
  edge [fontname = "Handlee"];

  bgcolor=transparent;

  subgraph cluster_0 {
    //style=filled;
    color=lightgrey;
    node [style=filled,color=pink];
    s1 -> s2;
    s1 -> s3;
    s4 -> s1;
    s1 -> s4;
    s4 -> s2;
    s3 -> s1;
    s2 -> s4;
    s2 -> s1;
    s1 -> s5;
    s5 -> s1;
    label = "*Sensoren (Mesh)*";
    fontsize = 20;
  }

  subgraph cluster_1 {
    node [style=filled];
    Betriebssystem -> DBMS;
    DBMS -> Betriebssystem;
    DBMS -> DB;
    DB -> DBMS;
    label = "*DBS Europa*";
    fontsize = 20;
    color=blue
  }
  
  subgraph cluster_2 {
    node [style=filled];
    DBMS -> Backup_DB;
    label = "*Backup Asien*";
    fontsize = 20;
    color=red
  }
  
  s4 -> Internet;
  Internet -> s4;
  Betriebssystem -> Internet;
  Internet -> Betriebssystem;

  Betriebssystem -> Benutzer1;
  Benutzer1 -> Betriebssystem;
  Betriebssystem -> Benutzer2;
  Benutzer2 -> Betriebssystem;

  Internet [shape=Mdiamond];
  Benutzer1 [color=green];
  Benutzer2 [color=purple];
  
}



~~~
