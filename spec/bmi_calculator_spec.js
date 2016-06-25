/*    ./spec/bmi_calculator_spec.js
*/
describe("BMICalculator", function() {
  var bmi_calculator;
  var person;
  beforeEach(function() {
    person = new Person({weight: 187, height: 6});
    calculator = new BMICalculator();
  });
  it("calculates BMI for a person using the metric method", function () {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(51944.44);
  });
});
