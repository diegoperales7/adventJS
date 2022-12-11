function countHours(year, holidays) {
  let hours=0;
  let dates=holidays.map(x=>x.concat('/',year));
  dates.forEach(date=>{
    let day= new Date(date);
    let holiday=day.getDay();
    if(holiday>=1&&holiday<=5){
      hours=hours+2;
    }
    });
  return hours;
}
