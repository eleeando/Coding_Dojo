public class MagicCaster : Enemi
{
    public int Health { get; set; } 

    static Attack Fireball= new Attack("Fireball", 25);
    static Attack Lightning= new Attack("Lightning", 20);
    static Attack Staff = new Attack("Staff", 10);
    static List<Attack> Magic = new List<Attack>(){Fireball, Lightning, Staff};
    public MagicCaster(string name): base(name,Magic){
        Health = 80;
    }

    public void Heal(Enemi Target)
    {
        Target.Health +=40;
    }



}