// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");


//1- Print all avlues from 1-255
// for (int i = 1; i <= 255; i++)
// {
//     Console.WriteLine(i);
// }

//2- 5 random numbers between 10 and 20
// List<int> randomNumList = new List<int>(){};
// Random rand = new Random();
// for (int i = 0; i < 5; i++)
// {
//     randomNumList.Add(rand.Next(10,21));
//     System.Console.WriteLine(randomNumList[i]);
// }

//3- The random values together and print the sum
// int SumRandom(){
//     int sum = 0;
    // for (int i = 0; i < randomNumList.Count(); i++)
    // {
    //     sum += randomNumList[i];
    // }


//     foreach(int el in randomNumList)
//     {
//         sum += el;
//     }
//     return sum;
// }
// System.Console.WriteLine(SumRandom());

//4- Print all values from 1 to 100 that are divisible by 3 Or 5 but not both
// for (int i = 1; i <= 100; i++)
// {
//     if (i%3==0 || i%5==0)
//     {
//         System.Console.WriteLine(i);
//     }
// }

//5- "Fizz" and "Buzz"
// for (int i = 1; i <= 100; i++)
// {
//     if (i%3==0)
//     {
//         System.Console.WriteLine("Fizz");
//     }
//     else if (i%5==0){
//         System.Console.WriteLine("Buzz");
//     }
// }

//6-  "Fizz" and "Buzz" and "FizzBuzz"
for (int i = 1; i <= 100; i++)
{   
    if (i%3==0 && i%5==0){
        System.Console.WriteLine("FizzBuzz");
    }
    else if (i%3==0)
    {
        System.Console.WriteLine("Fizz");
    }
    else if (i%5==0){
        System.Console.WriteLine("Buzz");
    }
}
