// Reprenons le contexte des comptes en banque issu d'un précédent exercice. Un compte bancaire sera modélisé par une classe définie comme suit :

// Une propriété titulaire initialisée par le constructeur.
// Une propriété solde valant initialement 0.
// Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
// Une méthode decrire() renvoyant la description du compte.
// Ecrivez un programme qui crée 3 comptes bancaires, l'un appartenant à Alex, le deuxième à CLovis et le troisième à Marco. Stockez ces comptes dans un tableau.

// Ensuite, le programme crédite 1000 € et affiche la description de chacun des comptes.


// Ajoutez votre code ici

class Compte {
    constructor(titulaire, solde = 0) {
        this.titulaire = titulaire;
        this.solde = solde;
    }
    crediter(montant) {
        
        this.solde += montant
    }
    decrire() {
        return(`${this.titulaire}, votre solde est de ${this.solde} euros`);
    }
}

const compte1 = new Compte('Alex', 5000);
const compte2 = new Compte('Clovis', 2000);
const compte3 = new Compte('Marco', 1000);

tab = [];
tab.push(compte1, compte2, compte3);

for(compte of tab) {
    compte.crediter(-1000);
    console.log(compte);
}

