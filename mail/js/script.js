var mailList = ["a@gmail.com", "b@gmail.com","c@gmail.com","d@gmail.com","e@gmail.com","f@gmail.com","g@gmail.com","h@gmail.com","i@gmail.com","l@gmail.com","m@gmail.com","n@gmail.com","o@gmail.com","p@gmail.com","q@gmail.com","r@gmail.com","s@gmail.com","t@gmail.com","u@gmail.com","v@gmail.com","z@gmail.com"];

var mail = prompt("Inserisci il tuo indirizzo e-mail")
for (var i = 0; i < mailList.length; i++) {

  if (mail == mailList[i]) {

    var message = true;

  }
}

if (message == true) {
  document.getElementById('message').innerHTML = "ACCESSO AUTORIZZATO";
} else {
  document.getElementById('message').innerHTML = "ACCESSO NEGATO";
}
