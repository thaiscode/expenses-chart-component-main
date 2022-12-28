//consuming json
const data = await (await fetch("data.json")).json();

//day and column variables
let column = document.querySelectorAll('.table__column')
let dayBox = document.querySelectorAll('.table__day')
let columnArr = Array.from(column) 
let dayArr = Array.from(dayBox) 

//catching the day of the week
let date = new Date().getDay()

//changing day of week to start at 0 instead of 1
transformDate()

//column height
columnHeight()

//changing column color according to current weekday
columnColor()

//defining the name of the days
days()

//adding data
addData()

//Mouse over data
eventListener()



//changing day of week to start at 0 instead of 1
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

//changing column color according to current weekday
function columnColor() {
    for (let i = 0; i <= dayArr.length; i++) {
        if (i === date) {
        columnArr[date].style.backgroundColor = "var(--cyan)"
        } 
    }
}

//defining the name of the days
function days() {
    for (let i = 0; i <= 6; i++) {
        dayArr[i].innerHTML = `${data[i].day}`
    }
}

//adding data
function addData() {
    let numbersHover = document.querySelectorAll('.table__data')
    let numbersHoverArr = Array.from(numbersHover)

    for (let i = 0; i <= 6; i++) {
        numbersHoverArr[i].innerHTML = `$${data[i].amount}`
    }
}

//column height
function columnHeight() {
    for (let i = 0; i <= 6; i++) {
        columnArr[i].style.height = 
        data[i].amount + '%'
    }
}

//Mouse over data
function eventListener() {
    let box = document.querySelectorAll('.table__box')
    let boxArr = Array.from(box) 

    for (let i = 0; i <= 6; i++) {
        boxArr[i].addEventListener('mouseover', function (e) {
            e.target.children[0].classList.add('hover')
        })
        boxArr[i].addEventListener('mouseout', function(e) {
            e.target.children[0].classList.remove('hover')
        })
    }
}
