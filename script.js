// Definir les variables 
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var lenght = document.getElementById('lenght');

// Lorsque l'utilisateur clique sur lelcham du mot de passe, afficher la boite message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block";
}

// lorsque l'utilisateur clique en dehors du champ du mot de passe masque la boite de message

myInput.onblur = function(){
    document.getElementById("message").style.display = "none";
}

// lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe
myInput.onkeyup = function(){
    // valider les lettres minuscule 
    var lowerCaseLetters = /[a-z]/g
    if(myInput.ariaValueMax.match(lowerCaseLetters)){
        //si le met de passe contient une lettre minuscule, enlever la classe "invalid et ajouter le classe valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
        // si non, enlever la classe valide et ajouter la classe "invalid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }
}