from pet import Pet

class Cat(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "cat", "tricks")
    

bouha=Cat("bouha","play")
bouha.noise()