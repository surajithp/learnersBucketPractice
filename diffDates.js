// Given wo valid dates as string, return the absolute difference between the two in days.

// Example 1:

// Input: 
// '10/15/2020' //date1
// '12/1/2020' //date2

// Output: 47

const date1 = '10/15/2020'
const date2 = '12/1/2020'


const diffDates = (date1,date2)=>{
  const dateObject1 = new Date(date1);
  const dateObject2 = new Date(date2);
const diffTime = Math.abs(dateObject2 - dateObject1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
return diffDays
}

diffDates(date1,date2)