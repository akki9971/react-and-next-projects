using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeFeedbackService.EntityModels
{
    public class PerformanceFeedback
    {
        public int PerformanceFeedbackId { get; set; }
        public string Feedback { get; set; }
        public string SubmitedDate { get; set; }
        public int? EmployeeId { get; set; }
        public int? ReviewerId { get; set; }

        [ForeignKey("EmployeeId")]
        public virtual Employee Employee { get; set; }

        [ForeignKey("ReviewerId")]
        public virtual Employee Reviewer { get; set; }

    }
}
