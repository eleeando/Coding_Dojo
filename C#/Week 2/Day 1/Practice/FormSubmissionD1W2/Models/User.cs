using System;
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
    public class User
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Birthday]
        public DateTime Birthday { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Number]
        public int FavNumber { get; set; }
    }

    public class BirthdayAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            
            if (DateTime.Now>(DateTime)value)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("Date must be in the past.");
            }
        }
    }

    public class NumberAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            
            if ((int)value %2 == 1)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("Number must be odd.");
            }
        }
    }
}
