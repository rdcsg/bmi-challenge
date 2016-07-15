/*   ./src/person.js
      Works together with ./src/bmi_calculator.js
*/


function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.toggle = attr.toggle;
}


Person.prototype.calculate_bmi = function() {
  //this.bmiValue = 51944.44;
  //this.bmiMessage = "Obese";

  //this.height = StringToInchesConverter(this.height);

  calculator = new BMICalculator();
  calculator.find_bmi_of(this);
};
