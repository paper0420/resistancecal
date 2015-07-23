var result = document.querySelector(".result");
var firstNum = document.querySelector("#first");
var secondNum = document.querySelector("#second");
var thirdNum = document.querySelector("#third");
var toleranceNum = document.querySelector("#tolerance");


function calculate() {
    var firstValue = parseInt(firstNum.value);
    var secondValue = parseInt(secondNum.value);
    var thirdValue = parseInt(thirdNum.value);
   
    var firstdigit = firstValue * 10;
    var seconddigid = firstdigit + secondValue;
    var answer = seconddigid * thirdValue;
   
    result.innerHTML = answer + " Ohm" + " tolerance " + toleranceNum.value ;
}

firstNum.addEventListener("change", function(){
    var color = firstNum.options[firstNum.selectedIndex].text;
    firstNum.style.color = color;
    var firstselected = firstNum.options[firstNum.selectedIndex].value;
        
});
secondNum.addEventListener("change", function(){
    var color = secondNum.options[secondNum.selectedIndex].text;
    secondNum.style.color = color;
});
thirdNum.addEventListener("change", function(){
    var color = thirdNum.options[thirdNum.selectedIndex].text;
    thirdNum.style.color = color;
});
toleranceNum.addEventListener("change", function(){
    var color = toleranceNum.options[toleranceNum.selectedIndex].text;
    toleranceNum.style.color = color;
});