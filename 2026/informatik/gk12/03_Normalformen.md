## Zweite Normalform

Die zweite Normalform (2NF) ist ein Schritt in der Datenbanknormalisierung, der sicherstellt, dass eine Relation in der ersten Normalform (1NF) liegt und jedes Nichtschlüsselattribut von jedem Schlüsselkandidaten voll funktional abhängig ist. Eine voll funktionale Abhängigkeit bedeutet, dass kein echter Teil des Schlüssels ausreicht, um das Nichtschlüsselattribut eindeutig zu bestimmen; es muss der gesamte Schlüssel erforderlich sein. 

Dies verhindert partielle Abhängigkeiten, bei denen ein Nichtschlüsselattribut nur von einem Teil eines zusammengesetzten Schlüssels abhängt.

Wenn eine Tabelle einen einfachen Primärschlüssel besitzt, ist sie automatisch in der 2NF, sofern die 1NF erfüllt ist. Interessant wird die 2NF erst bei zusammengesetzten Schlüsseln, da hier die Gefahr partieller Abhängigkeiten besteht. Eine Relation befindet sich nicht in der 2NF, wenn auf der linken Seite einer funktionalen Abhängigkeit ein Teil des Schlüssels und auf der rechten Seite ein Nichtschlüsselattribut steht. 

Um die 2NF zu erreichen, werden Nichtschlüsselattribute, die nicht voll funktional vom gesamten Schlüssel abhängen, in separate Tabellen ausgelagert, wobei der Teil des Schlüssels, von dem sie abhängen, zum Primärschlüssel der neuen Tabelle wird. Diese Zerlegung beseitigt Redundanzen und hilft, Anomalien bei Einfügen, Änderungen und Löschungen zu vermeiden. Die 2NF fördert zudem „monothematische“ Relationen, bei denen jede Tabelle nur einen Sachverhalt modelliert.

(KI-generiert)

> Die 2.NF bezieht sich im Wesentlichen auf zusammengesetzte Schlüssel

## Dritte Normalform

Die dritte Normalform (3NF) ist ein zentrales Konzept der Datenbanknormalisierung, das darauf abzielt, unerwünschte Abhängigkeiten zu beseitigen und so Redundanzen sowie Anomalien beim Einfügen, Aktualisieren oder Löschen von Daten zu vermeiden. Sie baut auf der ersten Normalform (1NF) und der zweiten Normalform (2NF) auf, wobei die Regeln dieser früheren Normalformen übernommen werden. Die 1NF erfordert atomare (unteilbare) Werte in jeder Zelle, während die 2NF sicherstellt, dass jedes Nicht-Schlüsselattribut vollständig funktional vom Primärschlüssel abhängt.

Die 3NF geht einen Schritt weiter, indem sie transitive Abhängigkeiten beseitigt. Eine transitive Abhängigkeit liegt vor, wenn ein Nicht-Schlüsselattribut indirekt vom Primärschlüssel abhängt, also durch ein anderes Nicht-Schlüsselattribut vermittelt wird. Eine Relation befindet sich in der dritten Normalform, wenn sie in der zweiten Normalform ist und kein Nicht-Schlüsselattribut transitiv von einem Schlüsselkandidaten abhängt. Dies bedeutet, dass jedes Nicht-Schlüsselattribut direkt vom Primärschlüssel abhängen muss und nichts anderes. 

Eine typische Situation, die die 3NF verletzt, ist, wenn ein Attribut wie "Ort" von der "Postleitzahl" abhängt, die wiederum vom Primärschlüssel abhängt.


Um die 3NF zu erreichen, werden die transitiv abhängigen Datenfelder in neue Tabellen ausgelagert, wobei das abhängige Attribut zum Primärschlüssel der neuen Tabelle wird. Dies führt zu einer klar strukturierten Datenbank, die flexibel erweiterbar ist und eine redundanzfreie Datenspeicherung ermöglicht. Die dritte Normalform wurde erstmals 1971 von Edgar F. Codd eingeführt, um die Bedingungen für eine vollständig normalisierte Datenbankstruktur zu formalisieren. In der Praxis ist die 3NF oft ausreichend, um eine optimale Balance zwischen Redundanz, Performance und Flexibilität in einem Datenbankmodell zu erreichen.

(KI-generiert)
