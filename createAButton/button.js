//number on button increments each time it's clicked
var btn = document.getElementById("btn"); 
var trackNumber = 1; 

btn.onclick = function(){
    var numString = trackNumber.toString(); 
    btn.innerHTML = numString; 
    trackNumber++; 
}; 