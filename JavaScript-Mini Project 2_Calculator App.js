var calcButton = document.getElementsByClassName("calc-key");
var screen = document.getElementById('screen');

for (var i = 0; i < calcButton.length; i++) {
    if (calcButton[i].innerHTML !== "=" && calcButton[i].innerHTML !== "C") {
        calcButton[i].addEventListener('click', screenPrint);
    }
    else if (calcButton[i].innerHTML === "C") {
        calcButton[i].addEventListener('click', function () {
            screen.innerHTML = "";
        });
    }
    else if (calcButton[i].innerHTML === "=") {
        calcButton[i].addEventListener('click', calculate);
    }
}
function screenPrint() {
    var a = this.innerHTML;
    if (screen.innerHTML === null) {
        screen.innerHTML = '';
    }
    var c = screen.innerHTML.concat(a);
    screen.innerHTML = c;
};

function calculate() {
    var result = eval(screen.innerHTML);
    screen.innerHTML = result;
}