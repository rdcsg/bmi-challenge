/*   ./src/person.js
*/


function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.toggle = attr.toggle;
}


Person.prototype.calculate_bmi = function() {
  //this.bmiValue = 51944.44;
  //this.bmiMessage = "Obese";
  calculator = new BMICalculator();
  calculator.find_bmi_of(this);
};
