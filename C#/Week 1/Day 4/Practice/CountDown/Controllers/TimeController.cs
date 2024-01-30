using Microsoft.AspNetCore.Mvc;
namespace CountDown.Conrollers;

public class TimeController:Controller
{
    [HttpGet("")]
    public IActionResult Time()
    {
        return View();
    }
}