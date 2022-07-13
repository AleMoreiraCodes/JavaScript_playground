const eValor = document.querySelector("p")

const eButtons = document.querySelectorAll("button")
const eButtonPar = eButtons[0]
eButtonPar.addEventListener("click", ehParListener)
const eButtonImpar = eButtons[1]
eButtonImpar.addEventListener("click", ehImparListener)

const eList = document.querySelectorAll("ul")
const eParList = eList[0]
const eImparList = eList[1]

function sorteiaValor(){
    const novoNumero = Math.floor(Math.random()*10)
    eValor.textContent = novoNumero
}

function ehParListener(event){
    console.log("E par")
    criaElemento(eParList)
}

function ehImparListener(event){
    console.log("E impar")
    criaElemento(eImparList)
}

function criaElemento(valor, ehPar){
    const eLi = document.createElement("li")
    eLi.textContent = eValor.textContent

    if(ehPar){
        eParList.appendChild(eLi)
    } else {
        eImparList.appendChild(eLi)
    }
    sorteiaValor()

}
