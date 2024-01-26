// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// 1- a- THREE BASIC ARRAYS
// int[] numbers = new int[] {0,1,2,3,4,5,6,7,8,9};
// foreach (var item in numbers)
// {
//     System.Console.WriteLine(item);
// }

// b- ARRAY OF STRING
string[] names = new string[] {"Tim", "Martin", "Nikki", "Sara"};
// foreach (var name in names)
// {
//     System.Console.WriteLine(name);
// }

// c- BOOLEAN ARRAY OF LENGTH 10
// bool[] boo = new bool[10];
// for(int i = 0;i<boo.Length; i++)
// {
//     if(i%2==0) boo[i]=true;
//     else boo[i]=false;
// }
// foreach(bool b in boo)
// {
//     System.Console.WriteLine(b);
// }

// 2- LIST OF FLAVORS
List<string> iceCream = new List<string>();

iceCream.Add("Chocolat");
iceCream.Add("Fraise");
iceCream.Add("Noisette");
iceCream.Add("Pistach");
iceCream.Add("Citron");

// for (int i=0; i<iceCream.Count; i++)
// {
//     System.Console.WriteLine(iceCream[i]);
// }
// System.Console.WriteLine(iceCream.Count);

// System.Console.WriteLine(iceCream[2]);


// string removeIceCream = iceCream[3];
//         iceCream.RemoveAt(3);
//         System.Console.WriteLine(removeIceCream);

    
// System.Console.WriteLine(iceCream.Count);

// 3-User Dictionary

Dictionary<string,string> keyValuePairs = new Dictionary<string, string>();
Random rand = new Random();
for (int i = 0; i < names.Count(); i++)
{
    keyValuePairs.Add(names[i],iceCream[rand.Next(0,5)]);
}
foreach (var item in keyValuePairs)
{
    System.Console.WriteLine(item);
}






