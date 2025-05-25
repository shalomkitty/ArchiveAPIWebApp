using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArchiveAPIWebApp.Models
{


    [Table("Material")]
    public class Material
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
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


        [ForeignKey(nameof(FacultyId))]
        public virtual Faculty? Faculty { get; set; }

        [ForeignKey(nameof(DepartmentId))]
        public virtual Department? Department { get; set; }

        //public virtual ICollection<Faculty> Faculties { get; set; } = new List<Faculty>();
    }
}
