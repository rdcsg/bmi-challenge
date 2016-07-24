/*   ./spec/bmi_ui_spec.js
*/
describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#weight').val('85');
        $('#height').val('185');
        $('#toggle').val('false');
        $('#calculate').trigger('click');
    });

    it("displays metric BMI Value", function() {
        expect($('#display_value').text()).toBe('Your BMI is 24.84');
    });

    it("displays metric BMI Message", function() {
        expect($('#display_message').text()).toBe('and you are Normal');
    });



    it("displays imperial BMI Value", function() {
        $('#weight').val('187');
        $('#height').val('72');
        $('#toggle').val('true');
        $('#calculate').trigger('click');
        expect($('#display_value').text()).toBe('Your BMI is 25.36');
    });

    it("displays imperial BMI Message", function() {
        $('#weight').val('187');
        $('#height').val('72');
        $('#toggle').val('true');
        expect($('#display_message').text()).toBe('and you are Overweight');
    });
});
