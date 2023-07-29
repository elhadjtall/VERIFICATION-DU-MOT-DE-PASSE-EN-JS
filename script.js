 // Définir les variables
 var myInput = document.getElementById('psw');
 var letter = document.getElementById('letter');
 var capital = document.getElementById('capital');
 var number = document.getElementById('number');
 var length = document.getElementById('length');

 // Lorsque l'utilisateur commence à taper quelque chose dans le champ du mot de passe
 myInput.onkeyup = function () {
   // Valider les lettres minuscules
   var lowerCaseLetters = /[a-z]/g;
   if (myInput.value.match(lowerCaseLetters)) {
     // Si le mot de passe contient une lettre minuscule, enlever la classe "invalid" et ajouter la classe "valid"
     letter.classList.remove('invalid');
     letter.classList.add('valid');
   } else {
     // Sinon, enlever la classe "valid" et ajouter la classe "invalid"
     letter.classList.remove('valid');
     letter.classList.add('invalid');
   }

   // Valider les lettres majuscules
   var upperCaseLetters = /[A-Z]/g;
   if (myInput.value.match(upperCaseLetters)) {
     // Si le mot de passe contient une lettre majuscule, enlever la classe "invalid" et ajouter la classe "valid"
     capital.classList.remove('invalid');
     capital.classList.add('valid');
   } else {
     // Sinon, enlever la classe "valid" et ajouter la classe "invalid"
     capital.classList.remove('valid');
     capital.classList.add('invalid');
   }

   // Valider les chiffres
   var numbers = /[0-9]/g;
   if (myInput.value.match(numbers)) {
     // Si le mot de passe contient un chiffre, enlever la classe "invalid" et ajouter la classe "valid"
     number.classList.remove('invalid');
     number.classList.add('valid');
   } else {
     // Sinon, enlever la classe "valid" et ajouter la classe "invalid"
     number.classList.remove('valid');
     number.classList.add('invalid');
   }

   // Valider la longueur
   if (myInput.value.length >= 8) {
     // Si le mot de passe contient au moins 8 caractères, enlever la classe "invalid" et ajouter la classe "valid"
     length.classList.remove('invalid');
     length.classList.add('valid');
   } else {
     // Sinon, enlever la classe "valid" et ajouter la classe "invalid"
     length.classList.remove('valid');
     length.classList.add('invalid');
   }
 };



