
let edad = 29
let masDe18
//Esto es un IF
if (edad < 18){
    console.log("No puedes tomar")
    masDe18 = false
} else{
    console.log("Picha las chelas")
    masDe18 = true
}

console.log(masDe18)
//Es lo equivalente a un IF pero resumido y más bonito (Operador Ternario)
masDe18 = (edad < 18) ? false : true

console.log(masDe18)