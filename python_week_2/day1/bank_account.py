class Bank_Account:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
    
    def withdraw(self, amount):
        self.balance -= amount
    
    def transfer_funds(self, account, amount):
        self.withdraw(amount)
        account.deposit(amount)

    
checking_account = Bank_Account('AF4560', 60)
savings_account = Bank_Account('AF7600', 50)

checking_account.deposit(560)
checking_account.withdraw(100)
checking_account.transfer_funds(savings_account, 600)

print(checking_account.balance)