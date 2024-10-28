// title: Training JS #18: Methods of String object--concat() split() and its good friend join()
// link: https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {

    // Dividir la cadena en palabras
    const palabras = string.split(' ');

    // Dividir cada palabra en caracteres y unirlos con el separador
    const palabrasModificadas = palabras.map(palabras => palabras.split('').join(separator));

    // Unir las palabras modificadas con espacios
    return palabrasModificadas.join(' ');
}

