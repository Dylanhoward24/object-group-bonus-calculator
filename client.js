const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusInformation(array = employees){
  console.log("Running bonusCalculator");
  // loop through employee array
  for (let employee of employees){
    // declare new object
    let employeeBonusInfo = {
      name: employee.name,
      //this equation turns it to a percentage
      bonusPercentage: bonusCalculator(employee) * 100, 
      //this equation adds the bonus to the original salary
      totalCompensation: (bonusCalculator(employee) + 1) * employee.annualSalary,
      totalBonus: Math.round((bonusCalculator(employee) * employee.annualSalary))
    }
    // log to console each value of new object
    console.log(
      `Name: ${employeeBonusInfo.name}
      Bonus Percentage: ${employeeBonusInfo.bonusPercentage}%
      Total Compensation: $${employeeBonusInfo.totalCompensation}
      Total Bonus: $${employeeBonusInfo.totalBonus}`)
  }
}

//run function
bonusInformation();


function bonusCalculator(employee) {
  let reviewBonus = 0;
  // create switch function to evaluate review rating
  switch (employee.reviewRating){
    // any rating 2 or below should return 0 as no bonus can be given.
    case 1: reviewBonus = 0;
      break;
    case 2: reviewBonus = 0;
      break;
    case 3: reviewBonus = employee.annualSalary*0.04;
      break;
    case 4: reviewBonus = employee.annualSalary*0.06;
      break;
    case 5: reviewBonus = employee.annualSalary*0.10;
      break;
  } //end switch
  //determine if employee number is 4 digits
  if (employee.employeeNumber.toString().length === 4){
    reviewBonus += employee.annualSalary*0.05;
  } //end if
  //determine if annual salary is greater than 65,000
  if (employee.annualSalary > 65000){
    reviewBonus -= reviewBonus*0.01;
  } //end if
  //make sure bonus does not exceed 13 percent or fall below 0 percent
  if (reviewBonus > (employee.annualSalary*0.13)){
    reviewBonus = (employee.annualSalary*0.13);
  }else if (reviewBonus < 0){
    reviewBonus = 0;
  } //end if-else
  let reviewPercent = reviewBonus/employee.annualSalary;
  return reviewPercent;
} //end bonusCalculator

console.log('testing Bonus Calculator on employees[0] should be 0.09:', bonusCalculator(employees[0]));
console.log('testing Bonus Calculator on employees[1]should be 0.06:', bonusCalculator(employees[1]));
console.log('testing Bonus Calculator on employees[2] should be 0.13:', bonusCalculator(employees[2]));
console.log('testing Bonus Calculator on employees[3] should be 0:', bonusCalculator(employees[3]));
console.log('testing Bonus Calculator on employees[4] should be 0:', bonusCalculator(employees[4]));
