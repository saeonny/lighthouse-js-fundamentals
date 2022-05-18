const isEven = function(num){
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log("ten is even =" + tenIsEven);
console.log("eleven is even ="+ elevenIsEven);