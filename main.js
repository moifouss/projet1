const valA = document.querySelector("#a");
const valB = document.querySelector("#b");
const valR = document.querySelector("#r");
const btnCalc = document.querySelector("#btnRes");

btnCalc.addEventListener('click',Calculer)

function Calculer (e){
    e.preventDefault();
    //alert(valA.textContent);
    valR.innerHTML = parseInt(valA.value) + parseInt(valB.value);
}