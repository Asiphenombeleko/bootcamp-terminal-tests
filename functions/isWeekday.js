export default function isWeekday(day){
    
  if(day){
  
  return day.startsWith("Mon") || day.startsWith("Tues") || day.startsWith("Wed") || day.startsWith("Fri") || day.startsWith("Thurs");

  }
  return "no specific day was found"

}
