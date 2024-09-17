const increasebtn = document.getElementById("bt1");
const decreasebtn = document.getElementById("bt2");
const resetbtn = document.getElementById("bt3");

const counter = document.getElementById("counter");
const highscore = document.getElementById("Highscore");
const history = document.getElementById("History");

let value = 0;
let array = [];

increasebtn.onclick = function() {
    value++;
    counter.textContent = value;
}
decreasebtn.onclick = function() {
    value--;
    counter.textContent = value;
}

resetbtn.onclick = function() {
    isunique(array, value)
    value = 0;
    highscore.textContent = maxval(array);
    history.textContent = array
    counter.textContent = value;
}

function maxval(listofnumber) {
    let bignumber = 0
    for(let i = 0; i < listofnumber.length; i++) {
        if (listofnumber[i] > bignumber) {
            bignumber = listofnumber[i];
        }
    }
    return bignumber;
}
function isunique (listofnumber, numbertoadd) {
    let duplicate = false
    for(let i = 0; i < listofnumber.length; i++) {
        if (listofnumber[i] == numbertoadd) {
            duplicate = true
            break;
        }
    }
    if(duplicate == false) {
        listofnumber.push(numbertoadd);
    }
}