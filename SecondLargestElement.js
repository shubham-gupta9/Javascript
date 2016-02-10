function processData(myArray) {
var max = myArray[0];

    for(var i =1;i<myArray.length;i++){
        if(myArray[i]>max){
            max = myArray[i];
        }
    }
    for(var i =0;i<myArray.length;i++){
        if(myArray[i]==max){
           myArray[i]=0;
        }
    }
 var secmax = myArray[0]; 
    for(var i =1;i<myArray.length;i++){
        if(myArray[i]>secmax){
            secmax = myArray[i];
        }
    }
    console.log(secmax);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
