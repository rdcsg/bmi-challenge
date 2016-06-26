/*   ./src/bmi_calculator.js
*/
function BMICalculator() {
}
BMICalculator.prototype.find_bmi_of = function(obj) {
  var height = obj.height;
  var weight = obj.weight;
  var imperial_toggle = ojb.toggle;
  if (weight > 0 && height > 0 ) {
    var finalBmi = weight / Math.pow((height/100), 2);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
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
    case (obj.value <= 18.5):
      obj.bmiMessage = "Underweight";
      break;
    case (obj.value > 18.5 && obj.value <= 25):
      obj.bmiMessage = "Normal";
      break;
    case (obj.value > 25 && obj.value <= 30):
      obj.bmiMessage = "Overweight";
      break;
    case (obj.value > 30):
      obj.bmiMessage = "Obese";
      break;
    default:
      obj.bmiMessage = "Invalid BMI value.";
  }
}*/
