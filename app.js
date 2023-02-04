//Answer1
let arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
let numbers = [10, 8, 13, 136, 4];

console.log(arr[5 [1]]);

 let result = [];

function extractNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      extractNumbers(arr[i]);
    } else if (numbers.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}

extractNumbers(arr);
console.log(result);


// Answer2
let sentence = ["javascript", "web", "Capacity Bay"];
console.log(`I am a ${sentence[1]} developer at ${sentence[2]} and i love ${sentence[0]}`);


//Answer3
let word = "Generalization";
console.log(word.slice(-4));



// "orange", "apple", "guava", "lemon";
// // Add these strings at the beginning of the array you created above
// "pea", "banana";

// // Add these strings at the end of the array you created above.
// "Avocado", "mango";

//Answers
let arry = ["orange", "apple", "guava", "lemon"];
arry.unshift("pea", "banana");
arry.push("Avocado", "mango");


console.log(arry)
