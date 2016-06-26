/*  ./spec/person_spec.js
*/

describe("Person", function() {
  //var person;   // this var is declared in the beforeEach below

  beforeEach(function() {
    person = new Person({ weight: 187, height: 6, toggle: true });
  });


  it("should have the imperial toggle switch value of true", function() {
    expect(person.toggle).toEqual(true);
  });


  it("should have weight of 187", function() {
    expect(person.weight).toEqual(187);
  });


  it("should have height of 6", function() {
    expect(person.height).toEqual(6);
  });


  // two metric BMI calc specs below
  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(51944.44);
  });


  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Obese");
  });


  // two imperial BMI calc specs below
  /*it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(25.36);
  });


  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight");
  });*/



/*  the following are stories that describe what happens when a user wants
 *  to calculate their BMI with imperial values.
 *
 *  before adding the specs below, make sure that the tests above pass with
 *  the new values we will use for the imperial calculation.
 *  use {weight: 187, height: 6}
 *  make all the tests pass before adding more specs.
 *  with the current calc for metric BMI it should give the output:
 *  "Your BMI is 51944.44 and you are Obese"
 *
 *  1. index.html
 *  in the gui a user will have the option to use the preselected metric method
 *  or to toggle a switch in order to use the imperial method instead
 *
 *
 *  2. index.html
 *  after choosing the imperial method a user will use the same input fields
 *  as for the metric calculation to enter their weight and height.
 *  the height value will be formatted ' '5"4' ' to describe foot and inches
 *  remember to accept both as strings
 *  use {weight: 187, height: 6}
 *
 *
 *  3. person.js
 *  before the calculation method is used, the toggle switch will be a signal
 *  that the special formatting of the height value needs to be detected and
 *  split into two values (use regexp) and converted to integers
 *
 *
 *  4. person.js
 *  then the split height value will be transformed to inches (12 inches in a foot),
 *  so that the values sent to the BMI calculation are sent as only whole pounds
 *  and inches. use {weight: 187, height: 72}
 *
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
 *
 *  7. index.html
 *  when the switch is toggled the placeholders texts in the gui will change
 *  to reflect the change to imperial by instructing how to enter the height
 *  correctly in foot and inches
 *
*/


});
