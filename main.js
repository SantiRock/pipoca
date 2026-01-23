import { langs } from "./text.js"; 

const statment = document.getElementById("statment")
const select = document.getElementById("lang")


const langCode = navigator.language.slice(0,2)

const initialLang = langs[langCode] ? langCode: "en"

select.value = initialLang

statment.innerHTML = langs[initialLang].statment

select.addEventListener("change", (event) => {
    const selectedLang = event.target.value
    statment.innerHTML = langs[selectedLang].statment
} )
