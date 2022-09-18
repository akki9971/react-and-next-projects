using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeFeedbackService.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace EmployeeFeedbackService
{
    public class EmployeeFeedbackDBContext : DbContext
    {
        public EmployeeFeedbackDBContext(DbContextOptions<EmployeeFeedbackDBContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<PerformanceFeedback> PerformanceFeedbacks { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Employee>()
                .HasData(new Employee() { Name = "admin", Department = Department.HR, Email = "admin1@gmail.com", EmployeeId = 1 });


            modelBuilder.Entity<User>()
              .HasData(new User() { Username = "admin", Password = "admin", EmployeeId = 1, IsAdmin = true, UserId = 1 });
        }
    }
}
