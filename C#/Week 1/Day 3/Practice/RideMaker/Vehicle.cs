public class Vehicle
{
    //PROPERTIES
    public string Name { get; set; }
    public int Passengers { get; set; }
    public string Color { get; set; }
    public bool Engine { get; set; }
    public int Miles { get; set; } =0;

    //CONSTRUCTORS
    public Vehicle(string name, int passengers, string color, bool engine)
    {
        Name = name;
        Passengers = passengers;
        Color = color;
        Engine = engine;
    }
    public Vehicle(string name,  string color)
    {
        Name = name;
        Color = color;
        Passengers = 4;
        Engine = true;
    }
    //METHODS
    public void ShwInfo()
    {
        System.Console.WriteLine($"Name: {Name} \n Color:{Color} \n  Miles:{Miles} \n  Engine: {Engine}");
    }
    public void Travel(int distance)
    {
        Miles += distance;
        System.Console.WriteLine(Miles);
    }
}