PAP
===========

Allgemeine Infos: https://de.wikipedia.org/wiki/Programmablaufplan

Umgebung für komfortables Arbeiten: https://sketchviz.com/new

<img src='https://g.gravizo.com/svg?
 digraph G {
   main -> parse -> execute;
   main -> init;
   main -> cleanup;
   execute -> make_string;
   execute -> printf
   init -> make_string;
   main -> printf;
   execute -> compare;
 }
'/>
