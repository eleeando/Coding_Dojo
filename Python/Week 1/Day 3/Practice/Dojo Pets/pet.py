class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 100
        self.health = 100
    
    def sleep(self):
        self.energy+=25
    
    def eat(self):
        self.energy+=25
        self.health+=10

    def play(self):
        self.health+=5

    def noise(self):
        if self.type=="dog":
            print("hab hab")
        elif self.type=="cat":
            print("miaw miaw")
        else:
            print("moooo")

