/*  ./spec/person_spec.js
*/

describe("Person", function() {
  //var person;

  beforeEach(function() {
    var person = new Person({ weight: 85, height: 185 });
  });


  it("should have weight of 85", function() {
    expect(person.weight).toEqual(85);
  });


  it("should have height of 185", function() {
    expect(person.height).toEqual(185);
  });


  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.find_bmi_of).toEqual(24.84);
  });


  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Normal");
  });


});
