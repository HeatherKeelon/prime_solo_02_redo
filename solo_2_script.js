function Person (name, employNumber, salary, rating) {
  this.name= name;
  this.employNumber= employNumber;
  this.salary= salary;
  this.rating = rating;
};

var atticus = new Person ("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person ("Boo", "11435", "54000", 3);
var scout = new Person ("Scout", "6243", "74750", 5);

var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
  var css=document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "li {list-style-type: none}";
  document.body.appendChild(css);
}

function calculateSTI(object){
  var newObject = {};

  newObject.name = object.name;

  var employeeNumber = object.employNumber;
  var baseSalary = object.salary;
  var reviewScore = object.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.bonusPercent = bonus;
  newObject.newSalary = Math.round(baseSalary * (1.0 + bonus));
  newObject.bonusNumber = Math.round(baseSalary * bonus);
  console.log(newObject.name + " " + newObject.bonusPercent + " " + newObject.newSalary + " " + newObject.bonusNumber);
  return newObject;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}




function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}





function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}





  