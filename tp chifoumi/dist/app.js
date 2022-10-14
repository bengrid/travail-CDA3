"use strict";
class Action {
    constructor(pChoix) {
        this.choix = pChoix;
    }
    get laValeur() {
        return this.choix;
    }
    ;
}
;
class player {
    constructor(pUsername, pScore) {
        this.username = pUsername;
        this.score = pScore;
    }
    addPoints() {
        this.score++;
    }
    get totalPoints() {
        return this.score;
    }
}
class pierre extends Action {
    constructor(pChoix) {
        super(pChoix);
    }
    combat(adversaire) {
        if (adversaire.laValeur == "feuille") {
            console.log("player2 gagne");
        }
        else if (adversaire.laValeur == "ciseaux") {
            console.log('player1 gagne');
        }
        else if (adversaire.laValeur == "pierre") {
            console.log('égalite personne ne gagne');
        }
    }
}
;
class feuille extends Action {
    constructor(pChoix) {
        super(pChoix);
    }
    combat(adversaire) {
        if (adversaire.laValeur == "ciseaux") {
            console.log("player2 gagne");
        }
        else if (adversaire.laValeur == "pierre") {
            console.log('player1 gagne');
        }
        else if (adversaire.laValeur == "feuille") {
            console.log('égalite personne ne gagne');
        }
    }
}
;
class ciseaux extends Action {
    constructor(pChoix) {
        super(pChoix);
    }
    combat(adversaire) {
        if (adversaire.laValeur == "pierre") {
            console.log("player2 gagne");
        }
        else if (adversaire.laValeur == "feuille") {
            console.log('player1 gagne');
        }
        else if (adversaire.laValeur == "ciseaux") {
            console.log('égalite personne ne gagne');
        }
    }
}
;
var pseudo = " ";
function changePseudo(nom) {
    var pseudo = nom;
}
document.addEventListener("click", type);
function type(event) {
    var _a, _b, _c, _d;
    var p1 = new pierre("pierre");
    var choixDuBot = new pierre("pierre");
    console.log("moi: " + ((_a = event.target) === null || _a === void 0 ? void 0 : _a.name));
    if (((_b = event.target) === null || _b === void 0 ? void 0 : _b.name) == "pierre") {
        var p1 = new pierre("pierre");
    }
    else if (((_c = event.target) === null || _c === void 0 ? void 0 : _c.name) == "feuille") {
        var p1 = new feuille("feuille");
    }
    else if (((_d = event.target) === null || _d === void 0 ? void 0 : _d.name) == "ciseaux") {
        var p1 = new ciseaux("ciseaux");
    }
    var nb = Math.floor(Math.random() * 3);
    switch (nb) {
        case 0: {
            var choixDuBot = new pierre("pierre");
            console.log('bot: ' + choixDuBot.laValeur);
            p1.combat(choixDuBot);
            break;
        }
        case 1: {
            var choixDuBot = new pierre("feuille");
            console.log('bot: ' + choixDuBot.laValeur);
            p1.combat(choixDuBot);
            break;
        }
        case 2: {
            var choixDuBot = new ciseaux("ciseaux");
            console.log('bot: ' + choixDuBot.laValeur);
            p1.combat(choixDuBot);
            break;
        }
    }
}
;
