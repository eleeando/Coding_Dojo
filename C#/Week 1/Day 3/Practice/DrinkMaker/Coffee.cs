public class Coffee : Drink
{
    public enum types
    {
        dark,
        medium,
        light
    }
    public types Roast { get; set; }
    public string Beans { get; set; }

    public Coffee(string name, string color, double temp, int calories, types roast, string beans) : base(name, color, temp, false, calories)
    {
        Roast = roast;
        Beans = beans;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Roast: {Roast} \n Beans: {Beans}");
    }
}