﻿using System;

// Print the numbers 1 to 1000 to the console.
// Print them in groups of 10 per line with a space separating each number.
// When the number is multiple of three, print “sweet” instead of the number on the console.
// If the number is a multiple of five, print “salty” (instead of the number) to the console.
// For numbers which are multiples of three and five, print “sweet’nSalty” to the console (instead of the number).
// After the numbers have all been printed, print out how many sweet’s, how many salty’s, and how many sweet’nSalty’s. These are three separate groups, so sweet’nSalty does not increment sweet or salty (and vice versa).

namespace sweet_salty{
    
    class Program {
        // declaring variable in the class 
        static int sweetCount = 0;
        static int saltyCount = 0;
        static int sweetSaltyCount = 0;
        static string firstDivisble = " Sweet ";
        static string secondDivisble = " Salty ";
        static string firstSecondDivisble = " Sweetn'tSalty ";
        static void Main(string[] args){
            // counting from 1 to 1000 and checking the conditions
            countNumber();
            // printing the results 
            printResult();

        }
        // looping over the number from 1 to 1000
        static void countNumber(){
            for(int i = 0; i < 10; i++){
                 for (int y = 0; y < 10; y++){
                         for (int n = 0; n <= 10; n++){
                            var theNumber = i*100+ y*10 + n;
                              // first check with 3 and 5
                                if(theNumber % 3 == 0 && theNumber % 5 == 0){
                                    System.Console.Write(firstSecondDivisble);
                                        // each time we increment the value 
                                        sweetSaltyCount++;
                                    // second check with 3 
                                } else if (theNumber % 3 == 0){
                                        System.Console.Write(firstDivisble);
                                        // increment the value
                                        sweetCount++;
                                    // third check with 5
                                } else if (theNumber % 5 == 0){
                                        System.Console.Write(secondDivisble);
                                        // increment the value 
                                        saltyCount++;
                                    // if none of the condition above resulted to true
                                } else {
                                    System.Console.Write(" "+theNumber+" ");
                                }

                               }
                        System.Console.WriteLine();
                  }
             }
        }
        
        static void printResult(){
            System.Console.WriteLine(" Sweet = "+ sweetCount + " Salty = "+ saltyCount + " Sweetn'Salty = "+ sweetSaltyCount );
        }
    }
}
