// Buena suerte!
// Estado inicial

// Estado inicial
var numero1 = 0;
var numero2 = 0;
var suma = numero1 + numero2;
const btnCheck = document.querySelector("#btn");
const checkMessage = document.querySelector("#message");
const result = document.querySelector("#guess");

// 1. Genera dos números aleatórios y guárdalos en dos variables
numero1 = Math.floor(Math.random()*9)+1; //1-10
numero2 = Math.floor(Math.random()*9)+1; //1-10

// 2. Haz la suma de dichos números y guardala en otra variable
suma = numero1 + numero2;

// Actualizando el DOM
document.querySelector("#primary-number").textContent = numero1;
document.querySelector("#secondary-number").textContent = numero2;
result.focus();


// 3. Cuando el usuario haga clic en el botón, debes comprobar si la suma que has calculado es igual al valor que ha introducido el usuario.

// Actualizando el DOM
btnCheck.addEventListener("click", ()=>{
    if (parseInt(result.value)==suma){
        checkMessage.textContent = "¡La suma es correcta!";
    } else {
        checkMessage.textContent = `La suma es incorrecta. La suma correcta era ${suma}`;
    }
    
});



