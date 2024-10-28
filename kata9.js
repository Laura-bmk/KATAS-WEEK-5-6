// title: DNA to RNA Conversion
// link: https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    let rna = ''; // creo cadena vacía para el ARN
  
      for (let i = 0; i < dna.length; i++) {
          if (dna[i] === 'T') {
              rna += 'U'; // Reemplazo'T' por 'U'
          } else {
              rna += dna[i]; // Agrego el carácter original si no es 'T'
          }
      }
  
      return rna; // Devuelve la cadena de ARN
  }
  
