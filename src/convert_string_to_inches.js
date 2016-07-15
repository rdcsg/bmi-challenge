/*   ./src/convert_string_to_inches.js
*/

function StringToInchesConverter(string) {
  var is_only_inches = true;
  input ="6\"4\'";  // = string;
  position = input.search(/\D/);
  if (position >= 0) is_only_inches = false;

  
}


/*

StringToInchesConverter.prototype.height_in_inches = function () {

};

*/
