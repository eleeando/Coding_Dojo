#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models;

public class Dishes
{
    [Key]
    public int DishId { get; set; }

//---------------------------------------
    [Required(ErrorMessage = "Please provide Dish name.")]
    [MinLength(2,ErrorMessage ="Dish name is too short.")]
    public string Name { get; set; }

//---------------------------------------
    [Required(ErrorMessage = "Please provide Chef name.")]
    [MinLength(2,ErrorMessage ="Chef name is too short.")]
    public string Chef { get; set; }

//---------------------------------------
    [Required(ErrorMessage = "Please provide Tastiness.")]
    [Range(1,5)]
    public int Tastiness { get; set; }

//---------------------------------------
    [Required(ErrorMessage = "Please provide Calories.")]
    [Range(1,int.MaxValue, ErrorMessage ="Calories must be greater than 0.")]
    public int Calories { get; set; }

//---------------------------------------
    [Required(ErrorMessage = "Please provide Dish description.")]
    [MinLength(2,ErrorMessage ="Dish description is too short.")]
    public string Description { get; set; }

//---------------------------------------
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}