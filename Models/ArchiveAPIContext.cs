using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace ArchiveAPIWebApp.Models
{
    public class ArchiveAPIContext : DbContext
    {
        public virtual DbSet<Faculty> Faculties { get; set; }

        public virtual DbSet<Department> Departments { get; set; }

        public virtual DbSet<Material> Materials { get; set; }


        public ArchiveAPIContext(DbContextOptions<ArchiveAPIContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
