public class Horse : Vehicule, INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Horse(string name, string color, int miles) : base(name, color, false, 2)  //si l'utilisateur va ajouter les caractéristiques de l'inheritance, on les ajoute avec le nom, couleur etc..

    {
        FuelType = "Hay";
        FuelTotal = 10;
    }

    public void GiveFuel(int h)
    {
        FuelTotal +=h;
    }
}