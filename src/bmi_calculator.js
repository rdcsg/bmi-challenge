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
  }

}
