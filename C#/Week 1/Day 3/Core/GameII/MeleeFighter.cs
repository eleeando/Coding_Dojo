public class MeleeFighter : Enemi
{
    static Random Rand = new Random();
    public int Health { get; set; }
    static Attack Punch=new Attack("Punch", 20);
    static Attack Kick=new Attack("Kick", 15);
    static Attack Tackle=new Attack("Tackle", 25);

    static List<Attack> Attacks = new List<Attack>(){Punch, Kick, Tackle};
    public  MeleeFighter(string name) : base(name,Attacks)
    {
        Health = 120;
    }

    public void Rage()
    {
        int rand = Rand.Next(AttackList.Count());
        AttackList[rand].DamageAmount+=10;
    }
    

}