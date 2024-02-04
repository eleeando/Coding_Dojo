using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DateValidator.Models;

namespace DateValidator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost] // puisque c'est une fonction de création, il faut citer la méthode ici
    public IActionResult Create(Birthday birthday)
    {
        if(ModelState.IsValid)
        {
            return RedirectToAction("Privacy");
        }
        return View("Index");
    }
    public IActionResult Privacy()
    {
         //(ModelState.IsValid): si les validations créees dans le model sont vrais 
        
            return View();
        
       
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
