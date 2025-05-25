using System.ComponentModel.DataAnnotations;

namespace ArchiveAPIWebApp.Models
{
    public class Material
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        [Display(Name = "Title")]
        public string Name { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        [Display(Name = "Anotation")]
        public string Description { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        public string Type { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        public string Author { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        public int FacultyId { get; set; }

        [Required(ErrorMessage = "This field can't be empty")]
        public int DepartmentId { get; set; }


        public virtual Faculty Faculty { get; set; }
        public virtual Department Department { get; set; }

        //public virtual ICollection<Faculty> Faculties { get; set; } = new List<Faculty>();
    }
}
