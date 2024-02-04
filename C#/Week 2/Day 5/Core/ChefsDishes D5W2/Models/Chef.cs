using System.ComponentModel.DataAnnotations;

namespace ChefsDishes.Models;

public class Chef
{
    [Key]
    public int ChefId { get; set; }

    [Required]
    [MinLength(2)]
    public string FirstName { get; set; }

    [Required]
    [MinLength(2)]
    public string LastName { get; set; }

    [Birthday]
    public DateTime Birthday { get; set; }
    public DateTime CreatedAt { get; set; } =DateTime.Now;
    public DateTime UpdatedAt { get; set; } =DateTime.Now;
    public List<Dish> AllDishes { get; set; }=new List<Dish>();

    public class BirthdayAttribute : ValidationAttribute
{
  protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if ((DateTime)value>DateTime.Now)
        {
            return new ValidationResult("Birthday date must be in the past");
        } else {
            return ValidationResult.Success;
        }
    }
}
}