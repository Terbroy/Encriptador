const message = document.getElementById("input-main");
const containerInfo = document.getElementById("container");
const containerVoid = document.getElementById("container-void");
const output = document.getElementById("output-message");


const arrVpwels = [
    {
        letter: "a",
        code: "ai",
    },
    {
        letter: "e",
        code: "enter",
    },
    {
        letter: "i",
        code: "imes",
    },
    {
        letter: "o",
        code: "ober",
    },
    {
        letter: "u",
        code: "ufat",
    },


]

function displayMessage() {
    let text = message.value;
    if (text) {
        containerVoid.classList.add("display-none");
        containerInfo.classList.remove("display-none");
        return text;
    } else {
        containerVoid.classList.remove("display-none");
        containerInfo.classList.add("display-none");
        return false;
    }
}

document.addEventListener("click", e => {
    if (e.target.textContent === "Encriptar") {
        encriptaded();
    } else if (e.target.textContent === "Desencriptar") {
        desencriptacos();
    }
})

function encriptaded() {
    let validate = displayMessage();
    output.textContent =  validate.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}


function desencriptacos() {
    let validate = displayMessage();
    
    
    output.textContent =   validate.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
}