using Microsoft.AspNetCore.Mvc;
namespace Home.Controllers;

public class Home:Controller
{
    [HttpGet("")]
    public IActionResult Fun()
    {
        return View();
    }
}