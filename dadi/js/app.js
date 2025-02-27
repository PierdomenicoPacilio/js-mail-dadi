//    dichiarazione delle variabili e input :
const computerNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;
let winner;

//   output dei due numeri :
console.log(`Il numero uscitro al computer è: ${computerNumber}
Il numero uscito all'user è: ${userNumber}`);

//   calcolo del vincitore :
if(computerNumber > userNumber){
    winner = 'computer';
    console.log(`il vincitore è ${winner}`);
} else if(computerNumber < userNumber){
    winner = 'user';
    console.log(`il vincitore è ${winner}`);
} else{
    console.log(`non ha vinto nessuno, è finita in parità`);
};




/*
BONUS :
*/

//    dichiarazione delle variabili e input :
const computerNumberB = Math.floor(Math.random() * 6) + 1;
const userNumberB = Number(prompt("inserisci un numero da 1 a 6"));
let winnerB;

// controlliamo che il dato inserito sia valido :
if(isNaN(userNumberB) || userNumberB > 6){
    console.log('il dato inserito non è un numero da 1 a 6');
} else{
    //   output dei due numeri :
    console.log(`Il numero uscitro al computer è: ${computerNumberB}
    Il numero uscito all'user è: ${userNumberB}`);

    //   calcolo del vincitore :
    if(computerNumberB > userNumberB){
        winnerB = 'computer';
        console.log(`il vincitore è ${winnerB}`);
    } else if(computerNumberB < userNumberB){
        winnerB = 'user';
        console.log(`il vincitore è ${winnerB}`);
    } else{
        console.log(`non ha vinto nessuno, è finita in parità`);
    }; 
};