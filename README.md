# Esercizio: Mail e Dadi
### Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
##### Nota:
Non è necessario provvedere alla validazione delle email
### passaggi:
#### dichiarazione delle variabili e input:
- creare array con x numero di mail;
- dare l'input in un prompt e far inserire la mail all'utente e inserirlo in una variabile;
- creare variabile isEmailPresent = false;
#### ciclo di verifica :
- FOR (i = 0; i < array.lenght; i++) cicliamo per il numero di mail nell'array
    - SE (mail inserita dall'utente === array[i]) verifichiamo ogni volta se la email coincide
        - isEmailPresent = true;
        - brake fermare il ciclo; se coincide fermiamo il ciclo
#### output :
- SE (isEmailPresent === True)
    - console.log('Email presente')
- ALTRIMENTI 
    - console.log('Email non presente')

---

### Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

---



