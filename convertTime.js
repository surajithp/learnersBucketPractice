//Given a string representing time in 12 hours format, convert it to 24 hours format

// Example 1:

// Input: 
// "12:10AM"
// "12:33PM"
// "01:59PM"

// Output:
// "00:10"
// "12:33"
// "13:59"


const convertTime = (time)=>{
  let correctTime = ''
  let timeWithOutAMPM = ''
  let isTimeInAM = false
  if(time.includes('PM')){
    isTimeInAM = false
    timeWithOutAMPM = time.replace('PM', '')
  }
  if(time.includes('AM')){
    isTimeInAM = true
    timeWithOutAMPM = time.replace('AM', '')
  }
  const hours = Number(timeWithOutAMPM.split(':')[0])
  const minutes = Number(timeWithOutAMPM.split(':')[1])
  if(isTimeInAM && hours >= 12){
    correctTime = `${hours-12}:${minutes}`
  }
  else if(!isTimeInAM && hours < 12){
    correctTime = `${hours+12}:${minutes}`
  }else{
    correctTime = `${hours}:${minutes}`
  }
}

convertTime("12:10AM")