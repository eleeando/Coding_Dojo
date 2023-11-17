class Player:
    def __init__(self, info):
        self.name = info["name"]
        self.age = info["age"]
        self.position = info["position"]
        self.team = info["team"]

kevin={
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    }
jason=  {
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
kevin=Player(kevin)
jason=Player(jason)
arr=[Player(info) for players in infos ]
 
a+=1
