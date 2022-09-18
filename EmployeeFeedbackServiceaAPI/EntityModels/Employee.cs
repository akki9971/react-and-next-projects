using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeFeedbackService.EntityModels
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public Department Department { get; set; }
      //  public User User { get; set; }
        //public ICollection<PerformanceFeedback> PerformanceFeedback { get; set; }
    }
}
