using System.ComponentModel.DataAnnotations;

namespace DojoSurvayVlidation.Models;

public class User
{
    [Required]
    [MinLength(2)]
    public string UserName { get; set; }
    [Required]
    
    public string Location { get; set; }
    [Required]
    
    public string FavLanguage { get; set; }

    [MinLength(20)]
    public string? Comment { get; set; }  //le pt "?" signifie que si le comment va étre sous la forme de string ou bien je ne reçois aucun comment
}