#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;

namespace LoginAndRegistration.Models;


public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options){}

    // Our Database Tables 
    public DbSet<User> Users { get; set; }
    
}