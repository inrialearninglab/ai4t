---
title: Prompter avec méthode  
description: Méthodes pour une utilisation efficace des IA conversationnelles  
---

Ces méthodes pour prompter plus facilement sont cités sur le forum du Mooc "[Intelligence artificielle pour et par les enseignants](https://www.fun-mooc.fr/fr/cours/intelligence-artificielle-pour-et-par-les-enseignants-ai4t/)" - consulté le 01/07/2025

## La méthode A C T I F 

- **A pour Action** : précisez ce que vous attendez de l’IA.  
  *Exemple : générer un résumé, analyser des données.*

- **C pour Contexte** : définissez clairement le cadre d’intervention de l’IA.  
  *Exemple : pour une présentation en classe, un projet de recherche.*

- **T pour Tâche** : soyez explicite sur la tâche à accomplir.  
  *Exemple : rédiger un texte sur l’évolution de la biologie, comparer deux articles scientifiques.*

- **I pour Input** : fournissez les informations ou données nécessaires à la réalisation de la tâche.  
  *Exemple : voici les données de l’expérience, voici un extrait de texte à résumer.*

- **F pour Format** : spécifiez le format de la réponse attendue.  
  *Exemple : un tableau, un texte de 300 mots, un graphique comparatif.*

---

## Les cinq étapes pour créer un bon prompt (selon la DRANE) [^1]

- **Initialiser la conversation** : commencez par définir votre rôle et votre objectif.  
  *Exemple : je suis professeur de français et je souhaite créer une leçon sur le romantisme.*

- **Décrire la tâche** : soyez clair et spécifique dans la demande.  
  *Exemple : je souhaite que vous génériez un plan détaillé pour cette leçon.*

- **Ajouter des contraintes** : précisez les limites ou conditions d’exécution.  
  *Exemple : le cours s’adresse à des élèves de collège et doit durer 45 minutes.*

- **Préciser le format de sortie** : indiquez la forme attendue de la réponse.  
  *Exemple : veuillez fournir un plan sous forme de tableau avec des colonnes pour les objectifs, les activités et les évaluations.*

- **Affiner la réponse** : ajustez le prompt en reformulant ou en ajoutant des précisions.  
  *Exemple : pouvez-vous détailler davantage les activités en classe et suggérer des ressources pour chaque section ?*

---

## Exemples pratiques de création de prompts

### Exemple 1 : créer un résumé d’article scientifique

- **Action** : résumer l’article
- **Contexte** : pour une présentation lors d’une conférence scientifique
- **Tâche** : extraire les points principaux
- **Input** : article complet à résumer
- **Format** : résumé d’environ 300 mots

**Prompt :**
> Je suis chercheur en biologie et je prépare une présentation pour une conférence. Je souhaite que vous résumiez l’article suivant sur les effets du réchauffement climatique sur la biodiversité, en extrayant les points principaux. Le résumé doit comporter environ 300 mots.

---

### Exemple 2 : créer un quiz personnalisé pour des élèves

- **Action** : créer un quiz
- **Contexte** : cours de mathématiques au collège
- **Tâche** : générer 10 questions sur les fractions
- **Input** : liste des compétences des élèves
- **Format** : QCM avec réponses détaillées

**Prompt :**
> Je suis professeur de mathématiques au collège. Je souhaite créer un quiz sur les fractions pour mes élèves. Génère 10 questions à choix multiples avec des réponses détaillées pour chacune. Adapte le niveau des questions à des élèves allant de débutants à intermédiaires.

---
[^1]: [Site de la DRANE – académie de Versailles](https://www.dane.ac-versailles.fr/spip.php?article792) consultation au 24/10/2025
