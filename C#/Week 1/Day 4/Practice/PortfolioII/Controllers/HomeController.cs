using Microsoft.AspNetCore.Mvc;
namespace Home.Controllers;

public class Home:Controller
{
    [HttpGet("")]
    public IActionResult About()
    {
        return View();
    }

    [HttpGet("project")]
    public IActionResult Project()
    {
        return View("Project");
    }

    [HttpGet("Contact")]
    public IActionResult Contact()
    {
        return View();
    }
}