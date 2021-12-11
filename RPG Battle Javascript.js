// Les boutons

var attaquer = document.getElementById("Attaque");
var defense = document.getElementById("Defense");
var magie = document.getElementById("Magie");


// Les boites d'action

var lesattaques = document.getElementsByClassName("LesAttaques");
var lesdefences = document.getElementsByClassName("LesDefenses");
var lessors = document.getElementsByClassName("LesSors");


// Les actions

var couteau = document.getElementById("couteau");
var poing = document.getElementById("poing");
var bouclier = document.getElementById("bouclier");
var protection = document.getElementById("protection");
var soins = document.getElementById("soins");
var guerison = document.getElementById("guerison");


// Les heros
// Gavin

var premierhero = document.getElementsByClassName("premierhero")[0];
var managavinIn = document.getElementById("managavin");
var managavin = 100;
var pvgavinIn = document.getElementById("pvgavin");
var pvgavin = 50;

// Daryl

var deuxiemehero = document.getElementsByClassName("deuxiemehero")[0];
var manadarylIn = document.getElementById("manadaryl");
var manadaryl = 100;
var pvdarylIn = document.getElementById("pvdaryl")
var pvdaryl = 30;

// Aron

var troisiemehero = document.getElementsByClassName("troisiemehero")[0];
var manaaronIn = document.getElementById("manaaron");
var manaaron = 100;
var pvaronIn = document.getElementById("pvaron")
var pvaron = 60;

// Kasper

var quatriemehero = document.getElementsByClassName("quatriemehero")[0];
var manakasperIn = document.getElementById("manakasper");
var manakasper = 100;
var pvkasperIn = document.getElementById("pvkasper")
var pvkasper = 30;

// Les antagonistes
// Dragan

var antagoniste1 = document.getElementsByClassName("antagoniste1")[0];
var pvdraganIn = document.getElementById("pvdragan")
var pvdragan = 150;

// Predrag

var antagoniste2 = document.getElementsByClassName("antagoniste2")[0];
var pvpredragIn = document.getElementById("pvpredrag")
var pvpredrag = 100;

// Ruslan

var antagoniste3 = document.getElementsByClassName("antagoniste3")[0];
var pvruslanIn = document.getElementById("pvruslan")
var pvruslan = 130;

// Boite des boutons

var downbox1 = document.getElementsByClassName("downbox1");

// La balise de dialogue des actions du joueur

var balisedialogue = document.getElementsByClassName("baliseaction")[0];

// Nombre de tour

var tourduJoueur = 0;
var heroselection = 0;

// Si on clique sur le bouton "Attaquer", la boite avec les actions "Lancer couteau" et "Coup de poing" s'ouvre

attaquer.onclick = function () {
    lesattaques[0].style.visibility = "visible";
    lesdefences[0].style.visibility = "hidden";
    lessors[0].style.visibility = "hidden";

}

// Si on clique sur le bouton "Défendre", la boite avec les actions "Bouclier" et "Protection" s'ouvre

defense.onclick = function () {
    lesdefences[0].style.visibility = "visible";
    lesattaques[0].style.visibility = "hidden";
    lessors[0].style.visibility = "hidden";

}

// Si on clique sur le bouton "Magie", la boite avec les actions "Soins" et "Guerison" s'ouvre

magie.onclick = function () {
    lessors[0].style.visibility = "visible";
    lesdefences[0].style.visibility = "hidden";
    lesattaques[0].style.visibility = "hidden";
}

// Une fois cliqué sur "Lancer couteau" ou "Coup de poing" la boite lesattaques se ferme

lesattaques[0].onclick = function () {
    this.style.visibility = "hidden";
}

// Une fois cliqué sur "Bouclier" ou "Protection" la boite lesdefenses se ferme

lesdefences[0].onclick = function () {
    this.style.visibility = "hidden";
}

// Une fois cliqué sur "Soins" ou "Guerison" la boite lessors se ferme

lessors[0].onclick = function () {
    this.style.visibility = "hidden";
}


