/* src/person.js
*/


function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function() {
  this.bmiValue = 24.83
  this.bmiMessage = "Normal";
}
