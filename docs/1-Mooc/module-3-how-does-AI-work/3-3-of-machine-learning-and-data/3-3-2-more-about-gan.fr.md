---
title: "3.3.2 Réseaux Antagonistes Génératifs (GAN)"
description: Pour en savoir plus sur les GAN
contributor:  Mooc IAI
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.3.2t
    - Title: 3.3.2 Réseaux Antagonistes Génératifs (GAN)
    - Type: text
    - Description: Pour en savoir plus sur les GAN
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
        - Mooc IAI
    - Licence: CC BY 4.0
    - Date: 2022-11-15

# Réseaux antagonistes génératifs (GAN)
Les réseaux antagonistes génératifs se situent entre l'apprentissage supervisé basé sur la fourniture de données d'entrée, dont la sortie correspondante souhaitée est connue afin d'estimer la relation entrée-sortie au-delà des échantillons fournis pour la formation, et l'apprentissage non supervisé.

Lorsque seules des données d'entrée sont disponibles, pour découvrir certaines structures au sein des données (par exemple, le nombre de paramètres qui les caractérisent), il existe de nombreux autres paradigmes, par exemple **semi-supervisés** où l'on mélange des données dont on connaît la sortie souhaitée et d'autres non, afin de mélanger les deux approches.

Un autre paradigme dit **auto-supervisé** consiste, à partir de données d'entrée, à trouver un mécanisme externe pour générer les sorties correspondantes. Il s'agit d'éviter l'énorme effort humain consistant à saisir pour chaque entrée le résultat souhaité, par exemple en étiquetant des images à la main, pixel par pixel si nécessaire (si l'on veut trouver où se trouve le chat dans une image). Une autre utilisation possible serait d'apprendre à coloriser automatiquement des images, on peut commencer par des images en couleur, les réduire en images en noir et blanc, puis entraîner le mécanisme en lui fournissant les images en couleur souhaitées, ici connues sans qu'il soit nécessaire de les reconstruire pour chaque image en noir et blanc.
 
Cela fonctionne aussi pour apprendre la position relative d'éléments dans une image que l'on découpe, ou la cohérence temporelle dans une vidéo. Mais cela ne fonctionne pas pour tout, il faudra à chaque fois trouver une solution pour générer automatiquement les entrées et sorties souhaitées à partir des données. **C'est en quelque sorte de l'apprentissage non-supervisé qui auto-génère des données pour un paradigme d'apprentissage supervisé.**
