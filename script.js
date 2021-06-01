const form = document.getElementById('form');
const nom = document.getElementById('name');
const nomV = document.getElementsByName('name').values;
const email = document.getElementById('email');
const sujet = document.getElementById('subject');
const messageBox = document.getElementById('message');

function checkInputs(){
    var reg_Nom = /([a-z]+) ([a-z]+?) ([a-z])/gi;
    var nameValid = reg_Nom.test(nomV[0]);
    if(nameValid == false){
        nom.parentElement.className += ' error';
        console.log("checked");
    }
}

