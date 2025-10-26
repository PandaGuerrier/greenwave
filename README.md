# GreenWave

---
GreenWave is an open-source project dedicated to promoting sustainable living through innovative technology solutions. Our mission is to empower individuals and communities to reduce their environmental impact by providing tools, resources, and educational content focused on sustainability.

# Rapport

Pour acceder au rapport complet du projet GreenWave, veuillez visiter cette route: /dashboard/rapport
Vous pouvez aussi acceder au images dans le dossier img a la racine du projet.

# Lancer le site

Pour lancer le site GreenWave localement, suivez les étapes ci-dessous :

Prérequis: Avoir docker, stripe (facultatif)

1. **Cloner le dépôt** :
   ```bash
   git clone git@github.com:PandaGuerrier/greenwave.git
   cd greenwave
   npm install
   docker-compose up -d
   node ace migration:fresh
   node ace db:seed
   npm run dev
   ```
    


