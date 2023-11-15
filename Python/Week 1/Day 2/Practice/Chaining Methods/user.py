class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"First Name: {self.first_name}")
        print(f"Last Name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Rewards Member: {self.is_rewards_member}")
        print(f"Gold Card: {self.gold_card_points}")
        return(self)
    
    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member = True
            self.gold_card_points = 200
            return False
        else :
            print("User already a member")
            return True

    
    
    
    
    def spend_points(self,amount):
        if self.gold_card_points<amount:
            print("You don't have enough points")
        elif self.gold_card_points==amount:
            print("Your points will be 0")
        else:
            print("You have points")
        return self
    




user1=User("elee", "andolsi", "lili@gmail.com",31)
user1.enroll()
user1.display_info()
user1.spend_points(5300).display_info()


