export default function countAllPaarl(regNo){
    var regArr =[];
    
    var regNumbers = regNo.split(", ")
    
    for(var i=0; i<regNumbers.length; i++){
      
      if(regNumbers[i].startsWith("CJ")){
       regArr.push(regNumbers[i]) 
        
         }
    }return regArr.length
  }