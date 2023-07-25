var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

export default function findItemsOver20(itemList){
    var over20=[]
    for (var i=0; i<itemList.length; i++){
        
       if(itemList[i].qty>20){
         over20.push(itemList[i])
         if(!itemList[i]>20){
          return "number not bigger than 20"
         }
          }
        }
      return over20
      
    }