public class Car : Vehicule, INeedFuel
{
   public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Car(string name, string color, int numberPassenger, int miles, string fuelType) : base(name, color, true, numberPassenger)
    {
        FuelType = fuelType;
        FuelTotal = 10;
    }

    public void GiveFuel(int f)
    {
        FuelTotal +=f;
    }
}