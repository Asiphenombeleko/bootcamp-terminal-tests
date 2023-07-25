export default function fromWhere(regNo){
  

    if(regNo.startsWith("CY")){
      return "invalid registration number"
    }
    if(regNo.endsWith("CY")){
      return "Bellville"
    }
    else if(regNo.endsWith("CJ")){
      return "Paarl"
    }
    else if(regNo.endsWith("CA")){
      return "Cape Town"
    }
    else{
      return "Some other place!"
    }
    
  }