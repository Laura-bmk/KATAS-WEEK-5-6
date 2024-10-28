// title: Quarter of the year
// link: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) return 1;
   else if (month >= 4 && month <= 6) return 2;
   else if (month >= 7 && month <= 9) return 3;
   else return 4;
 }
