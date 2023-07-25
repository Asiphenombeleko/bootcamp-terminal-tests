export default function countRegNumber(regNo){
    if (typeof regNo==="number"){
         return 'no intergers please return registration number'
     }
     var reg= regNo.split(",");
 
 
      if (regNo !==null && regNo !==""){
         return (reg.length);
     }
     
       else {
         return "no number in the string"
     }
     
 
   };
   