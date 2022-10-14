abstract class Action {
    private choix: string;

    constructor(pChoix: string){
        this.choix = pChoix;
    }
    
    abstract combat(adversaire: Action): void;

    public get laValeur(){
        return  this.choix;
    };
 
};

class player{
    private username: string;
    private score: number;
    
    constructor(pUsername: string, pScore: number){
        this.username = pUsername;
        this.score = pScore;
    }

    public addPoints(): void{
        this.score++
    }
    get totalPoints(){
        return this.score;
    }
}


class pierre extends Action{
    constructor(pChoix: string){
        super(pChoix);
    }

    combat(adversaire: Action): void {
        if(adversaire.laValeur == "feuille"){
            console.log("player2 gagne");
        }else if(adversaire.laValeur == "ciseaux"){
            console.log('player1 gagne');
        }else if(adversaire.laValeur == "pierre"){
            console.log('égalite personne ne gagne');
        }
    }


};

class feuille extends Action{
    constructor(pChoix: string){
        super(pChoix);
    }

    combat(adversaire: Action): void {
        if(adversaire.laValeur == "ciseaux"){
            console.log("player2 gagne");
        }else if(adversaire.laValeur == "pierre"){
            console.log('player1 gagne');
        }else if(adversaire.laValeur == "feuille"){
            console.log('égalite personne ne gagne');
        }
    }

};

class ciseaux extends Action{
    constructor(pChoix: string){
        super(pChoix);
    }

    combat(adversaire: Action): void {
        if(adversaire.laValeur == "pierre"){
            console.log("player2 gagne");
        }else if(adversaire.laValeur == "feuille"){
            console.log('player1 gagne');
        }else if(adversaire.laValeur == "ciseaux"){
            console.log('égalite personne ne gagne');
        }
    }

};
//creation du joueur
var pseudo = " ";
function changePseudo(nom: string){
    var pseudo = nom;
}



//Choix du joueur
document.addEventListener("click",type);

function type(event: Event){
    var p1: Action= new pierre("pierre");
    var choixDuBot: Action= new pierre("pierre");
    console.log("moi: "+event.target?.name);
    if(event.target?.name == "pierre"){
      var  p1: Action = new pierre("pierre");
    }else if(event.target?.name == "feuille"){
        var p1: Action = new feuille("feuille");
    }else if(event.target?.name == "ciseaux"){
        var p1: Action = new ciseaux("ciseaux");
    }

var nb = Math.floor(Math.random() * 3);


switch(nb){
    case 0: {
        var choixDuBot: Action = new pierre("pierre");
        console.log('bot: '+choixDuBot.laValeur);
        p1.combat(choixDuBot); 
        break;
    }
    case 1: {
        var choixDuBot: Action = new pierre("feuille");
        console.log('bot: '+choixDuBot.laValeur);
        p1.combat(choixDuBot); 
        break;
    }
    case 2 :{
        var choixDuBot: Action = new ciseaux("ciseaux");
        console.log('bot: '+choixDuBot.laValeur);  
        p1.combat(choixDuBot);  
        break;
    }
}
};

