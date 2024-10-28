// title: Double Char
// link: https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    // con Split divido la cadena en un array y con map creo un nuevo array donde cada caracter (parámetro char) se repite una vez, luego se unen los caracteres duplicados con join.
      return str.split('').map(char => char + char).join('');
    }
    