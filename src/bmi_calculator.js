/*   ./src/bmi_calculator.js
     Is called by ./src/person.js
*/


function BMICalculator() {
}


BMICalculator.prototype.find_bmi_of = function(obj) {
  var height = person.height;
  var weight = person.weight;
  var toggle = person.toggle;

  if (weight > 0 && height > 0 ) {
    var calc_height = 0;
    var toggle_factor = 0;
    var height_divisor = 0;

    if ( toggle === true ) {
      calc_height = height;
      //calc_height = height * 12;  //use this when converting from foot to inches
      toggle_factor = 703;
      height_divisor = 1;
    }
    if ( toggle === false ) {
      calc_height = height;
      toggle_factor = 1;
      height_divisor = 100;
    }
    var finalBmi = weight * toggle_factor / Math.pow((calc_height/height_divisor), 2);
    //console.log(finalBmi);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    //console.log(obj.bmiValue);
    setBMIMessage(obj);
  }
};


function setBMIMessage (obj, value) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese";
  }
}


/*function setBMIMessage (obj, value) {
  switch (obj.value) {
    case (obj.value < 18.5):
      obj.bmiMessage = "Underweight";
      break;
    case (obj.value >= 18.5 && obj.value < 25):
      obj.bmiMessage = "Normal";
      break;
    case (obj.value >= 25 && obj.value < 30):
      obj.bmiMessage = "Overweight";
      break;
    case (obj.value >= 30):
      obj.bmiMessage = "Obese";
      break;
    default:
      obj.bmiMessage = "Invalid BMI value.";
  }
}*/
