# URI (Uniform Resource Identifier)

--- 

## Gliederung
#### 1. Geschichte
#### 2. Definition
#### 3. Funktion
#### 4. Syntax
#### 5. Quellen

---

## 1. Geschichte 
- Grundgedanke: 
  - Tim Berners-Lee (Gründer)
- Einführung des Bergriffs 1994 
- erstes W3C-Dokument mit Uniform später

---

## 2. Definition

Definition:

Die URI ist dafür da, abstrakte und physische Ressourcen zu identifizieren und somit  
spezifische Informationen aus dem Internet zu erlangen

## 3. Funktion
- kann Sender und Empfänger einer E-Mail identifizieren 
- aus der URI kann das System ablesen wo und wie bestimmte Informationen identifiziert werden sollen
- Identifizierung durch festgelegte Syntax

---

## 4. Syntax
- als Zeichenfolge kodiert 
- es dürfen keine Leerzeichen verwendet werden

- 5 Bestandteile:
  - Scheme
    - gibt an wie Informationen wie das Protokoll benutzt wird
    
  - authority
    - identifiziert das Domain
    
  - path
    - zeigt den exakten weg zur resource
    
  - query
    - repräsentiert ein request action
  
  - fragment
    - ein Teil von der resource
    
    '
            foo://example.com:8042/over/there?name=ferret#nose
            \_/ \________________/\_________/ \_________/ \__/
             |          |             |            |        |
          scheme    authority        path        query   fragment
             |   _____________________|__
            / \ /                        \
            urn:example:animal:ferret:nose

---    
    '

## 5. Quellen
- https://www.ionos.com/digitalguide/websites/web-development/uniform-resource-identifier-uri/

  Datum: 21.12.2021  |  Uhrzeit: 11:53 Uhr 

- https://de.wikipedia.org/wiki/Uniform_Resource_Identifier

  Datum: 21.12.2021  |  Uhrzeit: 11:54 Uhr

- https://whatis.techtarget.com/definition/URI-Uniform-Resource-Identifier

  Datum: 21.12.2021  |  Uhrzeit: 11:54 Uhr 
 
---

# Anhang

## Unterschied URI und URL

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

![URI=URL U URN](https://www.researchgate.net/profile/Harri-Valkonen-2/publication/346585530/figure/fig4/AS:987488491417601@1612447011264/The-illustration-of-the-URL-URN-and-URI-26.png)


