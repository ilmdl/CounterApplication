const increasebtn = document.getElementById("bt1");
const decreasebtn = document.getElementById("bt2");
const resetbtn = document.getElementById("bt3");

let value = 0;

increasebtn.onclick = function() {
    value++;
    counter.textContent = value;
}
decreasebtn.onclick = function() {
    value--;
    counter.textContent = value;
}

resetbtn.onclick = function() {
    value = 0;
    counter.textContent = value;
}