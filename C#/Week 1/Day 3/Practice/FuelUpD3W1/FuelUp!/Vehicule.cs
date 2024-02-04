abstract public class Vehicule
{
    public string Name { get; set; }
    public int NumberPassenger { get; set; }
    public string Color { get; set; }
    public bool Engine { get; set; }
    public int Miles { get; set; }

    public Vehicule(string name, string color, bool engine, int numberPassenger)
    {
        Name = name;
        Color =color;
        Engine = engine;
        Miles =0;
        NumberPassenger = numberPassenger;
    }

    public void ShowInfo()
    {
        System.Console.WriteLine($"Name:{Name} \n Color:{Color} \n Engine:{Engine} \n NumberPassenger:{NumberPassenger}");
    }

    public void Travel(int km)
    {
        Miles += km;
        System.Console.WriteLine($"Miles:{Miles}");
    }

}