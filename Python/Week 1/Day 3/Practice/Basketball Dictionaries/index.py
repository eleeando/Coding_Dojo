class Voiture:
    # !=== Constructor
    def __init__(self, p_color, p_model, p_vitesse=0):
        self.color = p_color
        self.model = p_model
        self.vitesse = p_vitesse

    def accelerer(self):
        self.vitesse += 10
        return self
    def freiner(self):
        self.vitesse -= 5


#! creation des objets
voiture_1 = Voiture("bleu", "clio", 50)
voiture_2 = Voiture("red", "BM")   


print(voiture_1.color)
print(voiture_1.model)
print(voiture_1.vitesse)
print(voiture_2.color)
print(voiture_2.model)
print(voiture_2.vitesse)