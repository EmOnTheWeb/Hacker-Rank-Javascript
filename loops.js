// print vowels followed by consonants 

function vowelsAndConsonants(s) {
    
    var consonants='';
 
   for(i=0; i<s.length; i++) {
       
       var currentLetter=s[i]; 
    
       if(currentLetter=='a' || currentLetter =='e'||currentLetter=='i'||currentLetter =='o'||currentLetter=='u'){
            console.log(currentLetter); 
       }
       else {
           consonants+=currentLetter; 
       }    
   }
   
   for(i=0; i<consonants.length; i++) {
       
       console.log(consonants[i]); 
   }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
     vowelsAndConsonants(input);
});