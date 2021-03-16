// Print the numbers 1 to 1000 to the console.
// Print them in groups of 10 per line with a space separating each number.
// When the number is multiple of three, print “sweet” instead of the number on the console.
// If the number is a multiple of five, print “salty” (instead of the number) to the console.
// For numbers which are multiples of three and five, print “sweet’nSalty” to the console (instead of the number).
// After the numbers have all been printed, print out how many sweet’s, how many salty’s, and how many sweet’nSalty’s. These are three separate groups, so sweet’nSalty does not increment sweet or salty (and vice versa).

sweetCount = 0;
saltyCount = 0;
sweetSaltyCount = 0;
firstDivisble = " Sweet ";
secondDivisble = " Salty ";
firstSecondDivisble = " Sweetn'tSalty ";

countNumber();
printResult();

function countNumber() {
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(firstSecondDivisble);
      sweetSaltyCount++;
    } else if (i % 3 == 0) {
      console.log(firstDivisble);
      sweetCount++;
    } else if (i % 5 == 0) {
      console.log(secondDivisble);
      saltyCount++;
    } else {
      console.log(" " + i + " ");
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
