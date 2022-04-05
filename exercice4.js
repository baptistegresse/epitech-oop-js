class Chien {
    constructor(nom, race, taille){
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }

    aboyer() {

        if(this.taille > 50)
            return(`Grrr ! Grrr !`);
        else
            return(`Wouaf ! Wouaf !`)
    }

    decrire() {
        return(`${this.nom} est un ${this.race} mesurant ${this.taille} cm`);
    } 
}

const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
console.log(crockdur.decrire());
console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);
const milou = new Chien("Milou", "fox-terrier", 26);
console.log(milou.decrire());
console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);





















