 export default function isFromBellville(registration){
  
    if(registration.startsWith("CY")){
    return true; 
  }
  
   if(registration.startsWith("CJ")){
  return false;
  }
  else if(registration !==null && registration !==""){
    return (registration.length);
  }
  else{ 
  return "no number in the string" ;
  }
  }