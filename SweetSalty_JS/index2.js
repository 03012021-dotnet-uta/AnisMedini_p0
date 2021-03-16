// Print the numbers 1 to 1000 to the console.
// Print them in groups of 10 per line with a space separating each number.
// When the number is multiple of three, print “sweet” instead of the number on the console.
// If the number is a multiple of five, print “salty” (instead of the number) to the console.
// For numbers which are multiples of three and five, print “sweet’nSalty” to the console (instead of the number).
// After the numbers have all been printed, print out how many sweet’s, how many salty’s, and how many sweet’nSalty’s. These are three separate groups, so sweet’nSalty does not increment sweet or salty (and vice versa).


// declare some variables
sweetCount = 0;
saltyCount = 0;
sweetSaltyCount = 0;
firstDivisble = " Sweet ";
secondDivisble = " Salty ";
firstSecondDivisble = " Sweetn'tSalty ";

// calling the methode to iterate over the number 
countNumber();
// calling the methode to print 
printResult();


function countNumber() {
  // for loop from 1 to 1000
  for (let i = 0; i < 1000; i++) {
    // checking if the condition is true
    if (i % 3 == 0 && i % 5 == 0) {
      // if true we print 
      console.log(firstSecondDivisble);
      // and increment
      sweetSaltyCount++;
      // second condition 
    } else if (i % 3 == 0) {
      // print the value if true
      console.log(firstDivisble);
      // increment the value
      sweetCount++;
      // third condition if true
    } else if (i % 5 == 0) {
      // print the value if true
      console.log(secondDivisble);
      // increment the value
      saltyCount++;
      // if none of the condition above are true we print the value of i
    } else {
      console.log(" " + i + " ");
    }
  }
}

function printResult() {
  // printing the value of the incremented value declared above 
  console.log(
    " Sweet = " +
      sweetCount +
      " Salty = " +
      saltyCount +
      " Sweetn'Salty = " +
      sweetSaltyCount
  );
}
