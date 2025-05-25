using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ArchiveAPIWebApp.Migrations
{
    /// <inheritdoc />
    public partial class AddMaterialForeignKeys : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FacultyId",
                table: "Material",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "Material",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Material_FacultyId",
                table: "Material",
                column: "FacultyId");

            migrationBuilder.CreateIndex(
                name: "IX_Material_DepartmentId",
                table: "Material",
                column: "DepartmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Material_Faculties_FacultyId",
                table: "Material",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Material_Departments_DepartmentId",
                table: "Material",
                column: "DepartmentId",
                principalTable: "Department",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Material");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Faculty");
        }
    }
}
