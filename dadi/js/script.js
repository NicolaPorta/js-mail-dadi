// estrazione utente
var client = Math.floor(Math.random() * 6) + 1;

document.getElementById('client').innerHTML = client;

// estrazione pc
var npc = Math.floor(Math.random() * 6) + 1;

document.getElementById('npc').innerHTML = npc;

// messaggio
if (client > npc) {
  // vittoria
  document.getElementById('message').innerHTML = "Congratulazioni!!! Hai Vinto!";
} else if (client < npc) {
  // sconfitta
  document.getElementById('message').innerHTML = "Peccato Hai Perso!";
} else {
  // pareggio
    document.getElementById('message').innerHTML = "PAR! dividete la posta";
}
