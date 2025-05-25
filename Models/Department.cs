using System.ComponentModel.DataAnnotations;

namespace ArchiveAPIWebApp.Models
{
    public class Department
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        public string Name { get; set; }
    }
}
