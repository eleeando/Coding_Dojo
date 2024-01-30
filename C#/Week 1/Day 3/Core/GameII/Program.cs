Attack fireBall = new Attack("Fire Ball",10); 
Attack kick = new("Kick",15);
Attack slap = new("Slap", 25);

List<Attack> attacks = new List<Attack>(){fireBall, kick, slap};

Enemi kiki = new Enemi("Kiki", attacks);
kiki.RandomAttack();
