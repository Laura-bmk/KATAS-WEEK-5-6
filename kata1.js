// title: Number of People in the Bus
// link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
    // personas que hay en el bondi
   let totalPeople = 0; 
  // Recorrer las paradas del bondi 
  for (let i = 0; i < busStops.length; i++) { 
  // Sumar y restar las personas que suben y que bajan en las paradas
   totalPeople += busStops[i][0] - busStops[i][1]; } 
  // Nunca puede dar número negativo 
  return totalPeople >= 0 ?  totalPeople : 0; 
  }
  