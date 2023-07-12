---
title: "3.1.2 Welche Art von KI?"
description: Ein erstes Verständnis von KI-Typen gewinnen
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.1.2t
    - Title: 3.1.2 Welche Art von KI?
    - Type: text
    - Description: Ein erstes Verständnis von KI-Typen gewinnen
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
    - Licence: CC BY 4.0
    - Date: 2022-11-15


# Welche Art von KI?  
In der Literatur sind viele KI-Typen zu finden. Schauen wir uns an, worauf sie sich beziehen.

## Schwache oder starke KI?
- Schwache künstliche Intelligenz  
  Dies ist die künstliche Intelligenz, die wir heute kennen: Es handelt sich um einen Algorithmus, der "lernt", indem er seine Parameter an die Lerndaten anpasst, und der nicht mit mentalen und kognitiven Fähigkeiten ausgestattet ist, aber in der Lage ist, eine bestimmte Aufgabe manchmal viel effizienter auszuführen als ein Mensch.
- Starke künstliche Intelligenz  
  Eine künstliche Intelligenz, die in der Lage ist, menschliche Fähigkeiten zu kopieren (lernen, verstehen, begreifen, schlussfolgern, Entscheidungen treffen, ein Gewissen haben, Gefühle haben usw.). Eine so genannte "starke" künstliche Intelligenz, die in der Lage wäre, in unerwarteten Situationen autonom und vielseitig zu sein, ist ein wissenschaftliches Ziel. Gegenwärtig gibt es jedoch Ergebnisse, die zeigen, dass dieses Idealziel einer starken künstlichen Intelligenz technisch unmöglich ist. Bis heute gibt es keine starke künstliche Intelligenz, sie ist ein Glaube.

## Symbolischer oder maschineller Lernansatz?

Worauf beziehen sich innerhalb der schwachen künstlichen Intelligenz die Ansätze des symbolischen oder des maschinellen Lernens?

- Ein symbolischer KI-Ansatz  
  Er wird auch als "regelbasierte" oder "klassische" KI bezeichnet und basiert auf Logik und a priori Wissen, das von menschlichen Experten bereitgestellt wird.
  Historisch gesehen ist der symbolische Ansatz älter und entspricht den Expertensystemen und in jüngerer Zeit dem so genannten semantischen Web.
- Maschinelles Lernen (oder digitaler Ansatz)  
  Dieser auch als "digitaler" Ansatz bezeichnete Ansatz basiert auf Daten und Lernen.
  Der numerische oder maschinelle Lernansatz (ML) umfasst künstliche neuronale Netze und Deep Learning, wenn es mehrere Schichten solcher Recheneinheiten gibt[^1]. Dieser Ansatz hat sich erst in jüngster Zeit durchgesetzt und ermöglicht es uns, diktierte Texte automatisch zu transkribieren oder Objekte auf Bildern zu erkennen. Er erfordert eine große Datenmenge und basiert auf statistischen Ansätzen.

<figure>
  <img src="Images/Machine-Learning-NN-Deep-Learning-DE.png" alt= "Relationship between AI types">
  <figcaption>Die Beziehung zwischen künstlicher Intelligenz, neuronalen Netzen und Deep Learning (übersetzt mit DeepL) - Source: AI and education: Guidance for policy-makers, UNESCO, 2021</figcaption>
</figure>

## Überwachter oder unüberwachter Lernansatz?

Bei den Ansätzen des maschinellen Lernens gibt es zwei Arten von KI-Systemen, je nachdem, wie die Daten zum Training verwendet werden:[^2]

- Überwachtes Lernen  
  *"Überwachtes Lernen bezieht sich auf die Verwendung etikettierter Daten - z. B. Bilder, die angeben, ob sie Katzen enthalten oder nicht - zum Trainieren von Algorithmen. Diese Ansätze entwickeln ihre eigenen Methoden, um vorherzusagen, wie die Bilder gekennzeichnet werden sollten.*" [deepl translation]
- Unüberwachtes Lernen  
  "*Unüberwachtes Lernen kann eingesetzt werden, wenn keine qualitativ hochwertigen gekennzeichneten Daten verfügbar sind. Sie zeichnen sich dadurch aus, dass sie neue Cluster und Assoziationen innerhalb von Daten finden, die andernfalls möglicherweise nicht von Menschen identifiziert oder etikettiert worden wären. Da die Kennzeichnungen oft unvollständig oder ungenau sind, werden in vielen Anwendungen, wie z. B. in Empfehlungssystemen für Inhalte, sowohl überwachte als auch unüberwachte ML-Ansätze kombiniert.*" [deepl translation]

Viele Mechanismen der künstlichen Intelligenz arbeiten heute mit überwachtem Lernen. Um die Funktionsweise zu beschreiben, stellen wir uns vor, dass wir einer künstlichen Intelligenz beibringen wollen, eine Katze auf einem Bild zu erkennen.

Zu diesem Zweck stellen wir viele Daten zur Verfügung, nämlich viele Bilder, auf denen eine Katze zu sehen ist, und viele Bilder, auf denen keine Katze zu sehen ist, so dass die Berechnung ihre Parameter anpasst, um einen Ausgabewert zu liefern, der dem Vorhandensein oder Nichtvorhandensein der Katze entspricht. Alle diese Bilder stellen die Eingabedaten dar, und das erwartete Ergebnis, ob eine Katze auf dem Bild zu sehen ist oder nicht, die Ausgabedaten. Diese "Eingabe-" und "Ausgabedaten" sind die einzigen Informationen, die für das Training des Systems zur Verfügung stehen.

Der Rechenmechanismus muss also interne Parameter (wie die Steuerknöpfe einer Kamera) einstellen, um festzustellen, ob eine Katze auf dem Bild zu sehen ist oder nicht. Beim ersten Mal wird ein zufälliges und daher höchstwahrscheinlich falsches Ergebnis geliefert, dann beobachtet der Mechanismus nach und nach die Fehler und passt die Parameter durch aufeinanderfolgende Versuche an, um sie zu verringern. Dieser Prozess wird als maschinelles Lernen bezeichnet.

Tatsächlich nutzen viele KI-Anwendungen ML und fast immer auch symbolische KI im Hintergrund. So sind beispielsweise viele Chatbot-Anwendungen mit vom Menschen definierten Regeln für die Beantwortung erwarteter Fragen vorprogrammiert. Ein aktuelles Forschungsthema ist die Frage, wie sich symbolisches und maschinelles Lernen kombinieren lassen.

[^1]:[AI and education: Guidance for policy-makers](https://unesdoc.unesco.org/ark:/48223/pf0000376709) - Miao Fengchun, Holmes Wayne, Ronghuai Huang, Hui Zhang - ISBN: 978-92-3-100447-6 - UNESCO, 2021

[^2]:[Artificial intelligence: How does it work, why does it matter, and what can we do about it?](https://www.europarl.europa.eu/thinktank/en/document/EPRS_STU(2020)641547) - Philip Boucher, Scientific Foresight Unit (STOA) - ISBN: 978-92-846-6770-3 - European Union, 2020
