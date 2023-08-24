/*
Traccia
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

*/
// DICHIARAZIONI GLOBALI
//const days = document.getElementById('days');
//const hours = document.getElementById('hours');
//const minutes = document.getElementById('minutes');
//const seconds = document.getElementById('seconds');



//MILESTONE 0:
// !!! Creare un array di oggetti :


const peopleTeam = [
    {
        name: "Wayne Barnett",
        profession: "Founder CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    }
];




//MILESTONE 1:
//Per stampare le informazioni di ogni persona bisogna usare un ciclo per iterare attraverso l'array.
// uso of per l'array
for (const person of peopleTeam) {
    //per potergli stampare si deve usare template literal,usare la variabile "person"(che ha ruolo di una index),punto "proprieta"
    console.log(`Name :${person.name}`);
    console.log(`Profession :${person.profession}`);
    console.log(`Photo :${person.photo}`);
}


