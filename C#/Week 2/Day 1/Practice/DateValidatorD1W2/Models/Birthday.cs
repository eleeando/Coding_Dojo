using System.ComponentModel.DataAnnotations;
namespace DateValidator.Models;

public class Birthday
{
    [Required]
    [FutureDate]
    public DateTime  Bibi { get; set; }

    public class FutureDateAttribute : ValidationAttribute
{    
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)    
    {        
        if((DateTime)value< DateTime.Now)
        {
            return new ValidationResult("Date should be in the future");  
        } else{
            return ValidationResult.Success;
        }
    }
}
}