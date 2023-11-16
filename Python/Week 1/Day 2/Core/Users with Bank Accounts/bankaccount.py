class BankAccount:
    all_instance=[]
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_instance.append(self)
        # don't worry about user info here; we'll involve the User class soon
    
    def deposit(self, amount):
        self.balance = self.balance+amount
        return self
    
    def withdraw(self, amount):
        if self.balance>amount:
            self.balance-=amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance = self.balance - 5
        return self
        
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        print(f"Interesst Rate: {self.int_rate}")
        return self

    def yield_interest(self):
        self.balance = self.balance + self.balance*self.int_rate
        return self
    
    @classmethod
    def all_accounts(cls):
        for account in cls.all_instance:
            print(f"balance: {account.balance} Interest Rate: {account.int_rate}")
            




acc1=BankAccount(0.02,100)
acc2=BankAccount(0.03,500)
acc1.deposit(100).deposit(100).deposit(100).withdraw(150).yield_interest().display_account_info()
acc2.deposit(600).deposit(200).withdraw(50).withdraw(20).withdraw(150).withdraw(70).yield_interest().display_account_info()
BankAccount.all_accounts()
