 // Définir les variables
  var myInput = document.getElementById('psw');
  var letter = document.getElementById('letter');
  var capital = document.getElementById('capital');
  var number = document.getElementById('number');

  // Lorsque l'utilisateur clique sur le champ du mot de passe, affiche la boîte de message
  myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
  };

  // Lorsque l'utilisateur clique en dehors du champ du mot de passe, masque la boîte de message
  myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
  };

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
  };
