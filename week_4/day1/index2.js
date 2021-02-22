// Assignment - JavaScript Exercises
// Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

function palindromeValidator(word) {

    let newWord = word.toLowerCase().split('').reverse().join('')
    if (newWord === word) {
        return true
    } else {
        return false
    }
    
}

console.log(palindromeValidator('racecar'))

// Create an app which removes duplicates from an array

let array = ["John","Mary", "Alex", "Steve", "Mary", "John"]

function dupeArray(array) {
    let uniqueArray = [...new Set(array)]
    console.log(uniqueArray)
}

function uniqueArray(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            continue
        } else {
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

dupeArray(array)

uniqueArray(array)
// Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 

// Result should be: ["John","Mary","Alex","Steve"] 
// Create an app which returns true/false depending on if the item is in the array

function dupeChecker(item) {
    if (array.includes(item)) {
        return true
    } else {
        return false
    }
}

console.log(dupeChecker('Kanye'))


// Create an app which finds the largest number in an array

let numberArray = [90, 2, 54, 67, 11, 25, 111, 95, 31, 22]

function largestNumber(numberArray) {
    numberArray.sort((a, b) => b - a)
    return numberArray[0]
}

console.log(largestNumber(numberArray))

// Create an app which finds the smallest number in an array

function smallestNumber(numberArray) {
    numberArray.sort((a, b) => a - b)
    return numberArray[0]
}

console.log(smallestNumber(numberArray))

// Create FizzBuzz app

function fizzBuzz() {
    for(let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FIZZBUZZ')
        } else if (i % 3 === 0) {
            console.log('FIZZ')
        } else if (i % 5 === 0) {
            console.log('BUZZ')
        } else {
            console.log(i)
        }

    }
}

// fizzBuzz()
// Create an app which determines whether the number is even or odd.

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return true
    }
    return false
}

console.log(evenOrOdd(25))

// Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.

const formatArray = [3,4,56,7,8,1]

function arrayFormat(formatArray) {
    let ascendingArray = formatArray.sort((a, b) => a - b)
    let descendingArray = formatArray.sort((a, b) => b - a)
    console.log(ascendingArray)
    console.log(descendingArray)
    
}

console.log(arrayFormat(formatArray))



// In this assignment you are going to test your knowledge of class composition. Your task is to create a class which represent a "Bank Account". The Bank Account will have the following properties.

// Bank Account:

// - First Name

// - Last Name

// - Middle Name

// - Account Type 

// - Balance 

// - Status (Opened/Closed/Freeze) 
// Here are the features that needs to be implement:

// - A user should be able to open a bank account provided they have the initial balance of $100

// - User should be able to transfer money from one bank account to another  

// - A user should be able to withdraw money from the bank account 

// - The app should charge $35 fees if the bank account is below $0

class BankAccount {
    constructor(firstName, lastName, middleName, balance) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.balance = balance
    }

    deposit(amount, accountType) {
        this.balance += amount
        this.accountType = accountType
        console.log(`You have deposited $${amount} into your ${accountType} account.`)
    }

    withdraw(amount, accountType) {
        this.balance -= amount
        this.accountType = accountType
        if (this.balance < 0) {
            this.balance -= 35
            console.log(`OVERDRAFT! You are being charged $35. New Balance: ${this.balance}`)
        }
    }
    newAccount(accountType, amount) {
        if (amount < 100) {
            console.log(`ERROR! You must deposited at least $100`)
        } else {
            this.accountType = accountType
            this.status = 'OPEN'
            console.log(`SUCCESS! Thank you Mr. or Mrs. ${this.lastName}. Welcome to your new ${accountType} account.`)
        }

    }
    trasferFunds(amount, accountType) {
        this.balance -= amount
        if (accountType === 'savings') {
            savings.balance += amount
        } else {
            checking.balance += amount
        }
        console.log(`Transfering funds from ${this.accountType} to ${accountType}`)
    }
    checkBalance(accountType) {
        this.accountType = accountType
        return this.balance
    }
}

let johnsAccount = new BankAccount('John', 'Mable', 'Dorothy', 100)
let kanyesAccount = new BankAccount('Kanye', 'West', 'Allen', 100)

johnsAccount.newAccount('checking', 101)
johnsAccount.newAccount('savings', 101)
kanyesAccount.newAccount('savings', 101)
kanyesAccount.newAccount('checking', 101)
kanyesAccount.transferFunds(24, 'checking')
console.log(kanyesAccount.checkBalance('checking'))