using System.Collections.Generic;

Car Polo = new Car("polo","black",5,100, "Fuel");
// Vehicule Golf = new Vehicule("Golf", "Grey", true, 6);
// Vehicule Audi = new Vehicule("Audi", "Blue", true, 5);
// Vehicule Mercedes = new Vehicule("Mercedes", "Green", true, 6);
Horse Gatito = new Horse("Gatito", "Black", 4);
// List<Vehicule> Vehicules = new List<Vehicule>(){Polo, Golf, Audi, Mercedes};
// foreach (Vehicule item in Vehicules)
// {
//     item.ShowInfo();
// }
// Polo.Miles+200;
// Polo.Travel(200);
List<Vehicule> Transport = new List<Vehicule>(){Polo, Gatito};
foreach (Vehicule item in Transport)
{
    item.ShowInfo();
}