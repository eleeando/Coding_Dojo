public class Attack
{
    //1-Properties
    public string Name { get; set; }
    public int DamageAmount { get; set; }
    //2-Constructors
    public Attack(string name, int damageAmount)
    {
        Name = name;
        DamageAmount = damageAmount;
    }
    //3-Methods
    public void ShowInfo()
    {
        System.Console.WriteLine($"Name: {Name}  \n DamageAmount: {DamageAmount}");
    }
}