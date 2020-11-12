var mailList = ["a@gmail.com", "b@gmail.com","c@gmail.com","d@gmail.com","e@gmail.com","f@gmail.com","g@gmail.com","h@gmail.com","i@gmail.com","l@gmail.com","m@gmail.com","n@gmail.com","o@gmail.com","p@gmail.com","q@gmail.com","r@gmail.com","s@gmail.com","t@gmail.com","u@gmail.com","v@gmail.com","z@gmail.com"];

var mail = prompt("Inserisci il tuo indirizzo e-mail")
var message = " ERROR!!! L'indirizzo digitato non è corretto o non è presente nei nostri database"

for (var i = 0; i < mailList.length; i++) {

  if (mail == mailList[i]) {

    var message = "ACCESSO AUTORIZZATO"

  }

}

document.getElementById('message').innerHTML = message;
