using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginAndRegistration.Models;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;

namespace LoginAndRegistration.Controllers;

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
        return View();
    }

    [SessionCheck]
    public IActionResult Privacy()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateUser(User user)
    {
        if(ModelState.IsValid)
        {
            HttpContext.Session.SetInt32("userId", user.UserId);
            PasswordHasher<User> hasher =new();
            user.Password =hasher.HashPassword(user, user.Password);
            _db.Add(user);
            _db.SaveChanges();
            return RedirectToAction("Privacy");
        }
        return View("Index");
    }

    [HttpPost]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

[HttpPost]
    public IActionResult Login(LoginUser loginUser)
    {
        if (ModelState.IsValid)
        {
            User? userFromDb = _db.Users.FirstOrDefault(x => x.Email == loginUser.LoginEmail);
            if (userFromDb is not null)
            {
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(loginUser, userFromDb.Password, loginUser.LoginPassword);
                if (result == 0)
                {
                    ModelState.AddModelError("LoginPassword", "Wrong Password.");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("userId", userFromDb.UserId);
                
                return RedirectToAction("Privacy");
            }
            ModelState.AddModelError("LoginEmail", "Email doesn't exist. Try to register.");
            return View("Index");
        }
        return View("Index");
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
