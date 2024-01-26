public class Soda : Drink
{
    public bool Diet { get; set; }
    public Soda(string name, string color, double temp, bool diet, int calories) :base(name, color, temp, true, calories)
    {
        Diet = diet;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Diet:{Diet}");
    }

}