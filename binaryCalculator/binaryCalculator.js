
var displayExp=""; 

function evaluateButton(button) {

	switch(button) {
	
		case "=":
		
			var result=eval(displayExp); //evaluate result 
			result=parseInt(result); //get rid of decimals, as specified in the problem instructions
			displayExp = result; //make the result the new expression to display; 
			
			break; 
			
		case "C": 
		
			displayExp =""; //reset
			
			break; 
		
		default:  //for all other cases
		
			displayExp += button;  	
	}
	
	document.getElementById("res").innerHTML=displayExp; // update the display
}

var getChar = function() {
                var e = window.event;
                var btn = e.target || e.srcElement;
                var buttonText = btn.innerHTML;
                
                evaluateButton(buttonText); 
            }

document.getElementById("btn0").onclick = getChar; 
document.getElementById("btn1").onclick = getChar; 
document.getElementById("btnClr").onclick = getChar;
document.getElementById("btnEql").onclick = getChar; 
document.getElementById("btnSum").onclick = getChar;
document.getElementById("btnSub").onclick = getChar; 
document.getElementById("btnMul").onclick = getChar; 
document.getElementById("btnDiv").onclick = getChar; 



