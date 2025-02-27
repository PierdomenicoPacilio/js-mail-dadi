//  dichiarazione delle variabili e input:
const emailArray = [
    "luna.stellare99@email.com",
    "marco.roccia77@postmail.net",
    "pixel.guru@cybermail.org",
    "giada.luminosa@lumail.io",
    "andrea.nebbia@fastnet.co",
    "space.rider23@galaxymail.com",
    "ombra.notturna@darkweb.net",
    "felix.codex@techmail.dev",
    "mirko.vento84@stormmail.net",
    "elisa.solare@starmail.net",
    "random.name42@fakemail.com",
    "cyber.hacker007@matrixmail.io",
    "flavia.gialli@yellowmail.net",
    "carlo.mistero@enigmail.org",
    "luna.piena@moonlight.co",
    "shadowhunterX@darkzone.net",
    "peppe.frizz@bubblymail.com",
    "arianna.rosa@flowermail.io",
    "davide.python@codebox.dev",
    "email.test123@placeholder.com",
    "utente.sconosciuto@anonmail.org",
    "max.power99@speedmail.net",
    "hackerino.87@darkweb.com",
    "fantasy.dreamer@storymail.io",
    "zeta.omega@lastmail.net",
    "riccardo.veloce@fastlane.co",
    "maria.luce@brightmail.net",
    "nome.cognome@nomail.fake",
    "coding.master@devmail.org",
    "joker.wild@clownmail.io"
  ];
  const userEmail = prompt("inserire l'email da verificare");
  let isEmailPresent = false;

//   ciclo di verifica :
for (i = 0; i < emailArray.length; i++){
    if( userEmail === emailArray[i]);
    isEmailPresent = true;
    break;
};
//  output :
if (isEmailPresent === true){
    console.log("Email presente")
} else{
    console.log('Email non presente')
}