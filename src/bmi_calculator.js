/*  src/bmi_calculator.js
*/


function() {


};


BMICalculator.prototype.metric_bmi = function(obj) {
  var height = obj.height;
  var weight = obj.weight;

  if (weight > 0 && height > 0 ) {
    var finalBmi = weight / Math.pow((height/100), 2);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  };


  function setBMIMessage (obj, value) {
    switch (obj.bmiValue) {
      case (obj.bmiValue <= 18.5):
        obj.bmiMessage = "Underweight"
        break;
      case (obj.bmiValue > 18.5 && obj.bmiValue <= 25):
        obj.bmiMessage = "Normal"
        break;
      case (obj.bmiValue > 25 && obj.bmiValue <= 30):
        obj.bmiMessage = "Overweight"
        break;
      case (obj.bmiValue > 30):
        obj.bmiMessage = "Obese"
        break;
      default:
        obj.bmiMessage = "Invalid BMI value."
    }

  }




    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight"
    }
  }

}
