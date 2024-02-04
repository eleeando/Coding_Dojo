using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ChefsDishes.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace ChefsDishes.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly AppDbContext _db;

    public HomeController(ILogger<HomeController> logger, AppDbContext db)
    {
        _logger = logger;
        _db = db;
    }

    public IActionResult Index()
    {
        List<Chef> Chefsss = _db.Chefs.ToList();
        return View(Chefsss);
    }

    public IActionResult Privacy()
    {
        List<Dish> AllDishes = _db.Dishes.ToList();
        ViewBag.Chefs=_db.Chefs.ToList();
        return View(AllDishes);
    }

    [HttpGet("chefs/new")]
    public IActionResult CreateChef()
    {
        return View();
    }

    [HttpPost]
    public IActionResult AddChef(Chef chef)
    {
        if(ModelState.IsValid)
        {
            _db.Chefs.Add(chef);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("CreateChef");
    }

    [HttpGet]
    public IActionResult CreateDishes()
    {
        List<Chef> AllChefs = _db.Chefs.ToList();
        ViewBag.Chefs = AllChefs;
        return View();
    }

    [HttpPost]
    public IActionResult AddDishes(Dish dish)
    {
        if(ModelState.IsValid)
        {
            _db.Dishes.Add(dish);
            _db.SaveChanges();
            return RedirectToAction("Privacy");
        }
        else{
            return View("CreateDishes");
        }
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

        //  - Session check Filter class
    public class SessionCheckAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            int? userId = context.HttpContext.Session.GetInt32("userId");
            if (userId == null)
            {
                context.Result = new RedirectToActionResult("Index", "Home", null);
            }
        }
    }
}
