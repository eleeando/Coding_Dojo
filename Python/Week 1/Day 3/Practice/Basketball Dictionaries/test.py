players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]


#these 3 are just variables they don't have a link between the variables in the 1st array
kevin = {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
}
jason = {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
}
kyrie = {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
}
    




class Player:
    arrNew=[]
    def __init__(self, info):
        self.name = info["name"]
        self.age = info["age"]
        self.position = info["position"]
        self.team = info["team"]
        Player.arrNew.append(self)
    
    # @classmethod
    # def change_tshirt_number (cls, number):
    #     cls.tshirt_number = number

    # @classmethod
    # def all_ages(cls):
    #     sum = 0
    #     for each_instance in cls.arrNew:
    #         sum+=each_instance.age
    #     return sum
    
    @classmethod
    def get_team(cls,team_list):
        





player1=Player(kevin)
player2=Player(jason)
player3=Player(kyrie)
# print(player1.__dict__)

# for container in Player.arrNew:
#     print(container.__dict__)


print(Player.all_ages())  








# for each_dic in players:
#     arrNew.append(Player(each_dic))


# for each_instance in arrNew:              # 'hhh' is just a variable in the class where every time the loop cycles, it takes an item in the arr we p
#     each_instance.name="ele"
#     print(each_instance.__dict__)

# @classmethod




