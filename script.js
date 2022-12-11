//consumindo JSON
const dados = await ( await fetch("data.json")).json();

//variaveis dos dias e colunas
let column = document.querySelectorAll('.table__column')
let dayBox = document.querySelectorAll('.table__day')
let columnArr = Array.from(column) //começa no 0
let dayArr = Array.from(dayBox) // começa no 0

/*PEGANDO O DIA DA SEMANA */
let date = new Date().getDay()
//mudando dia da semana pra começar em 0 ao invés de 1
transformDate()
    
chanceColumnColor()
    
days()
numero()




//mudando dia da semana pra começar em 0 ao invés de 1
function transformDate() {      
    /*if (date == 1) {
        date = 0
    } else if (date == 2) {
        date = 1
    } else if (date == 3) {
        date = 2
    } else if (date == 4) {
        date = 3
    } else if (date == 5) {
        date = 4
    } else if (date == 6) {
        date = 5
    } else if (date == 7) {
        date = 6
    }*/

    date -= 1
}

//mudando a cor da coluna conforme dia atual da semana
function chanceColumnColor() {
    
    for (let i = 0; i <= dayArr.length; i++) {
        if (i === date) {
        columnArr[date].style.backgroundColor = "var(--cyan)"
        } 
    }
}
//definindo o nome dos dias
function days() {
    console.log(dayArr)
    for (let i = 0; i <= 7; i++) {
        dayArr[i].innerHTML = `${dados[i].day}`
    }
}

//adicionando dados


function numero() {
    let numeros = document.querySelectorAll('.table__data')
    let numerosArr = Array.from(numeros)

    for (let i = 0; i <= 7; i++) {
        numerosArr[i].innerHTML = `$${dados[i].amount}`
    }
}

            
        



