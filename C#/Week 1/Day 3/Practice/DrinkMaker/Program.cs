Coffee Allonge = new Coffee("express","black",10.2, 420, Coffee.types.dark, "brazil");
Wine Red = new Wine("Red Wine", "Red", 10, false, 180, "France", 1980);
Soda La3mouri = new Soda("La3mouri", "Red", 125.3, false, 500);

List<Drink> AllBeverages = new(){Allonge, Red, La3mouri};

Allonge.ShowDrink();
Red.ShowDrink();
La3mouri.ShowDrink();

