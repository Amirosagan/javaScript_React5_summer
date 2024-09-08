// TODO: day2 task1 

var arre = [1,2,3];
var arre2 = [4,5,6];
var arre3;

arre3 = arre.push(arre2); // push method returns the length of the array and modifies the original array

document.write(arre3);
document.write("<br>");
document.write(arre);


// TODO: day2 task2 diffreent between splice and slice


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let spliceArr = arr.splice(2, 3);

console.log(spliceArr); // [3, 4, 5]

console.log(arr); // [1, 2, 6, 7, 8, 9, 10]
document.write(arr);
document.write("<br>");
document.write(spliceArr);

let sliceArr = arr.slice(2, 5);

document.write("<br>");
console.log(sliceArr); // [6, 7, 8]
document.write(sliceArr);


// TODO: day2 task3

var longText = prompt("Enter a long text");

var searchWord = prompt("Enter a word to search");

searchWord = searchWord.trim();

var index = longText.indexOf(searchWord);

if(index != -1){
  alert("The word is found in the text in the index " + index);
}else{
  alert("The word is not found in the text");
}

// TODO: day2 task4

Array.prototype.IndexOfAll = function(searchElement) {
  var index = [];
  for(var i = 0; i < this.length; i++){
    if(this[i] === searchElement){
      index.push(i);
    }
  }
  return index;
}

var arrToTest = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

var searchElement = 5;

var index = arr.IndexOfAll(searchElement);

document.write(index);

// TODO: day2 task5

var enumArr = []

for(var i = 0; i < 5; i++){
  enumArr.push(Number(prompt("Enter a number")));
}

var descArr = enumArr.sort();

var ascArr = descArr.reverse();

document.write("The array in descending order: " + descArr);

document.write("<br>");

document.write("The array in ascending order: " + ascArr);

document.write("<br>");

document.write("The array in original order: " + enumArr);












