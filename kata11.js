// title: Vowel Count
// link: https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    // definir las vocales    
    const vowels = 'aeiou'; 
    // Inicializar el contador
        let count = 0; 
    // Itero cada caracter de la cadena
        for (const char of str) { 
    // Compruebo si el caracter es una vocal e incremento el contador
    
            if (vowels.includes(char)) { 
                count++; 
            }
        }
    
        return count; // Devuelvo el recuento total de vocales
    }
    