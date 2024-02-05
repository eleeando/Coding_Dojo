using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginAndRegistration.Models;

public class User
{
    [Key]
    public int UserId { get; set; }

    [Required]
    [MinLength(2)]
    [Display(Name ="First Name")]
    public string FirstName { get; set; }

    [Required]
    [MinLength(2)]
    [Display(Name ="Last Name")]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string Password { get; set; }

    [Compare("Password")]
    [NotMapped]
    [DataType(DataType.Password)]
    [Display(Name ="Confirm Password")]
    public string ConfirmPW { get; set; }

    public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
    	// Though we have Required as a validation, sometimes we make it here anyways
    	// In which case we must first verify the value is not null before we proceed
        if(value == null)
        {
    	    // If it was, return the required error
            return new ValidationResult("Email is required!");
        }
    
    	// This will connect us to our database since we are not in our Controller
        AppDbContext _db = (AppDbContext)validationContext.GetService(typeof(AppDbContext));
        // Check to see if there are any records of this email in our database
    	if(_db.Users.Any(e => e.Email == value.ToString()))
        {
    	    // If yes, throw an error
            return new ValidationResult("Email must be unique!");
        } else {
    	    // If no, proceed
            return ValidationResult.Success;
        }
    }
}


}