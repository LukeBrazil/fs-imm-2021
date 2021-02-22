const friends = ["John", "Mary", "Joe", "Frank", "John"];

friends.push("Lady Gaga");
friends.push("Kanye");

for (let index = 0; index < friends.length; index++) {
  console.log(friends[index]);
}

function sumChecker(firstNum, secondNum) {
  let result = firstNum + secondNum;
  if (result <= 80 && result >= 50) {
    return 65;
  } else {
    return 80;
  }
}

console.log(sumChecker(100, 200));

// class BankAccount {
//   constructor(firstName, lastName, balance, status) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.balance = balance;
//     this.status = status;
//   }

//   desposit(number, accountType) {
//     this.balance += number;
//     this.accountType = accountType;
//   }

//   withdraw(number) {
//     this.balance -= number;
//   }
//   newAccount(firstName, lastName, accountType, deposit) {
//     if (deposit < 101) {
//       console.log(`${deposit} is less than the $100 threshold`);
//     }
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.accountType = accountType;
//   }
// }

// let checking = new BankAccount(100);

// checking.desposit(100);

// console.log(checking.balance);

function palindromChecker(word) {
  let reversedWord = word.split("").reverse().join("");
  if (reversedWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromChecker("mom"));

let newFriends = [...new Set(friends)];

console.log(newFriends);

const vowels = ["a", "e", "i", "o", "u"];

function vowelChecker(letter) {
  let lowerChar = letter.toLowerCase();
  return (
    lowerChar === "a" ||
    lowerChar === "e" ||
    lowerChar === "i" ||
    lowerChar === "o" ||
    lowerChar === "u" ||
    false
  );
}

console.log(vowelChecker("a"));

class BankAccount {
    constructor(firstName, lastName, balance, accountType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.balance = balance;
      this.accountType = accountType;
    }
  
    deposit(number, accountType) {
      this.balance += number;
      this.accountType = accountType;
      console.log(
        `${this.firstName} ${this.lastName} has deposited ${number} into your ${this.accountType} account. Balance: ${this.balance}`
      );
    }
  
    withdraw(number, accountType) {
      this.balance -= number;
      if (this.balance < 0) {
  this.balance -= 35
  console.log(`OVERDRAFT! ${this.accountType} has been charged $35. New Balance: $${this.balance}`)}
      this.accountType = accountType;
      console.log(
        `${this.firstName} ${this.lastName} has withdrawn ${number} from your ${accountType} account. Balance: ${this.balance}`
      );
    }
  
    newAccount(firstName, lastName, accountType, deposit) {
      if (deposit < 100) {
        console.log(`${deposit} is less than the $100 threshold`);
      }
      this.firstName = firstName;
      this.lastName = lastName;
      this.accountType = accountType;
      this.status = "OPEN";
    }
  
    transferFunds(amount, type) {
      this.balance -= amount;
      if (type === "savings") {
        savings.balance += amount;
      } else {
        checking.balance += amount;
      }
      console.log(`Trasfering funds from ${this.accountType} to ${type}. `);
    }
  }
  
  let checking = new BankAccount("John", "Mable", 100, "checking");
  let savings = new BankAccount("John", "Mable", 100, "savings");
  

  checking.deposit(100, "checking");
  checking.transferFunds(50, "savings");
  savings.transferFunds(50, 'checking');
  savings.withdraw(5000, 'savings');