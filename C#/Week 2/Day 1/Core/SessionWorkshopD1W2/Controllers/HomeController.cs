using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

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

    public IActionResult Privacy()
    {   
       var SessionName=HttpContext.Session.GetString("Name"); //c'est une méthode de validation en cas de ne pas avoir une database
       if(SessionName is not null)
       {
         ViewBag.Name=HttpContext.Session.GetString("Name");
        ViewBag.Number=HttpContext.Session.GetInt32("Number");
        return View();
       }
       return RedirectToAction("Index");
    }

    [HttpPost]
    public IActionResult Create(string name)
    {
        HttpContext.Session.SetString("Name", name); //Pour ajouter quelque chose dans la session
        HttpContext.Session.SetInt32("Number", 0);
        return RedirectToAction("Privacy");
    }

    [HttpPost]
    public IActionResult LogOut()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [HttpPost]
    public IActionResult AddNumber()
    {
        int n =(int) HttpContext.Session.GetInt32("Number");
        HttpContext.Session.SetInt32("Number",n+1);
        return RedirectToAction("Privacy");
    }

    [HttpPost]
    public IActionResult SubstracteNumber()
    {
        int n =(int) HttpContext.Session.GetInt32("Number");
        HttpContext.Session.SetInt32("Number",n-1);
        return RedirectToAction("Privacy");
    }

        [HttpPost]
    public IActionResult MultipleNumber()
    {
        int n =(int) HttpContext.Session.GetInt32("Number");
        HttpContext.Session.SetInt32("Number",n*2);
        return RedirectToAction("Privacy");
    }

        [HttpPost]
    public IActionResult RandomNumber()
    {
        Random rand = new Random();
        int n =(int) HttpContext.Session.GetInt32("Number");
        HttpContext.Session.SetInt32("Number",n+rand.Next(0,100));
        return RedirectToAction("Privacy");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
