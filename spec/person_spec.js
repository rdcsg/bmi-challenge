/*  ./spec/person_spec.js
*/

describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({ weight: 85, height: 185 });
  });


  it("should have weight of 85", function() {
    expect(person.weight).toEqual(85);
  });


  it("should have height of 185", function() {
    expect(person.height).toEqual(185);
  });


  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(24.84);
  });


  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Normal");
  });



/*  the following are stories that describe what happens when a user wants
 *  to calculate their BMI with imperial values.
 *
 *  1.
 *  in the gui a user will have the option to use the preselected metric method
 *  or to toggle a switch in order to use the imperial method instead
 *
 *
 *  2.
 *  after choosing the imperial method a user will use the same input fields
 *  as for the metric calculation to enter their weight and height.
 *  the height value will be formatted ' '5"4' ' to describe foot and inches
 *
 *
 *  3.
 *  before the calculation method is used, the toggle switch will be a signal
 *  that the special formatting of the height value needs to be detected and
 *  split into two values (use regexp)
 *
 *
 *  4.
 *  then the split height value will be transformed to inches (12 inches in a foot),
 *  so that the values sent to the BMI calculation are in only pounds and inches
 *
 *
 *  5.
 *  the same calculation method will be used for both metric and imperial
 *  calculations and therefore the imperial values will be accepted and used.
 *  (remember they are in pounds and inches)
 *
 *
 *  6.
 *  if the switch is toggled to imperial, the imperial calculation method will
 *  assign a factor of 703 to be multiplied with the weight in pounds during the
 *  actual BMI calculation. Example: bmiValue = weight * 703 / height^2
 *  reference: http://www.calcbmi.com/
 *
 *
 *  7.
 *  when the switch is toggled the placeholders texts in the gui will change
 *  to reflect the change to imperial by instructing how to enter the height
 *  correctly in foot and inches
 *
*/


});
