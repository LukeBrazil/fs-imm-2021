

class BankAccount: 
    def __init__(self, account_number, balance): 
        self.account_number = account_number
        self.balance = balance 
    
    def deposit(self, amount): 
        self.balance += amount 
    
    def withdraw(self, amount): 
        self.balance -= amount 

    def transfer(self, amount, destination):
        self.withdraw(amount)
        destination.deposit(amount)

    
checking_account = BankAccount("FSDF345", 100)
checking_account.deposit(50)
print(checking_account.balance)
checking_account.withdraw(20)
print(checking_account.balance)

savings_account = BankAccount("FTREDSDS", 500)
checking_account.transfer(50, savings_account)

print(f"Savings Account Number {savings_account.account_number} - Balance: {savings_account.balance}")

#Checking Account      Savings Account 
#100                     500 

#Transfer 200 from Savings to Checking 
#    - Withdraw 200 from Savings 
#    - Deposit 200 into Checking 
