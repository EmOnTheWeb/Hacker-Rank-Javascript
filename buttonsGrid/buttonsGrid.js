var buttonElement = [];
var buttonText = []; 

	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var btn6 = document.getElementById("btn6");
	var btn7 = document.getElementById("btn7");
	var btn8 = document.getElementById("btn8");
	var btn9 = document.getElementById("btn9");
	
	buttonElement.push(btn1,btn2,btn3,btn6,btn9,btn8,btn7,btn4); 
	buttonText.push('1','2','3','6','9','8','7','4'); 
	
document.getElementById("btn5").onclick = function(){

	var addFront = buttonText.pop(); 
	buttonText.unshift(addFront); 
	
	for(i=0; i<buttonElement.length; i++){
		buttonElement[i].innerHTML = buttonText[i]; 
	}	
}; 