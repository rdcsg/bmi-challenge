/*  spec/person_spec.js
*/

describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({ height: 185, weight: 85 });
  });


  it("should have weight of 90", function() {
    expect(person.weight).toEqual(85);
  });


  it("should have height of 185", function() {
    expect(person.height).toEqual(185);
  });


});
