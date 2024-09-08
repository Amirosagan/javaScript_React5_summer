// TODO: first Task undifined mean that the variable is not defined yet or its not pinting to any value its like a box with no value inside it
// null mean that the variable is defined but it has no value and (null) it self its a value

var namee;

console.log(typeof(namee)); // Output: undefined

var age = null;

console.log(age); // Output: null



// TODO: 1.2  

var sum = 0;

while (true) {
   var num = Number(prompt("Enter number to add to sum if you want to stop type 0: "));

  if (typeof(num) != "number") {
    alert("Please enter a valid number");
    continue;
  }

  if (num == 0 && sum > 100) {
    break;
  }

  sum += num;
}

alert("The sum of the numbers you entered is: " + sum);


// TODO: 2.1

var s = prompt("Enter your string: ");

var countOfE = 0;

for (var i = 0; i < s.length; i++) {
  if (s[i] == "e") {
    countOfE++;
  }
}

alert("The count of e in the string is: " + countOfE);

// TODO: 2.2


s = prompt("Enter your string to check its plandrome: ");

var isCaseSensitivity = confirm("Do you want to check the string with case sensitivity?");

for (var i = 0; i < s.length / 2; i++) {
  if (isCaseSensitivity) {
    if (s[i] != s[s.length - i - 1]) {
      alert("The string is not a palindrome");
      break;
    }
  } else {
    if (s[i].toLowerCase() != s[s.length - i - 1].toLowerCase()) {
      alert("The string is not a palindrome");
      break;
    }
  }
}

// TODO: 1.1

var sh = (prompt("Enter the string to show in Headers: "));

for (var i = 1; i <= 6; i++) {
  var node = document.createElement("H" + i);
  var textnode = document.createTextNode(sh);
  node.appendChild(textnode);
  document.body.appendChild(node);
}
