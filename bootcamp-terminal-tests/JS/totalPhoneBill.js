export default function totalPhoneBill(phoneBill){
    var  bills = phoneBill.split(",");
     
      var results = 0;
      for(var i=0; i<bills.length; i++){
        
        var total= bills[i].trim();
       if(total === "sms"){
         results += 0.65   
           }else if(total === "call"){
       results += 2.75
        }
      
    }
      
    return "R" + results.toFixed(2);
     
    }
    