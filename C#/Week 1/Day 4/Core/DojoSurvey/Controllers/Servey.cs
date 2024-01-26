using System.Xml;
using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.controllers;


public class Servey : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View("Index");
    }
    [HttpPost("results")]
    public IActionResult Results(string name,string location,string language,string comment)
    {
        ViewBag.name=name;
        ViewBag.location=location;
        ViewBag.language=language;
        ViewBag.comment=comment;
        return View("Results");
    }
}