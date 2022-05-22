const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i =0
console.log("<While loop>")
while(i<ingredients.length){
  console.log(ingredients[i]);
  i +=1

}
// Write a for loop that prints out the contents of ingredients:

console.log("\n<For loop>")
for(let x of ingredients){
  console.log(x);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n<Backwards Loop>")
let b = ingredients.length - 1
while(b >= 0 ){
  console.log(ingredients[b]);
  b -= 1;
}