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

function bonusInformation(employees){
  console.log("Running bonusCalculator");
  for (let employee of employees){
    let employeeBonus = {
      name: employee.name,
      bonusPercentage: bonusCalculator(employee) * 100, 
      totalCompensation: (bonusCalculator(employee) + 1) * employee.annualSalary,
    }
  }
}
console.log();

function bonusCalculator(employee) {
  let reviewBonus = 0;
  switch (employee.reviewRating){
    case 2: reviewBonus = employee.annualSalary;
      break;
    case 3: reviewBonus = employee.annualSalary*0.04;
      break;
    case 4: reviewBonus = employee.annualSalary*0.06;
      break;
    case 5: reviewBonus = employee.annualSalary*0.10;
      break;
  } //end switch
  if (employee.employeeNumber.toString().length === 4){
    reviewBonus += employee.annualSalary*0.05;
  } //end if
  if (employee.annualSalary > 65000){
    reviewBonus -= reviewBonus*0.01;
  } //end if
  if (reviewBonus > (employee.annualSalary*0.13)){
    reviewBonus = (employee.annualSalary*0.13);
  }else if (reviewBonus < 0){
    reviewBonus = 0;
  } //end if-else
  let reviewPercent = reviewBonus/employee.annualSalary;
  return reviewPercent;
} //end bonusCalculator

function totalCompensationCalculator(employee){
  bonusCalculator(employee) // returns string '9%'
}
console.log('testing Bonus Calculator should be .09', bonusCalculator(employees[0]));
