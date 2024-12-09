PAP
===========

Allgemeine Infos: https://de.wikipedia.org/wiki/Programmablaufplan

Umgebung für komfortables Arbeiten: https://sketchviz.com/new

<img src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b -> c;
   c->d;
   c->e;
   e -> stop;
   a[label="lies n"];
   b[label="lies k"];
   c[label="k<n", shape=diamond];
   d[label="sag ..."];
   e[label="sag ..."];
 }
'/>
