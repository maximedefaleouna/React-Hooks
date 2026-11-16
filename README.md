# Guide Pratique et Fondamentaux des React Hooks

Depot d'apprentissage et aide-memoire interactif dedie a la maitrise des Hooks dans React (React 19). Ce projet rassemble des exemples de code concrets, modulaires et directement executables pour comprendre le fonctionnement, les cas d'usage et les bonnes pratiques de chaque Hook natif, ainsi que la conception de Hooks personnalises (Custom Hooks).

---

## Les Regles Fondamentales des Hooks

Pour garantir un fonctionnement previsible de React, deux regles strictes doivent toujours etre respectees :
1. **Appeler les Hooks uniquement au niveau superieur** : Ne jamais appeler un Hook a l'interieur de boucles, de structures conditionnelles (`if`) ou de fonctions imbriquees.
2. **Appeler les Hooks uniquement depuis des fonctions React** : Ne pas les invoquer dans des fonctions JavaScript standard. Les appeler uniquement dans des composants fonctionnels React ou a l'interieur de Hooks personnalises.

---

## Les Hooks Abordes dans le Projet

### 1. useState
Permet d'ajouter et de gerer un etat local dans un composant fonctionnel.
- **Valeurs primitives** : Gestion d'un compteur numerique ou d'une bascule booleenne (ex: systeme de Likes).
- **Objets** : Mise a jour immuable de proprietes d'un objet en preservant les autres champs avec le spread operator (`...prevState`).
- **Tableaux** : Ajout, modification et suppression d'elements au sein d'une liste sans mutation directe.

### 2. useEffect
Permet d'executer des effets de bord (side effects) apres le rendu du composant : requetes API, manipulation manuelle du DOM, abonnements ou timers.
- **Sans tableau de dependances** : L'effet s'execute apres chaque rendu.
- **Avec un tableau de dependances vide `[]`** : L'effet s'execute uniquement lors du premier montage du composant (equivalent a `componentDidMount`).
- **Avec des dependances `[valeur]`** : L'effet ne se declenche que lorsque l'une des valeurs specifiees change.
- **Fonction de nettoyage (cleanup)** : Annule les abonnements ou nettoie les timers avant le demontage du composant.

### 3. useContext
Permet de partager et de consommer des donnees globales a travers l'arbre des composants sans avoir a transmettre manuellement des props a chaque niveau (resolution du probleme de *prop drilling*).
- Creation du contexte via `createContext`.
- Diffusion des donnees avec le composant `Provider`.
- Consommation simplifiee des valeurs dans les composants descendants (ex : Composant A vers Composant B puis C) via `useContext`.

### 4. useReducer
Alternative a `useState` particulierement recommandee pour gerer des etats complexes avec de multiples sous-valeurs ou lorsque le prochain etat depend fortement du precedent.
- Repose sur le principe d'une fonction reductrice `reducer(state, action)` et d'une methode `dispatch`.
- Structure les transitions d'etat via des actions formalisees (`type`, `payload`).
- Facilite les tests unitaires et la maintenance sur des logiques metier poussees.

### 5. useCallback
Optimise les performances de rendu en renvoyant une version memorisee d'une fonction de rappel (callback) qui ne change que si ses dependances changent.
- Evite la re-creation systematique des fonctions a chaque rendu du parent.
- Empeche les re-rendus inutiles des composants enfants optimises avec `React.memo`.

### 6. useMemo
Optimise les performances en memorisant le resultat d'un calcul couteux afin qu'il ne soit pas recalcule a chaque rendu.
- Ne recalcule la valeur que si l'une des dependances specifiees a change.
- A utiliser avec discernment pour ne pas surcharger la memoire lorsque les calculs sont triviaux.

### 7. useRef
Fournit un conteneur mutable dont la propriete `.current` persiste pendant toute la duree de vie du composant sans declencher de re-rendu lors de sa modification.
- **Acces au DOM direct** : Manipulation directe d'elements HTML (gestion du focus automatique sur un champ de saisie, mesure de dimensions, etc.).
- **Conservation de variables muettes** : Stockage d'identifiants d'intervalles (`setInterval`), de timers ou de compteurs de rendus sans impacter le cycle d'affichage.

### 8. Custom Hooks (Hooks Personnalises)
Permet d'extraire et de reutiliser une logique d'etat commune entre plusieurs composants distincts.
- Creation d'une fonction debutant obligatoirement par le prefixe `use` (exemple implemente dans le projet : `useCounter`).
- Encapsulation des etats et des methodes d'incrementation, decrementation et reinitialisation.

---

## Comparatif Synthetique des Cas d'Usage

| Hook | Role Principal | Declenche un Re-rendu ? |
| :--- | :--- | :--- |
| **useState** | Stocker une valeur locale d'etat | Oui |
| **useEffect** | Gerer les effets de bord et synchronisations | Non (sauf si mise a jour d'etat a l'interieur) |
| **useContext** | Lire un contexte partage globalement | Oui (lorsque la valeur du Provider change) |
| **useReducer** | Centraliser les logiques d'etat complexes | Oui |
| **useCallback** | Memoriser la definition d'une fonction | Non |
| **useMemo** | Memoriser le resultat calcule d'une fonction | Non |
| **useRef** | Cibler le DOM ou conserver une valeur mutable | Non |

---

## Installation et Lancement Local

### 1. Prerequis
- Node.js (version 18 ou superieure recommandee)
- npm ou yarn

### 2. Cloner le depot
```bash
git clone https://github.com/maximedefaleouna/React-Hooks.git
cd React-Hooks
```

### 3. Installer les dependances
```bash
npm install
```

### 4. Demarrer le serveur de developpement
```bash
npm run dev
```
Ouvrez votre navigateur a l'adresse locale indiquee par Vite (generalement `http://localhost:5173`) pour interagir avec les differents composants et observer le comportement de chaque Hook en direct.

### 5. Verifier le code avec ESLint
```bash
npm run lint
```

---

## Auteur

**Maxime DEFALEOUNA**
- Profil GitHub : [@maximedefaleouna](https://github.com/maximedefaleouna)
