/*    ./spec/bmi_calculator_spec.js
*/
describe("BMICalculator", function() {
  //var calculator;   //this value is declared in the beforeEach
  //var person;       //this value is declared in the beforeEach

  beforeEach(function() {
    person = new Person({weight: 187, height: 72/*6*/, toggle: "true"});
    calculator = new BMICalculator();
  });


  it("checks for the imperial toggle switch that the calculator sees and gets its value", function() {
    calculator.find_bmi_of(person);
    expect(person.toggle).toEqual("true");
  });


  it("calculates BMI using the imperial method when imperial is chosen", function() {
    calculator.find_bmi_of(person);
    expect(person.bmiValue).toEqual(25.36);
  });


  // metric bmi only test below
  it("calculates BMI for a person using the metric method", function () {
    person = new Person({ weight: 85, height: 185, toggle: "false" });
    calculator.find_bmi_of(person);
    expect(person.bmiValue).toEqual(24.84);
  });


  // tests for in depth testing below, probably necessary when refactoring
  /*it("transforms foot to inches when imperial is chosen", function() {
    person.toggle = true;
    calculator.find_bmi_of(person);
    expect(person.calc_height).toEqual(72);
  });


  it("transforms assigns a weight factor of 703 when imperial is chosen", function() {
    person.toggle = true;
    calculator.find_bmi_of(person);
    expect(person.toggle_factor).toEqual(703);
  });


  it("transforms assigns a height divisor of 1 when imperial is chosen", function() {
    person.toggle = true;
    calculator.find_bmi_of(person);
    expect(person.height_divisor).toEqual(703);
  });*/


});



/*  the following are stories that describe what happens when a user wants
 *  to calculate their BMI with imperial values.
 *
 *  5. bmi_calculator.js
 *  the same calculation method will be used for both metric and imperial
 *  calculations and therefore the imperial values will be accepted and used
 *  without exception and fuss, but make sure that the toggle switch value is
 *  passed to the calculation, check if it's there and what it is.
 *  remember that the user values are in whole pounds and inches.
 *
 *
 *  6. bmi_calculator.js
 *  if the switch is toggled to imperial, the imperial calculation method will
 *  assign a factor of 703 (otherwise set to equal 1) to be multiplied with
 *  the weight in pounds during the actual BMI calculation.
 *  Example: bmiValue = weight * 703 / height^2
 *  expect bmiValue to become 25,358 = 25,36 - a float
 *  reference: http://www.calcbmi.com/
 *
 */
