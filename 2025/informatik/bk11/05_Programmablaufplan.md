PAP
===========

Allgemeine Infos: https://de.wikipedia.org/wiki/Programmablaufplan

Umgebung für komfortables Arbeiten: https://sketchviz.com/new

<img src='https://g.gravizo.com/svg?
 digraph G {
   start -> a -> b -> c;
   c->d[label="true"];
   c->e[label="false"];
   d->c;
   e -> stop;
   a[label="lies n", shape=box];
   b[label="lies k", shape=box];
   c[label="k<n", shape=diamond];
   d[label="sag k ist kleiner", shape=box];
   e[label="sag k ist größer oder gleich", shape=box];
 }
'/>
