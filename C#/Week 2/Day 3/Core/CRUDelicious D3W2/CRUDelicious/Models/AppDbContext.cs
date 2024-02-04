#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options):base(options){}
     //DataBase table must be declared here
    public DbSet<Dishes> Dish {get; set;}
}