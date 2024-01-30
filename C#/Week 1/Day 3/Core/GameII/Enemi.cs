
public class Enemi

{
    Random rand = new Random();
    //1-Properties
    public string Name { get; set; }
    public int Health { get; set; } = 100 ;
    public List<Attack> AttackList { get; set; }

    //2-Constructors
    public Enemi(string name, List<Attack> attackList)
    {
        Name = name;
        AttackList = attackList;
    }
    //3-Methods
    public virtual Attack RandomAttack()
    {
        int x= rand.Next(AttackList.Count());
        System.Console.WriteLine( AttackList[x]);
        return AttackList[x];
        
    }

}