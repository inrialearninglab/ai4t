---
title: "3.3.2 Generative adversarische Netze (GAN)"
description: Mehr über GAN
contributor:  Mooc IAI
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.3.2t
    - Title: 3.3.2 Generative adversarische Netze (GAN)
    - Type: text
    - Description: Mehr über GAN
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
        - Mooc IAI
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Generative Adversarial Networks (GAN)
Generative Adversarial Networks liegen zwischen dem überwachten Lernen, das auf der Bereitstellung von Eingabedaten basiert, deren gewünschte Ausgabe bekannt ist, um die Eingabe-Ausgabe-Beziehung über die für das Training bereitgestellten Stichproben hinaus zu schätzen, und dem unüberwachten Lernen.

Wenn nur Eingabedaten zur Verfügung stehen, um bestimmte Strukturen innerhalb der Daten zu entdecken (z. B. die Anzahl der Parameter, die sie charakterisieren), gibt es viele andere Paradigmen, z. B. **halbüberwacht**, bei denen wir Daten mischen, bei denen wir den gewünschten Output kennen und andere nicht, um die beiden Ansätze zu mischen.

Ein anderes sogenanntes **selbstüberwachtes** Paradigma besteht darin, aus den Eingabedaten einen externen Mechanismus zu finden, der die entsprechenden Ausgaben erzeugt. Dies soll den enormen menschlichen Aufwand ersparen, für jede Eingabe die gewünschte Ausgabe einzugeben, z. B. Bilder von Hand zu beschriften, wenn nötig Pixel für Pixel (wenn man herausfinden will, wo sich die Katze in einem Bild befindet). Um beispielsweise die automatische Einfärbung von Bildern zu erlernen, kann man mit Farbbildern beginnen, sie auf Schwarz-Weiß-Bilder reduzieren und dann den Mechanismus trainieren, indem man ihm die gewünschten Farbbilder liefert, die hier bekannt sind, ohne dass man sie für jedes Schwarz-Weiß-Bild rekonstruieren muss.

Dies funktioniert auch beim Erlernen der relativen Position von Elementen in einem Bild, das beschnitten wird, oder der zeitlichen Konsistenz in einem Video. Aber es funktioniert nicht für alles. Es funktioniert immer dann, wenn man einen Trick findet, um aus den Daten automatisch die gewünschten Eingaben und Ausgaben zu erzeugen. **Dies ist eine Art von unbeaufsichtigtem Lernen, das automatisch Daten für ein überwachtes Lernparadigma generiert.**