couteau.onclick = function () {

    // Quand le programme selectionne un antagoniste qui est mort, il va selectionner un autre antagoniste qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 3);
    while((aleatoire == 0 && pvdragan <= 0) || (aleatoire == 1 && pvpredrag <= 0) || (aleatoire == 2 && pvruslan <= 0)){
        aleatoire = Math.floor(Math.random() * 3);
        if (pvdragan <= 0 && pvpredrag <= 0 && pvruslan <= 0){
            break;
        }
    }

    // Selectionne un monstre et lui inflige des degats

    if (aleatoire == 0) {
        pvdragan -= 35;
        balisedialogue.innerHTML = "Dragan a perdu 35PV !";
        if (pvdragan <= 0) {
            antagoniste1.style.visibility = "hidden"
            balisedialogue.innerHTML = "Dragan a été tué";

        }
    }
    if (aleatoire == 1) {
        pvpredrag -= 35;
        balisedialogue.innerHTML = "Predrag a perdu 35PV !";
        if (pvpredrag <= 0) {
            antagoniste2.style.visibility = "hidden"
            balisedialogue.innerHTML = "Predrag a été tué";
        }
    }
    if (aleatoire == 2) {
        pvruslan -= 35;
        balisedialogue.innerHTML = "Ruslan a perdu 35PV !";
        if (pvruslan <= 0) {
            antagoniste3.style.visibility = "hidden"
            balisedialogue.innerHTML = "Ruslan a été tué";
        }
    }
    pvdraganIn.innerHTML = pvdragan;
    pvpredragIn.innerHTML = pvpredrag;
    pvruslanIn.innerHTML = pvruslan;

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // Si les 3 antagonistes ont 0 ou moins de PV, la balise dialogue affiche que le joueur a gagné

    if (pvdragan <= 0 && pvpredrag <= 0 && pvruslan <= 0) {
        balisedialogue.innerHTML = "Bravo, vous avez gagné !"
    }

    // En cliquant sur "Lancer couteau" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

poing.onclick = function () {

    // Quand le programme selectionne un antagoniste qui est mort, il va selectionner un antagoniste hero qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 3);
    while((aleatoire == 0 && pvdragan <= 0) || (aleatoire == 1 && pvpredrag <= 0) || (aleatoire == 2 && pvruslan <= 0)){
        aleatoire = Math.floor(Math.random() * 3);
        if (pvdragan <= 0 && pvpredrag <= 0 && pvruslan <= 0){
            break;
        }
    }

    // Selectionne un monstre et lui inflige des degats

    if (aleatoire == 0) {
        pvdragan -= 20;
        balisedialogue.innerHTML = "Dragan a perdu 20PV !";
        if (pvdragan <= 0) {
            antagoniste1.style.visibility = "hidden"
            balisedialogue.innerHTML = "Dragan a été tué";

        }
    }
    if (aleatoire == 1) {
        pvpredrag -= 20;
        balisedialogue.innerHTML = "Predrag a perdu 20PV !";
        if (pvpredrag <= 0) {
            antagoniste2.style.visibility = "hidden"
            balisedialogue.innerHTML = "Predrag a été tué";
        }
    }
    if (aleatoire == 2) {
        pvruslan -= 20;
        balisedialogue.innerHTML = "Ruslan a perdu 20PV !";
        if (pvruslan <= 0) {
            antagoniste3.style.visibility = "hidden"
            balisedialogue.innerHTML = "Ruslan a été tué";
        }
    }
    pvdraganIn.innerHTML = pvdragan;
    pvpredragIn.innerHTML = pvpredrag;
    pvruslanIn.innerHTML = pvruslan;

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // Si les 3 antagonistes ont 0 ou moins de PV, la balise dialogue affiche que le joueur a gagné

    if (pvdragan <= 0 && pvpredrag <= 0 && pvruslan <= 0) {
        balisedialogue.innerHTML = "Bravo, vous avez gagné !"
    }

    // En cliquant sur "Coup de poing" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

bouclier.onclick = function () {

    // Quand le programme selectionne un hero qui est mort, il va selectionner un autre hero qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 4);
    while((aleatoire == 0 && pvgavin <= 0) || (aleatoire == 1 && pvdaryl <= 0) || (aleatoire == 2 && pvaron <= 0) || (aleatoire == 3 && pvkasper <= 0)){
        aleatoire = Math.floor(Math.random() * 4);
        if (pvkasper <= 0 && pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0){
            break;
        }
    }

    // Selectionne un hero au hasard et lui donne 10 PV

    if (aleatoire == 0) {
        pvgavin += 10;
        balisedialogue.innerHTML = "Gavin a gagné 10PV !";
    }

    if (aleatoire == 1) {
        pvdaryl += 10;
        balisedialogue.innerHTML = "Daryl a gagné 10PV !";
    }
    if (aleatoire == 2) {
        pvaron += 10;
        balisedialogue.innerHTML = "Aron a gagné 10PV !";
    }
    if (aleatoire == 3) {
        pvkasper += 10;
        balisedialogue.innerHTML = "Kasper a gagné 10PV !";
    }
    pvgavinIn.innerHTML = pvgavin
    pvdarylIn.innerHTML = pvdaryl
    pvaronIn.innerHTML = pvaron
    pvkasperIn.innerHTML = pvkasper

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // En cliquant sur "Bouclier" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

protection.onclick = function () {

    // Quand le programme selectionne un hero qui est mort, il va selectionner un autre hero qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 4);
    while((aleatoire == 0 && pvgavin <= 0) || (aleatoire == 1 && pvdaryl <= 0) || (aleatoire == 2 && pvaron <= 0) || (aleatoire == 3 && pvkasper <= 0)){
        aleatoire = Math.floor(Math.random() * 4);
        if (pvkasper <= 0 && pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0){
            break;
        }
    }

    // Selectionne un hero au hasard et lui donne 5 PV

    if (aleatoire == 0) {
        pvgavin += 5;
        balisedialogue.innerHTML = "Gavin a gagné 5PV !";
    }

    if (aleatoire == 1) {
        pvdaryl += 5;
        balisedialogue.innerHTML = "Daryl a gagné 5PV !";
    }
    if (aleatoire == 2) {
        pvaron += 5;
        balisedialogue.innerHTML = "Aron a gagné 5PV !";
    }
    if (aleatoire == 3) {
        pvkasper += 5;
        balisedialogue.innerHTML = "Kasper a gagné 5PV !";
    }
    pvgavinIn.innerHTML = pvgavin
    pvdarylIn.innerHTML = pvdaryl
    pvaronIn.innerHTML = pvaron
    pvkasperIn.innerHTML = pvkasper

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // En cliquant sur "Protection" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

soins.onclick = function () {

    // Si un hero utilise un sort dans "Magie", il perd 50 points de mana

    if (heroselection == 1){
        managavin -= 50
    } 

    if (heroselection == 2){
        manadaryl -= 50
    } 

    if (heroselection == 3){
        manaaron -= 50
    } 

    if (heroselection == 4){
        manakasper -= 50
    } 

    managavinIn.innerHTML = managavin
    manadarylIn.innerHTML = manadaryl
    manaaronIn.innerHTML = manaaron
    manakasperIn.innerHTML = manakasper

    // Quand le programme selectionne un hero qui est mort, il va selectionner un autre hero qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 4);
    while((aleatoire == 0 && pvgavin <= 0) || (aleatoire == 1 && pvdaryl <= 0) || (aleatoire == 2 && pvaron <= 0) || (aleatoire == 3 && pvkasper <= 0)){
        aleatoire = Math.floor(Math.random() * 4);
        if (pvkasper <= 0 && pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0){
            break;
        }
    }

    // Selectionne un hero au hasard et lui donne 15 PV

    if (aleatoire == 0) {
        pvgavin += 15;
        balisedialogue.innerHTML = "Gavin a gagné 15PV !";
    }

    if (aleatoire == 1) {
        pvdaryl += 15;
        balisedialogue.innerHTML = "Daryl a gagné 15PV !";
    }
    if (aleatoire == 2) {
        pvaron += 15;
        balisedialogue.innerHTML = "Aron a gagné 15PV !";
    }
    if (aleatoire == 3) {
        pvkasper += 15;
        balisedialogue.innerHTML = "Kasper a gagné 15PV !";
    }
    pvgavinIn.innerHTML = pvgavin
    pvdarylIn.innerHTML = pvdaryl
    pvaronIn.innerHTML = pvaron
    pvkasperIn.innerHTML = pvkasper

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // En cliquant sur "Soins" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

guerison.onclick = function () {

    // Si un hero utilise un sort dans "Magie", il perd 50 points de mana

    if (heroselection == 1){
        managavin -= 50
    } 

    if (heroselection == 2){
        manadaryl -= 50
    } 

    if (heroselection == 3){
        manaaron -= 50
    } 

    if (heroselection == 4){
        manakasper -= 50
    } 

    managavinIn.innerHTML = managavin
    manadarylIn.innerHTML = manadaryl
    manaaronIn.innerHTML = manaaron
    manakasperIn.innerHTML = manakasper

    // Quand le programme selectionne un hero qui est mort, il va selectionner un autre hero qui est encore vivant  

    aleatoire = Math.floor(Math.random() * 4);
    while((aleatoire == 0 && pvgavin <= 0) || (aleatoire == 1 && pvdaryl <= 0) || (aleatoire == 2 && pvaron <= 0) || (aleatoire == 3 && pvkasper <= 0)){
        aleatoire = Math.floor(Math.random() * 4);
        if (pvkasper <= 0 && pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0){
            break;
        }
    }

    // Selectionne un hero au hasard et lui donne 20 PV

    if (aleatoire == 0) {
        pvgavin += 20;
        balisedialogue.innerHTML = "Gavin a gagné 20PV !";
    }

    if (aleatoire == 1) {
        pvdaryl += 20;
        balisedialogue.innerHTML = "Daryl a gagné 20PV !";
    }
    if (aleatoire == 2) {
        pvaron += 20;
        balisedialogue.innerHTML = "Aron a gagné 20PV !";
    }
    if (aleatoire == 3) {
        pvkasper += 20;
        balisedialogue.innerHTML = "Kasper a gagné 20PV !";
    }
    pvgavinIn.innerHTML = pvgavin
    pvdarylIn.innerHTML = pvdaryl
    pvaronIn.innerHTML = pvaron
    pvkasperIn.innerHTML = pvkasper

    // Une fois que 4 action ont été realisé, les antagonistes ripostent

    tourduJoueur += 1
    if (tourduJoueur > 3) {
        tourduJoueur = 0;
        for (i = 0; i < 3; i++) {
            riposte(i)

        }
    }

    // En cliquant sur "Guerison" la boite avec les boutons principaux "Attaquer", "Defendre" et "Magie" disparait

    downbox1[0].style.visibility = "hidden";
}

premierhero.onclick = function () {

    heroselection = 1;

    // Si la mana de Daryl est égal ou inférieur à 0, il ne peut plus utiliser de magie

    if (managavin <= 0){
        magie.style.pointerEvents = "none";
    }else{
        magie.style.pointerEvents = "visible";
    }

    // En cliquant sur l'image du hero il va se mettre en avant en se deplacant de 100 pixels vers la droite

    this.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
    ], {
        duration: 1000,
    });

    // En cliquant sur l'image du hero, la boite d'action principale avec "Attaque", "Defendre" et "Magie" s'affiche

    downbox1[0].style.visibility = "visible";
}

deuxiemehero.onclick = function () {
    heroselection = 2;

    // Si la mana de Daryl est égal ou inférieur à 0, il ne peut plus utiliser de magie

    if (manadaryl <= 0){
        magie.style.pointerEvents = "none";
    }else{
        magie.style.pointerEvents = "visible";
    }

    // En cliquant sur l'image du hero il va se mettre en avant en se deplacant de 100 pixels vers la droite

    this.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
    ], {
        duration: 1000,
    });

    // En cliquant sur l'image du hero, la boite d'action principale avec "Attaque", "Defendre" et "Magie" s'affiche

    downbox1[0].style.visibility = "visible";
}

troisiemehero.onclick = function () {
    heroselection = 3;

    // Si la mana de Daryl est égal ou inférieur à 0, il ne peut plus utiliser de magie

    if (manaaron <= 0){
        magie.style.pointerEvents = "none";
    }else{
        magie.style.pointerEvents = "visible";
    }

    // En cliquant sur l'image du hero il va se mettre en avant en se deplacant de 100 pixels vers la droite

    this.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
    ], {
        duration: 1000,
    });

    // En cliquant sur l'image du hero, la boite d'action principale avec "Attaque", "Defendre" et "Magie" s'affiche

    downbox1[0].style.visibility = "visible";
}

