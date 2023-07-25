export default function mostProfitableDepartment(salesData){
    let totalSales={};
      for(let i=0 ; i<salesData.length; i++){
         if(!totalSales[salesData[i].department]){
           totalSales[salesData[i].department]=0;
           
            }
        totalSales[salesData[i].department]+= salesData[i].sales
      }
      let highestSales = 0;
      let mostProfitableDep = ""
     for(let dep in totalSales){
       if(totalSales[dep]>highestSales){
         highestSales = totalSales[dep];
         mostProfitableDep = dep;
          }
      
     }
      
    return mostProfitableDep
    }
    