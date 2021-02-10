import unittest

class BankAccountTest(unittest.TestCase):

    def test_deposit(self):
        bank_account = BankAccount()
        bank_account.deposit(100)
        self.assertEqual(100, bank_account.balance)

unittest.main()