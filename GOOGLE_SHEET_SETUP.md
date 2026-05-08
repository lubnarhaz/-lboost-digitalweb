# Configuration Google Sheet — Capture de Leads Lena

## 1. Creer le Google Sheet

Creer un nouveau Google Sheet et ajouter ces colonnes en ligne 1 :

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Date | Heure | Entreprise | Ville | Probleme principal | Service interesse | Scoring | Resume conversation | Statut |

Nommer le fichier : `L-BOOST Leads Chatbot Lena`

## 2. Ajouter le script Apps Script

1. Ouvrir le Google Sheet
2. Aller dans **Extensions > Apps Script**
3. Supprimer le code existant et coller ceci :

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var now = new Date();

  sheet.appendRow([
    now.toLocaleDateString('fr-FR'),
    now.toLocaleTimeString('fr-FR'),
    data.entreprise || '',
    data.ville || '',
    data.probleme || '',
    data.service_interesse || '',
    data.scoring || '',
    data.resume_conversation || '',
    'Nouveau'
  ]);

  // Mise en forme conditionnelle du scoring
  var lastRow = sheet.getLastRow();
  var scoringCell = sheet.getRange(lastRow, 7);
  var scoring = data.scoring || '';

  if (scoring === 'CHAUD') {
    scoringCell.setBackground('#fee2e2').setFontColor('#dc2626').setFontWeight('bold');
  } else if (scoring === 'TIEDE') {
    scoringCell.setBackground('#fef3c7').setFontColor('#d97706').setFontWeight('bold');
  } else {
    scoringCell.setBackground('#f3f4f6').setFontColor('#6b7280');
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Sauvegarder (Ctrl+S)

## 3. Deployer en tant qu'application web

1. Cliquer sur **Deployer > Nouveau deploiement**
2. Type : **Application Web**
3. Configuration :
   - Description : `Leads Chatbot Lena`
   - Executer en tant que : **Moi**
   - Qui peut acceder : **Tout le monde**
4. Cliquer sur **Deployer**
5. Autoriser les permissions demandees
6. **Copier l'URL de deploiement**

L'URL ressemble a :
`https://script.google.com/macros/s/AKfycb.../exec`

## 4. Ajouter la variable d'environnement

### En local (.env.local)
```
GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycb.../exec
```

### Sur Vercel
1. Aller dans le projet sur vercel.com
2. Settings > Environment Variables
3. Ajouter :
   - Nom : `GOOGLE_SHEET_URL`
   - Valeur : l'URL copiee a l'etape 3
   - Environnements : Production, Preview

## 5. Tester

Envoyer une requete de test :

```bash
curl -X POST "URL_GOOGLE_SHEET" \
  -H "Content-Type: application/json" \
  -d '{"entreprise":"Test Shop","ville":"Troyes","probleme":"Pas de site web","service_interesse":"Site web","scoring":"TIEDE","resume_conversation":"Test de la capture de lead"}'
```

Verifier que la ligne apparait dans le Google Sheet.

## Notes

- Si vous modifiez le script, il faut creer un **nouveau deploiement** (pas mettre a jour l'existant)
- Les leads arrivent avec le statut "Nouveau" — le modifier manuellement en "Contacte", "En cours", "Converti" ou "Perdu"
- Le scoring est colore automatiquement : rouge (CHAUD), orange (TIEDE), gris (FROID)
