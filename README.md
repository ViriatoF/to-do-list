📝 React To-Do List

Une simple application To-Do List en React et Vite, testée avec Vitest.

✨ Fonctionnalités

➕ Ajout de tâches : Saisie d'une tâche via formulaire avec validation (pas d'ajout vide) et réinitialisation automatique du champ.

☑️ Statut terminé : Coche de cases pour marquer les tâches comme accomplies avec style barré dynamique (.isChecked).

❌ Suppression : Suppression instantanée de n'importe quelle tâche de la liste.

🧪 Tests automatisés : Suite de tests unitaires et d'intégration validant le rendu, et la suppression.

🛠️ Technologies utilisées

React 19 — Bibliothèque UI

Vite

Vitest 

React Testing Library

jsdom

🚀 Installation et démarrage

1. Cloner le projet

git clone https://github.com/ViriatoF/to-do-list.git
cd to-do-list


2. Installer les dépendances

npm install


3. Lancer l'application en développement

npm run dev


L'application sera accessible par défaut sur http://localhost:5173.

🧪 Tests

Les tests sont exécutés avec Vitest et simulent le comportement utilisateur réel.

Lancer les tests en mode veille (watch mode)

npm test
# ou directement
npx vitest


Lancer les tests une seule fois (mode CI)

npx vitest run


📁 Structure du projet

├── src/
│   ├── App.css           
│   ├── App.jsx           
│   ├── App.test.jsx      
│   ├── main.jsx          
│   └── setupTests.js     
├── index.html
├── vite.config.js        
├── package.json
└── README.md


⚙️ Configuration Vitest (vite.config.js)

Pour que les tests React fonctionnent avec le DOM virtuel, le fichier vite.config.js est configuré comme suit :

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});


📝 Licence

Projet sous licence MIT — libre d'utilisation et de modification.