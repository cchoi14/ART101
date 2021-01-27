// How to Build an Algorithm to Solve a Sudoku Game
// 1. Convert the unsolved Sudoku grid into numbers.
//   a. Existing numbers remain the same, with blank spaces becoming 0.
// 2. Check for boxes (3x3), rows, or columns that have exactly 1 missing number (ignore rows marked as solved).
//   a. Fill in the missing number and mark as solved.
// 3. Check for boxes, rows, or columns that have exactly 2 missing numbers (ignore rows marked as solved).
//   a. Figure out what those 2 numbers are.
//   b. Check the boxes, rows, or columns that the blank spaces are in for those 2 numbers.
//     i. If 1 of those numbers is found, fill in that blank space with the other number, fill in the other blank space with that number, and mark as solved.
//    ii. If 0 of those numbers are found, ignore.
//   iii. If 2 numbers are found, exit program, report error.
// 4. Check for boxes, rows, or columns that have exactly 3 missing numbers (ignore rows marked as solved).
//   a. Figure out what those 3 numbers are.
//   b. Check the boxes, rows, or columns that the blank spaces are in for those 3 numbers.
//     i. If 2 of those numbers are found, fill in that blank space with the other number, fill in the other blank space with that number.
//    ii. If 1 of those numbers is found, mark that blank space as ‘[number]-impossible.’
//       1. If another blank space is also marked as ‘[same number]-impossible,’ fill in the remaining, unmarked blank space with that number.
//   iii. If 0 of those numbers are found, ignore.
//    iv. If 3 numbers are found, exit program, report error.
// 5. Repeat from Step 2 until the grid is solved.
//   a. If there are no more boxes, rows, or columns to check and the grid is still unsolved, start again from the top.
//   b. The program only checks boxes, rows, and columns for up to 3 missing numbers and may become stuck if the solution solves a box, row or column that requires 4+ missing numbers.
//   c. A solved grid will have no repeat numbers in each box, row, or column.
//   d. There is only one solution to each sudoku grid. If there is no solution the program will return an error.
