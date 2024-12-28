function getSelection() {
    var ele = document.getElementsByName('calc-type')

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}
function calculate() {
    var selected = getSelection()
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var output = document.getElementById('output')

    if (selected == "add") {
        output.innerHTML = num1.value + num2.value;
    }
    else if (selected == "subtract") {
        output.innerHTML = num1.value - num2.value;
    }
    else if (selected == "multiply") {
        output.innerHTML = num1.value * num2.value;
    }
    else if (selected == "divide") {
        output.innerHTML = num1.value / num2.value;
    }
    else {
        output.innerHTML = "Error"
    }
}