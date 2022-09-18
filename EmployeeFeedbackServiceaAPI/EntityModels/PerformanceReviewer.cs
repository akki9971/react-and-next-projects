using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeFeedbackService.EntityModels
{
    public class PerformanceReviewer
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int ReviewerId { get; set; }
        public Employee Employee { get; set; }
        public virtual PerformanceFeedback PerformanceFeedback { get; set; }
    }
}
