using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeFeedbackService.EntityModels
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int? EmployeeId { get; set; }
        public bool IsAdmin { get; set; }

        [ForeignKey("EmployeeId")]
        public Employee Employee{get;set;}
    }
}
