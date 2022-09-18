using EmployeeFeedbackService.EntityModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EmployeeFeedbackService.Controllers
{
    [ApiController]
    public class EmployeeFeedback : ControllerBase
    {
        EmployeeFeedbackDBContext _dbContext;
        public EmployeeFeedback(EmployeeFeedbackDBContext context)
        {
            _dbContext = context;
        }

        [EnableCors("AllowOrigin")]
        [HttpGet("api/GetAllEmployees")]
        public string GetAllEmployees()
        {
            var employeeList = _dbContext.Employees.ToList();

            return JsonConvert.SerializeObject(employeeList);
        }

        [EnableCors("AllowOrigin")]
        [HttpGet("api/GetEmployeeById/{Id:int?}")]
        public string GetEmployeeById(int Id)
        {
            var user = _dbContext.Users.Where(user => user.EmployeeId == Id).Include(x => x.Employee).FirstOrDefault();
            if(user?.Employee != null)
            {
                return JsonConvert.SerializeObject(user);
            }
            var employee = _dbContext.Employees.Where(emp => emp.EmployeeId == Id).FirstOrDefault();
            return JsonConvert.SerializeObject(new User() { EmployeeId = employee.EmployeeId, Employee = employee });
        }

        [EnableCors("AllowOrigin")]
        [HttpPost("api/AddEmployee")]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            try
            {
                _dbContext.Employees.Add(employee);
                _dbContext.SaveChanges();

                return Created("api/AddEmployee", "Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [EnableCors("AllowOrigin")]
        [HttpPost("api/AddNewEmployee")]
        public IActionResult AddNewEmployee([FromBody] User user)
        {
            try
            {
                var emp = user?.Employee;
                _dbContext.Employees.Add(emp);
                _dbContext.SaveChanges();
                _dbContext.Users.Add(new User() {UserId=user.UserId, EmployeeId = emp?.EmployeeId, IsAdmin= user.IsAdmin, Username=user?.Username, Password = user?.Password});
                _dbContext.SaveChanges();
                return Created("api/AddEmployee", "Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [EnableCors("AllowOrigin")]
        [HttpPut("api/EditEmployee")]
        public IActionResult EditEmployee([FromBody] Employee employee)
        {
            try
            {
                _dbContext.Employees.Update(employee);
                _dbContext.SaveChanges();

                return Created("api/EditEmployee", "Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [EnableCors("AllowOrigin")]
        [HttpPut("api/EditEmployeeFullDetails")]
        public IActionResult EditEmployeeFullDetails([FromBody] User user)
        {
            try
            {
                _dbContext.Employees.Update(user.Employee);
                _dbContext.Users.Update(user);
                _dbContext.SaveChanges();

                return Created("api/EditEmployee", "Success");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [EnableCors("AllowOrigin")]
        [HttpDelete("api/DeleteEmployee/{Id:int?}")]
        public IActionResult DeleteEmployee(int Id)
        {
            try
            {
                var employee = _dbContext.Employees.Where(emp => emp.EmployeeId == Id).FirstOrDefault();
                if (employee == null)
                {
                    return BadRequest("Employee Not Exist");
                }
                _dbContext.Employees.Remove(employee);
                var user = _dbContext.Users.Where(user => user.EmployeeId == Id).FirstOrDefault();
                if(user != null)
                {
                    _dbContext.Users.Remove(user);
                }
                _dbContext.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [EnableCors("AllowOrigin")]
        [HttpGet("api/GetAllEmployeeAssignedForfeedback/{reviewerId:int?}")]
        public string GetAllEmployeeAssignedForfeedback(int reviewerId)
        {
            var employeeList = _dbContext.PerformanceFeedbacks.Where(emp => emp.ReviewerId == reviewerId).Include(x => x.Employee).OrderBy(x=>x.Feedback).ToList();

            return JsonConvert.SerializeObject(employeeList);
        }

        [EnableCors("AllowOrigin")]
        [HttpGet("api/GetEmployeeFeedback/{empId:int?}")]
        public string GetEmployeeFeedback(int empId)
        {
            var employeeList = _dbContext.PerformanceFeedbacks.Where(x => x.EmployeeId == empId).Include(x => x.Employee).Include(y => y.Reviewer).ToList();

            return JsonConvert.SerializeObject(employeeList);
        }

        [EnableCors("AllowOrigin")]
        [HttpPost("api/AssignPerformanceReviewer/{empId:int?}/{reviewerId:int?}")]
        public IActionResult AssignPerformanceReviewer([FromRoute] int empId, [FromRoute] int reviewerId)
        {
            var employee = _dbContext.PerformanceFeedbacks.Where(emp => emp.EmployeeId == empId && emp.ReviewerId == reviewerId)
                            .Include(x => x.Employee).Include(y => y.Reviewer).FirstOrDefault();

            if (employee != null)
            {
                return BadRequest(string.Format("{0} - Already Assigned for Performance Reviewer for the Employee {1}", employee.Reviewer?.Name, employee.Employee?.Name));
            }

            _dbContext.PerformanceFeedbacks.Add(new PerformanceFeedback() { ReviewerId = reviewerId, EmployeeId = empId });
            _dbContext.SaveChanges();

            var createdResource = _dbContext.PerformanceFeedbacks.Where(emp => emp.EmployeeId == empId && emp.ReviewerId == reviewerId)
                            .Include(x => x.Employee).Include(y => y.Reviewer).FirstOrDefault();
            return Ok(JsonConvert.SerializeObject(createdResource));
            // return Created("api/AssignedPerformanceReviewer", "Success");
        }


        [EnableCors("AllowOrigin")]
        [HttpPut("api/SubmitFeedback")]
        public IActionResult SubmitFeedback([FromBody] PerformanceFeedback performanceFeedback)
        {
            var feedback = _dbContext.PerformanceFeedbacks.Where(emp => emp.EmployeeId == performanceFeedback.EmployeeId && emp.ReviewerId == performanceFeedback.ReviewerId)
                            .Include(x => x.Employee).Include(y => y.Reviewer).AsNoTracking().FirstOrDefault();
            
            if (feedback == null)
            {
                performanceFeedback.SubmitedDate = DateTime.Now.ToString();
                _dbContext.PerformanceFeedbacks.Add(performanceFeedback);
            }
            else
            {
                feedback.SubmitedDate = DateTime.Now.ToString();
                feedback.Feedback = performanceFeedback.Feedback;
                _dbContext.PerformanceFeedbacks.Update(feedback);
            }
            _dbContext.SaveChanges();

            return Ok();
        }

        [EnableCors("AllowOrigin")]
        [HttpPost("api/SubmitFeedbackByAdmin")]
        public IActionResult SubmitFeedbackByAdmin([FromBody] PerformanceFeedback performanceFeedback)
        {
            try
            {
                performanceFeedback.SubmitedDate = DateTime.Now.ToString();
                _dbContext.PerformanceFeedbacks.Update(performanceFeedback);
                _dbContext.SaveChanges();

                return Created("api/SubmitFeedback", "Success");
            }
            catch
            {
                return BadRequest();
            }
        }

    }
}
