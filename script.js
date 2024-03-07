
var risultato = document.getElementById('risultato');
var generaBottone = document.getElementById('generaBottone');
var annullaBottone = document.getElementById('annullaBottone');

// calcolo e generazione dei biglietti
generaBottone.addEventListener("click", function() {
  // ottenere il nome e cognome
  var nome = document.getElementById('nome').value;
  console.log(nome);
  //  ottenere i km da percorrere
  var kmDaPercorrere = document.getElementById('km').value;
  console.log(kmDaPercorrere);
  // ottenere fascia d'età
  var fasciaEta = document.getElementById('fascia-eta').value;
  console.log(fasciaEta);
  // prezzo del biglietto e suo calcolo
  var prezzoKm = 0.21;
  var costoBiglietto = prezzoKm * kmDaPercorrere;
  var offerta = "biglietto normale";

  if (fasciaEta == "minorenne") {
    costoBiglietto -= costoBiglietto * 0.2;
    offerta = "sconto minorenni"
  } else if (fasciaEta == "over65") {
    costoBiglietto -= costoBiglietto * 0.4;
    offerta = "sconto over-65"
  }
  costoBiglietto = costoBiglietto.toFixed(2) + "euro";


  var carrozza = Math.floor( Math.random() * 100) + 1;

  var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;


  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = codiceCp;
  document.getElementById('costo').innerHTML = costoBiglietto;
})