using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;


namespace CRUDelicious.Controllers;



public class HomeController : Controller
{
        private readonly AppDbContext _db;
    public HomeController( AppDbContext db)
    {
        _db = db;
    }

    [HttpGet("dishes/new")]
    public IActionResult CreateDishes()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(Dishes dishes)
    {
        if(ModelState.IsValid){
            _db.Add(dishes);
            _db.SaveChanges();
            return RedirectToAction("CreateDishes");
        }
        return View("CreateDishes");
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        List<Dishes> AllDishes = _db.Dish.ToList();
        return View(AllDishes);
    }

    [HttpGet("dishes/{id}")]
    public IActionResult ShowOne(int id)
    {
        Dishes Dish = _db.Dish.FirstOrDefault(u=>u.DishId==id);  //_db.Dish.FirstOrDefault(u=>u.DishId==id): on utilise cette méthode si on veut prendre une seule variable de la database en se basant sur l'ID de cette variable
        return View(Dish);
    }

    [HttpPost]
    public IActionResult Delete(int id)
    {
        Dishes? MonToDelete = _db.Dish.SingleOrDefault(i=>i.DishId == id);
        _db.Dish.Remove(MonToDelete);
        _db.SaveChanges();
        return RedirectToAction("Index");
    }

    [HttpGet]
    public IActionResult EditDishes(int id)
    {
        Dishes? DishToEdit = _db.Dish.FirstOrDefault(i => i.DishId == id);
        return View(DishToEdit);
    }

    [HttpPost]
    public IActionResult Update(Dishes dishes,int id)
    {
        Dishes? MonToUpdate = _db.Dish.SingleOrDefault(i=>i.DishId == id);
        if(ModelState.IsValid)
        {
            MonToUpdate.Chef = dishes.Chef;
            MonToUpdate.Name = dishes.Name;
            MonToUpdate.Tastiness = dishes.Tastiness;
            MonToUpdate.Calories = dishes.Calories;
            MonToUpdate.Description = dishes.Description;
            MonToUpdate.UpdatedAt = DateTime.Now;
            _db.SaveChanges();
        return RedirectToAction("Index");
        }
        return View("EditDishes", MonToUpdate);
    }


    
}
