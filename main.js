/*A questo punto una volta terminato il vostro layout, include un vostro file javascript chiamato main.js e fate in modo che quando l’utente fa 
click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente. 
Il prezzo orario per una commissione varia in questo modo:
- Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti. Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).*/
document.getElementById("send").addEventListener("click", calcolaPrezzo);
function calcolaPrezzo(event)
{
    event.preventDefault();
    document.getElementById("risultato").innerHTML = ("Il risultato finale è");
  if(backed==1)
  alert("è così");
 

}

