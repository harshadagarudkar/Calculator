let output= document.getElementById("output");

function appendToOutput(value){
      output.value += value;
}

function clearOutput(){
      output.value="";
}

function calculate(){
     try{
          output.value=r=eval(output.value);
     }
     catch (error){
               output.value=error;
     }
}