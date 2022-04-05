// Complétez ce programme pour ajouter la définition de l'objet chien.


// Ajoutez votre code ici

const chien = {
    nom : 'Crockdur',
    race : 'mâtin',
    taille : 75,
    
    aboyer() {
        return "Grrr ! Grrrr !";
    }
};

// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);