quatriemehero.onclick = function () {
    heroselection = 4;

    // Si la mana de Daryl est égal ou inférieur à 0, il ne peut plus utiliser de magie

    if (manakasper <= 0){
        magie.style.pointerEvents = "none";
    }else{
        magie.style.pointerEvents = "visible";
    }

    // En cliquant sur l'image du hero il va se mettre en avant en se deplacant de 100 pixels vers la droite

    this.animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
    ], {
        duration: 1000,
    });

    // En cliquant sur l'image du hero, la boite d'action principale avec "Attaque", "Defendre" et "Magie" s'affiche

    downbox1[0].style.visibility = "visible";
}

// Fonction de riposte de l'antagoniste

function riposte(i) {
    setTimeout(function () {

        // Quand le programme selectionne un hero qui est mort, il va selectionner un autre hero qui est encore vivant

        aleatoire = Math.floor(Math.random() * 4);
        while((aleatoire == 0 && pvgavin <= 0) || (aleatoire == 1 && pvdaryl <= 0) || (aleatoire == 2 && pvaron <= 0) || (aleatoire == 3 && pvkasper <= 0)){
            aleatoire = Math.floor(Math.random() * 4);
            if (pvkasper <= 0 && pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0){
                break;
            }
        }

        //Selectionne un héro et lui inflige des degats

        if (aleatoire == 0) {
            pvgavin -= 20;
            balisedialogue.innerHTML = "Gavin a perdu 20PV !";
            if (pvgavin <= 0) {
                premierhero.style.visibility = "hidden"
                balisedialogue.innerHTML = "Gavin est mort...";
            }
        }
        if (aleatoire == 1) {
            pvdaryl -= 20;
            balisedialogue.innerHTML = "Daryl a perdu 20PV !";
            if (pvdaryl <= 0) {
                deuxiemehero.style.visibility = "hidden"
                balisedialogue.innerHTML = "Daryl est mort...";


            }
        }
        if (aleatoire == 2) {
            pvaron -= 20;
            balisedialogue.innerHTML = "Aron a perdu 20PV !";
            if (pvaron <= 0) {
                troisiemehero.style.visibility = "hidden"
                balisedialogue.innerHTML = "Aron est mort...";


            }
        }
        if (aleatoire == 3) {
            pvkasper -= 20;
            balisedialogue.innerHTML = "Kasper a perdu 20PV !";
            if (pvkasper <= 0) {
                quatriemehero.style.visibility = "hidden"
                balisedialogue.innerHTML = "Kasper est mort...";


            }
        }
        pvgavinIn.innerHTML = pvgavin
        pvdarylIn.innerHTML = pvdaryl
        pvaronIn.innerHTML = pvaron
        pvkasperIn.innerHTML = pvkasper
    }, 2000 * (i + 1));

    // Si tous les heros meurent, la balise dialogue affiche que vous avez perdu

    if (pvgavin <= 0 && pvdaryl <= 0 && pvaron <= 0 && pvkasper <= 0) {
        balisedialogue.innerHTML = "Dommage, vous avez perdu";
    }

}

