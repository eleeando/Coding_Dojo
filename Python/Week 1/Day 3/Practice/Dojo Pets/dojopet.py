from ninja import Ninja
from pet import Pet


foucha=Pet("foucha", "cat", "jumping")  #we call this instance of name:foucha, type:cat, tricks:jumping
lili=Ninja("lili", "ando", "love", "eggs", foucha)


lili.feed().walk().bathe()


# print(lili.pet.health)
# print(lili.pet.energy)


