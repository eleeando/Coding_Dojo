from bankaccount import BankAccount
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    
    def make_deposit(self, amount):
        account = BankAccount (self.int_rate, self.balance)
        return self
    
    def make_withdrawal(self, amount):
        withdraw = BankAccount (self.balance)
        return self
    
    def display_user_balance (self):
        displayer = BankAccount (self.display_account_info)
        return self
    
    @classmethod
    def create_account(cls):
        for accounts in cls.all_instance:
            print(accounts.int_rate, accounts.balance)


        

    account_1=user1(int_rate=0.02, balance=100)
    account_2=user


