
class Ninja:
    def __init__(self, first_name, last_name, treats,pet_food, pet):            #__init__ : is a constructure, we can't put instance without it
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    
    def walk(self):
        self.pet.play()
        return self

    def feed(self):
        self.pet.eat()
        return self

    def bathe(self):
        self.pet.noise()
        return self