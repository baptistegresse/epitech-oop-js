// Complétez ce programme issu du cours pour y ajouter la gestion de l'inventaire des personnages. Voici les améliorations à intégrer :

// L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
// Tous les personnages possèdent initialement 10 pièces d'or et une clé.
// L'inventaire doit être affiché dans la description d'un joueur.
// Lorsqu'un personnage tue un adversaire, il récupère dans son propre inventaire le nombre de pièces d'or et de clés de cet adversaire.

// Ajoutez votre code ici

class Personnage {
            constructor(nom, pv, force) {
            this.nom = nom;
            this.pv = pv;
            this.force = force;
            this.xp = 0;
            this.piece = 10;
            this.cle = 1;
        }                

        decrire() {
            return(`${this.nom} a ${this.pv} points de vie, ${this.force} en force et ${this.xp} points d'expérience, ${this.piece} pièces d'or et ${this.cle} clé(s`)
        }

        attaquer(champion) {
            console.log("A L'ATTAQUE !!!!!!!!!!");
            champion.pv -= this.force;
            if(champion.pv <= 0) {
                this.tuer(champion);
            }
        }

        tuer(champion) {
            console.log(`${champion.nom} est mort, ${this.nom} gagne 10 xp`);
            this.xp += 10;
        }

}

const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());