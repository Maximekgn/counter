const add_button = document.getElementById("add");
const reset_button = document.getElementById("reset");
const remove_button = document.getElementById("remove");
const number = document.getElementById("number");

add_button.onclick = function(){
    number.textContent = Number(number.textContent) + 1;
}
remove_button.onclick = function(){
    number.textContent = Number(number.textContent) - 1;
}
reset_button.onclick = function(){
    number.textContent = 0;
}
