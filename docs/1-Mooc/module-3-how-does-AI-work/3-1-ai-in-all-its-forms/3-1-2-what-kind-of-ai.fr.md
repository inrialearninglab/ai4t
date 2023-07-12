---
title : "3.1.2 Quel type d'IA ?"
description: Pour une première compréhension des types d'IA
---
??? info "Metadata"
    - Id: EU.AI4T.O1.M3.1.2t
    - Title: 
    - Type: text
    - Description: 
    - Subject: Artificial Intelligence for and by Teachers
    - Authors:
        - AI4T 
    - Licence: CC BY 4.0
    - Date: 2022-11-15


# Quel type d'IA ?  
On trouve de nombreux types d'IA dans la littérature scientifique. Voyons à quoi ils font référence.

## Intelligence artificielle faible ou forte ?
- Intelligence artificielle faible  
  C'est l'intelligence artificielle que nous connaissons aujourd'hui : c'est un algorithme qui "apprend", en adaptant ses paramètres aux données d'apprentissage, et qui n'est pas doté de capacités mentales et cognitives, mais qui est capable d'effectuer une tâche spécifique de manière beaucoup plus efficace (rapidité, précision) parfois qu'un être humain.
- Intelligence artificielle forte  
  Une intelligence artificielle qui serait capable de copier les aptitudes humaines (apprendre, comprendre, appréhender, raisonner, prendre des décisions, avoir une conscience, des émotions...). Développer une intelligence artificielle dite "forte", qui serait capable d'être autonome et polyvalente dans des situations inattendues, est un objectif scientifique. Cependant, à l'heure actuelle, certains résultats montrent que cet objectif idéal d'intelligence artificielle forte est techniquement impossible. À ce jour, l'intelligence artificielle forte n'existe pas.

## Approche symbolique ou apprentissage automatique ?

Au sein de l'intelligence artificielle faible, à quoi font référence les approches symbolique ou d'apprentissage automatique ?

- Une approche d'IA symbolique  
  Aussi appelée IA "à base de règles" ou "classique", elle est basée sur la logique et les connaissances a priori fournies par des humains experts du domaine étudié.
  Historiquement, l'approche symbolique est plus ancienne, correspondant aux systèmes experts, et plus récemment au web dit sémantique.
- Une approche par l'apprentissage automatique (ou numérique)  
  Également appelée approche "numérique", elle est basée sur les données et l'apprentissage.
  L'approche numérique ou Machine Learning (ML) comprend les réseaux de neurones artificiels et l'apprentissage profond lorsqu'il y a plusieurs couches de ces unités de calcul[^1]. Elle est devenue efficace plus récemment suite à des avancées technologiques concernant la vitesse et l'architecture des processeurs dont ceux graphiques et avec des calculs dans le nuage. Cette approche permet, par exemple, de transcrire automatiquement les textes que nous dictons, ou de reconnaître et de traiter des voix et des objets dans des images. Elle nécessite beaucoup de données et se base sur des approches statistiques.

<figure>
  <img src="Images/Machine-Learning-NN-Deep-Learning-FR.png" alt= "Relationship between AI types">
  <figcaption>La relation entre l'intelligence artificielle, les réseaux neuronaux et l'apprentissage profond (traduit avec DeepL) - Source: AI and education: Guidance for policy-makers, UNESCO, 2021</figcaption>
</figure>

## Approche d'apprentissage supervisé ou non supervisé ?

Au sein des approches d'apprentissage automatique, les systèmes d'IA sont de deux types, selon la manière dont les données sont utilisées pour les former[^2] :

- Apprentissage supervisé  
  "*L'apprentissage supervisé fait référence à l'utilisation de données étiquetées - telles que des photos indiquant si elles contiennent ou non des chats - pour former des algorithmes. Ces approches conçoivent leurs propres méthodes pour prédire comment les images doivent être étiquetées.*"
- Apprentissage non supervisé  
  "*L'apprentissage non supervisé peut être utilisé lorsque des données étiquetées de bonne qualité ne sont pas disponibles. Il excelle dans la découverte de nouveaux groupes et associations au sein de données qui n'auraient pas été identifiées ou étiquetées par des humains. Les étiquettes étant souvent incomplètes ou imprécises, de nombreuses applications, telles que les systèmes de recommandation de contenu, combinent les approches d'apprentissage supervisé et non supervisé*".

De nombreux mécanismes d'intelligence artificielle fonctionnent aujourd'hui par apprentissage supervisé.

Pour illustrer cela, imaginons que nous voulons apprendre à une intelligence artificielle à reconnaître un chat dans une image.

Pour cela, nous allons fournir à l'intelligence artificielle de nombreuses données, dans cet exemple de nombreuses images où l'on peut voir un chat et de nombreuses images sans chat, afin que le calcul ajuste ses paramètres pour donner une valeur de sortie correspondant à la présence ou non du félin.
Toutes ces images constituent les données d'entrée, et le résultat attendu, qu'il y ait ou non un chat dans l'image, les données de sortie. Ces données "d'entrée" et "de sortie" sont les seules informations fournies pour son apprentissage.

Le mécanisme de calcul doit donc ajuster des paramètres internes (comme les boutons de réglage d'un appareil photo) pour déterminer s'il y a ou non un chat dans l'image. La première fois, un résultat aléatoire et donc très probablement faux sera fourni, puis progressivement en fonction des retours positifs ou négatifs le mécanisme observera les erreurs et par essais successifs ajustera les paramètres pour réduire les erreurs et ainsi augmenter les réussites. Ce processus est connu sous le nom d'apprentissage automatique.

En fait, de nombreuses applications d'IA utilisent l'apprentissage automatique et presque toujours de l'IA symbolique en arrière-plan.
Par exemple, de nombreuses applications de chatbot sont préprogrammées avec des règles définies par l'homme sur la façon de répondre à des questions anticipées. Étudier comment combiner les approches symboliques et d'apprentissage automatique est un sujet de recherche actuel.

[^1]: [IA et éducation: guide pour les décideurs politiques](https://unesdoc.unesco.org/ark:/48223/pf0000380006) - Miao Fengchun, Holmes Wayne, Ronghuai Huang, Hui Zhang - ISBN : 978-92-3-200244-0 - UNESCO, 2021

[^2]: Etude en anglais: [Artificial intelligence: How does it work, why does it matter, and what can we do about it ?](https://www.europarl.europa.eu/thinktank/en/document/EPRS_STU(2020)641547) - Philip Boucher, Scientific Foresight Unit (STOA) - ISBN: 978-92-846-6770-3 - Union européenne, 2020
