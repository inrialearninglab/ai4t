# Portail AI4T

Ce dépôt contient la configuration et les templates du portail AI4T.

## Organisation des fichiers

Les fichiers markdown sont compilés depuis le dossier `/docs`. 

## Déploiement local

Afin de contribuer et visualiser vos modifications, vous pouvez déployer le site localement 
sur votre ordinateur.

### Avec pip / conda

#### Installation

**Prérequis :**
- Installer Miniconda : https://docs.conda.io/en/latest/miniconda.html
- (Optionnel) Créer un environement `conda` dédié : 
  ```shell
  conda create --name mkdocs && source activate mkdocs
  ```
- Installer les dépendances :
  ```shell
  pip install mkdocs-material mkdocs-pdf-export-plugin mkdocs-jupyter mkdocs-macros-plugin
  ```

#### Visualisation en local

1. Cloner le dépôt
2. Se placer dans le projet à la racine et lancer le serveur mkdocs
  ```shell
  cd portail/
  mkdocs serve
  ```

Après quelques secondes, le site devrait être visible ici : http://localhost:8000

### Avec Docker

#### Installation

**Prérequis :**
- Installer Docker https://docs.docker.com/engine/install/

#### Visualisation en local
1. Cloner le dépôt avec les sous-modules (moocs 1 & 2)
2. Se placer dans le projet à la racine
3. Lancer le serveur
  ```shell
  docker build -t mkdocs . && docker run --rm -it -p 8000:8000 -v ${PWD}:/docs mkdocs
  ```

Après quelques secondes, le site devrait être visible ici : http://localhost:8000