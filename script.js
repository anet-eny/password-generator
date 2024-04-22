const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const button = document.getElementById("btn")
const rectangleOne = document.getElementById("rectangle-one")
const rectangleTwo = document.getElementById("rectangle-two")

let passwordOne = ""
let passwordTwo = ""

function generatePassword() {
    passwordOne = ""
    passwordTwo = ""
    for (let i = 0; i < 15; i++) {
        let randomCharacterOne = characters[Math.floor(Math.random() * characters.length)]
        passwordOne += randomCharacterOne
        let randomCharacterTwo = characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += randomCharacterTwo
    }
    console.log(passwordOne)
    console.log(passwordTwo)
    rectangleOne.textContent = passwordOne
    rectangleTwo.textContent = passwordTwo
}