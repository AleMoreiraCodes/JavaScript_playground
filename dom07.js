console.log("Hellow")
//Busca uma referência para todos os elementos
const eSpans = document.querySelectorAll("span")
//const eA = eSpans[0]
//const eB = eSpans[1]
//const eS = eSpans[2]

const eButtons = document.querySelectorAll("button")
const eButtonsSoma = eButtons[0]
const eButtonMultiplica = eButtons[1]

eButtonsSoma.addEventListener("click", somaListener)
eButtonMultiplica.addEventListener("click", multiplicaListener)

function somaListener(event){
    console.log("Sopma Listener!")
    soma()
}

function multiplicaListener(event){
    console.log("Multiplica Listener!")
    multiplica()
}
//Opera os dados
function soma(){
    const A = Number(eSpans[0].textContent)
    const B = Number(eSpans[1].textContent)
    const S = A+B
    eSpans[2].textContent = S
}

function multiplica(){
    const A = Number(eSpans[0].textContent)
    const B = Number(eSpans[1].textContent)
    const S = A*B
    eSpans[2].textContent = S
}
//Escreve na saída
eSpans[2].textContent = S
