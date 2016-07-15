/*    ./spec/convert_string_to_inches_spec.js
*/

describe("StringToInchesConverter", function() {

  beforeEach(function() {
    person.height = "6\"4\'";
    input = person.height;
  });


  it("determine if the input represents a number (then assume inches) or a string", function() {
    expect(is_inches(input)).toEqual(false);
  });


  /*it("determine if the string input is both foot and inches", function() {
    expect(is_foot_and_inch(input)).toEqual(true);
  });


  it("find the number of foot", function() {
    expect(number_of_foot(input)).toEqual(6);
  });


  it("find the number of inches", function() {
    expect(number_of_inches(input)).toEqual(4);
  });


  it("return the total number of inches", function() {
    expect(height_in_inches(input)).toEqual(76);
  });*/


});
