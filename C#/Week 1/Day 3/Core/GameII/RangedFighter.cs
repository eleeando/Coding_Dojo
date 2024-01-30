public class RangedFighter : Enemi
{
    public int Distance { get; set; } 

    static Attack Shoot = new Attack("Shoot", 20);
    static Attack Throw = new Attack("Throw", 15);

    static List<Attack> Ranged = new List<Attack>(){Shoot, Throw};

    public RangedFighter(string name) : base(name, Ranged)
    {
        Distance = 5;
    }

    public override Attack RandomAttack()
    {
        if(Distance<5){
            System.Console.WriteLine("You can't attack the enemy.");
            return null;
        }
        return base.RandomAttack();
        
    }
}