from bank_account import BankAccount

import unittest

class BankAccountTests(unittest.TestCase):

    def setUp(self):
        self.bank_account = BankAccount()

    def test_deposit(self):
        # bank_account = BankAccount()
        self.bank_account.deposit(100)
        self.assertEqual(100, self.bank_account.balance)

    def test_withdraw(self):
        # bank_account = BankAccount()
        self.bank_account.deposit(100)
        self.bank_account.withdraw(50)
        self.assertEqual(50, self.bank_account.balance)

    def tearDown(self):
        print('Tear Down!')
        
unittest.main()