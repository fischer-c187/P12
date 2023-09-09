# SportSee: Refonte de la Page Profil Utilisateur

SportSee est une startup en plein essor spécialisée dans le coaching sportif. Ce dépôt concerne le développement de la nouvelle version de la page profil utilisateur, offrant une vue détaillée des activités sportives de l'utilisateur. Ce projet est le douzième réalisé dans le cadre de ma formation.

##  Caractéristiques Principales

### Vue d'ensemble du profil utilisateur:

- **Tableau de bord interactif :** Permet aux utilisateurs d'avoir un aperçu rapide de leurs progrès et réalisations sportives.
- **Suivi des sessions :** Grâce à une représentation graphique intuitive, les utilisateurs peuvent suivre l'évolution du nombre de sessions qu'ils ont réalisées, leur permettant d'apprécier leurs progrès et de se fixer de nouveaux objectifs.
- **Compteur de calories :** Un compteur dynamique et visuellement plaisant affiche le nombre total de calories brûlées, motivant ainsi les utilisateurs à se surpasser lors de leurs entraînements.

### Interface intuitive et conviviale:

- **Design épuré :** Basé sur les maquettes fournies par notre talentueux designer, Léo, la nouvelle page profil est à la fois moderne et facile à naviguer.
- **Réactivité :** Conçue principalement pour le desktop, la page est également optimisée pour garantir une excellente expérience utilisateur sur des écrans d'au moins 1024x780 pixels.
- **Animations fluides :** Grâce à l'intégration de react-spring, les transitions et animations sont à la fois douces et engageantes, enrichissant ainsi l'interaction de l'utilisateur avec la plateforme.

## Technologies et Outils
- **Vite**: Outil de construction utilisé pour optimiser le processus de développement et faciliter les rechargements à chaud.
- **React**: Framework principal pour le développement.
- **D3**: Utilisé pour les visualisations graphiques, adapté de manière à s'intégrer harmonieusement avec React.
- **react-spring**: Permet d'ajouter des animations fluides et dynamiques pour améliorer l'expérience utilisateur.
- **SASS**: Adopté pour une meilleure structuration et modularité du style, focalisé principalement sur la version desktop, optimisé pour des écrans d'au moins 1024x780 pixels.
- **NodeJS Backend**: Fournit l'infrastructure nécessaire pour les appels HTTP et la récupération des données d'exemple.
- **Fetch**: Utilisé pour gérer les appels HTTP en dehors des composants React, assurant une meilleure séparation des préoccupations.

## Notes Techniques
- Les données proviennent d'un [backend spécifique en NodeJS](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard). Ces données nécessitent une standardisation en raison de légères variations selon les utilisateurs.
- L'adaptation de D3 à React a été réalisée pour assurer une intégration sans faille, profitant de la puissance de D3 tout en respectant les principes de React.
- L'intégration de react-spring offre des transitions douces et engageantes pour améliorer l'expérience utilisateur.
