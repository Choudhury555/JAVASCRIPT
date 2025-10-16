// Character Classes
console.log(/\d/.test("Room 101"));//true (\d matches any digit (0-9), so "Room 101" contains a digit and returns true.)
console.log(/\D/.test("101"));//false (\D matches any non-digit character, so "101" contains only digits and returns false (because there are no non-digits).)