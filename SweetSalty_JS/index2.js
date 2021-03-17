// Print the numbers 1 to 1000 to the console.
// Print them in groups of 10 per line with a space separating each number.
// When the number is multiple of three, print “sweet” instead of the number on the console.
// If the number is a multiple of five, print “salty” (instead of the number) to the console.
// For numbers which are multiples of three and five, print “sweet’nSalty” to the console (instead of the number).
// After the numbers have all been printed, print out how many sweet’s, how many salty’s, and how many sweet’nSalty’s. These are three separate groups, so sweet’nSalty does not increment sweet or salty (and vice versa).

// declaring all the necesseary variable
sweetCount = 0;
saltyCount = 0;
sweetSaltyCount = 0;
firstDivisble = " Sweet ";
secondDivisble = " Salty ";
firstSecondDivisble = " Sweetn'tSalty ";

// calling the functions
countNumber();
printResult();

// responsible for looping over the number
function countNumber() {
  for (let i = 0; i < 10; i++) {
    for (let y = 0; y < 10; y++) {
      var out = "";
      for (let n = 0; n <= 10; n++) {
        var theNumber = i * 100 + y * 10 + n;
        // checking the constraint if valid
        if (theNumber % 3 == 0 && theNumber % 5 == 0) {
          out += firstSecondDivisble;
          // increment the value to keep track of how many Sweentn Salty are there
          sweetSaltyCount++;
        } else if (theNumber % 3 == 0) {
          out += firstDivisble;
          // increment the value to keep track of how many Sweent are there
          sweetCount++;
        } else if (theNumber % 5 == 0) {
          out += secondDivisble;
          // increment the value to keep track of how many  Salty are there
          saltyCount++;
        } else {
          // printing all the "regular number " if all the condition above are not met
          out += " " + theNumber;
        }
      }
      // printing the value of
      console.log(out);
    }
  }
}
function printResult() {
  console.log(
    " Sweet = " +
      sweetCount +
      " Salty = " +
      saltyCount +
      " Sweetn'Salty = " +
      sweetSaltyCount
  );
}
