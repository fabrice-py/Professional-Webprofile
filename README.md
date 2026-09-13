# Site web professionnel – Fabrice TSAMO

Site vitrine bilingue (**français / anglais**, bascule FR | EN dans l'en-tête), moderne et responsive,
destiné aux recruteurs dans les domaines du traitement des minerais, de l'hydrométallurgie, de la
valorisation des ressources secondaires, de la caractérisation de déchets, de l'ingénierie des mines et du SIG.

## Structure du projet

```
.
├── index.html          # Structure du site (toutes les sections)
├── style.css           # Design : palette bleu / blanc / gris, responsive, animations légères
├── script.js           # Traductions FR/EN, navigation, galerie, formulaire de contact
├── images/
│   ├── portrait.jpg    # Photo portrait (section Accueil)
│   ├── projets/        # Encarts des projets (schémas, courbes, résultats)
│   ├── resultats/      # Encarts libres : graphiques, courbes, cartes SIG, essais
│   └── galerie/        # Photos de la galerie
├── cv/
│   └── CV_Fabrice_TSAMO.pdf   # CV à déposer ici (bouton "Télécharger mon CV")
├── streamlit_app.py    # Hébergement alternatif via Streamlit
└── requirements.txt    # Dépendance Streamlit
```

Sections du site : Accueil · Profil professionnel · Expériences · Projets · Galerie · Compétences · Diplômes & formations · Contact.

## Tester le site en local

Ouvrir `index.html` dans un navigateur suffit. Pour un serveur local :

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Remplacer les images

Tant qu'une image est absente, le site affiche automatiquement un cadre gris indiquant
le **nom de fichier attendu**. Il suffit de déposer vos fichiers avec ces noms exacts
(ou de modifier l'attribut `src` dans `index.html`).

| Emplacement | Fichier attendu | Conseil |
|---|---|---|
| Photo portrait (Accueil) | `images/portrait.jpg` | Format 4:5 ou carré, ≥ 800 px de large |
| Projet 1 – Simulateur Python | `images/projets/simulateur-flowsheet.png` · `images/projets/simulateur-courbes.png` | Schéma du circuit, courbes de récupération |
| Projet 2 – Jumeau numérique DEEE | `images/projets/deee-schema-bloc.png` · `images/projets/deee-resultats.png` | Schéma-bloc Simulink, résultats |
| Projet 3 – Andalousite | `images/projets/andalousite-essais.png` · `images/projets/andalousite-courbe.png` | Résultats d'essais, courbe teneur-récupération |
| Encarts Résultats & visualisations | `images/resultats/graphique-1.png` · `courbe-recuperation.png` · `carte-sig.png` · `essais-metallurgiques.png` | Format 16:10 conseillé |
| Galerie – Laboratoire | `images/galerie/labo-01.jpg` · `labo-02.jpg` | Format 4:3 |
| Galerie – Essais métallurgiques | `images/galerie/essais-01.jpg` · `essais-02.jpg` | Format 4:3 |
| Galerie – Caractérisation | `images/galerie/caracterisation-01.jpg` · `caracterisation-02.jpg` | Format 4:3 |
| Galerie – Terrain / déchets | `images/galerie/terrain-01.jpg` · `terrain-02.jpg` | Format 4:3 |
| Galerie – Résultats scientifiques | `images/galerie/resultats-01.jpg` · `resultats-02.jpg` | Format 4:3 |

**Ajouter une photo à la galerie** : copier un bloc `<figure class="gallery-item" data-cat="...">` dans
`index.html`, changer `src`, `alt` et `data-cat` (`labo`, `essais`, `caracterisation`, `terrain`, `resultats`),
puis ajouter la légende dans `script.js` (clés `gallery.cXX` en FR et EN) ou écrire la légende directement
dans le `<figcaption>` en retirant l'attribut `data-i18n`.

**Modifier une légende** : chaque légende est une clé du dictionnaire `translations` dans `script.js`
(ex. `gallery.c1`, `proj1.fig1`, `results.r3`). Modifiez la valeur dans le bloc `fr` et dans le bloc `en`.

Pensez à compresser vos images (≤ 300 Ko chacune) pour un chargement rapide : [Squoosh](https://squoosh.app) ou TinyPNG.

## Éléments à personnaliser

| Élément | Où | Quoi faire |
|---|---|---|
| Liens LinkedIn / GitHub / email | `index.html` (Accueil, Contact, pied de page) | Remplacer `https://www.linkedin.com/in/VOTRE-PROFIL`, `https://github.com/fabrice-py` et `votre.email@exemple.com` |
| CV PDF | `cv/CV_Fabrice_TSAMO.pdf` | Déposer votre CV |
| Années des diplômes | `script.js` → clés `edu1.period`, `edu2.period` | Vérifier / corriger les dates (valeurs indicatives) |
| Textes des sections | `script.js` → dictionnaire `translations` | Modifier FR **et** EN |
| Formulaire de contact | `index.html` → attribut `action` du `<form>` | Voir ci-dessous |

### Formulaire de contact

Le site étant statique, le formulaire utilise [Formspree](https://formspree.io) (gratuit) :

1. Créer un compte sur formspree.io et un nouveau formulaire.
2. Copier l'identifiant fourni (ex. `xpzgkqwe`).
3. Dans `index.html`, remplacer `YOUR_FORM_ID` dans `action="https://formspree.io/f/YOUR_FORM_ID"`.

Tant que `YOUR_FORM_ID` n'est pas remplacé, le bouton **Envoyer** ouvre la messagerie du visiteur
avec le message pré-rempli (lien `mailto:` vers l'adresse du bloc Contact).

## Héberger le site

### Option 1 – GitHub Pages (recommandé pour un site statique)

1. Pousser les fichiers sur la branche principale du dépôt GitHub (`main`).
2. Sur GitHub : **Settings → Pages**.
3. Dans *Build and deployment*, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis *Save*.
4. Après une à deux minutes, le site est en ligne à l'adresse :
   `https://<votre-utilisateur>.github.io/<nom-du-depot>/`
5. Pour un domaine personnalisé (ex. `fabricetsamo.com`) : ajouter un fichier `CNAME` contenant le domaine
   et configurer les DNS chez votre registrar (voir la documentation GitHub Pages).

Chaque `git push` sur `main` met le site à jour automatiquement.

### Option 2 – Streamlit Community Cloud

Le fichier `streamlit_app.py` encapsule le site (HTML, CSS, JS et images intégrés) dans une application Streamlit.

En local :

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

En ligne :

1. Pousser le dépôt sur GitHub.
2. Aller sur [share.streamlit.io](https://share.streamlit.io), se connecter avec GitHub.
3. *New app* → choisir le dépôt, la branche et le fichier `streamlit_app.py` → *Deploy*.
4. L'application est disponible à une adresse du type `https://<nom-app>.streamlit.app`.

Streamlit convient si vous souhaitez plus tard ajouter des pages interactives (ex. une démo de votre
simulateur géométallurgique en Python). Pour un simple site vitrine, GitHub Pages est plus léger et plus rapide.

### Option 3 – Netlify / Vercel

Glisser-déposer le dossier du projet sur [app.netlify.com/drop](https://app.netlify.com/drop) : le site est en ligne en quelques secondes.

## Technologies

HTML5 · CSS3 (variables, grid, animations) · JavaScript vanilla (aucune dépendance de build) ·
[Font Awesome 6](https://fontawesome.com) pour les icônes · police [Inter](https://fonts.google.com/specimen/Inter).
