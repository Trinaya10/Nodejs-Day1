const { writeFile } = require('node:fs/promises');

async function createandwritefile(curr_date=new Date())
{
  try {
    var curr_date= new Date();
    var file_name={
      date: curr_date.getDate(),
      hours: curr_date.getHours(),
      minutes: curr_date.getMinutes()
    }
    
    await writeFile(`${file_name.date}-${file_name.hours}-${file_name.minutes}`, curr_date.toString())
      
    // Abort the request before the promise settles.
    
  
   
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  } 
}
createandwritefile(new Date())