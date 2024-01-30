using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurvayVlidation.Models;


namespace DojoSurvayVlidation.Controllers;

public class HomeController : Controller
{
    
    private readonly ILogger<HomeController> _logger;
    public static List<User> MyProperty { get; set; }

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }


    [HttpGet("")]
    public IActionResult Index()
    {
        return View();
    }

[HttpPost("create/users")]
    public IActionResult Privacy(User user)
    {
        if(ModelState.IsValid)
        {
            ViewBag.Userss = user;
            return View();
        }
        return View("Index");
    }

   
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
