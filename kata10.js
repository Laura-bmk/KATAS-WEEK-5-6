// title: Sum of integers in string
// link: https://www.codewars.com/kata/598f76a44f613e0e0b000026


function sumOfIntegersInString(s) {
    const numbers = s.match(/\d+/g); // Busca grupos de numeros
      if (numbers) {
          // Convertir los números encontrados a enteros y sumarlos
          return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
      }
      return 0; // Retorna 0 si no hay números en la cadena
  }
  