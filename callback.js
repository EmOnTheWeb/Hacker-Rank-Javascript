function myFilter(my_array, callback){
    var filteredArray = [];  
    
    for(i=0;i<my_array.length;i++){
          if(callback(my_array[i])){
             filteredArray.push(my_array[i]) ; 
          }
    }
    return filteredArray;  
}

function processData(inputArray) {
    
    console.log(myFilter(inputArray, function(str){ 
        if((Number(str)%2==0)){ return true;} else { return false; }  
    } ));   
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});