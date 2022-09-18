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
    public class AuthController : ControllerBase
    {
        EmployeeFeedbackDBContext _dbContext;
        public AuthController(EmployeeFeedbackDBContext context)
        {
            _dbContext = context;
        }

        [EnableCors("AllowOrigin")]
        [HttpPost("api/Login")]
        public string Login([FromBody] User user)
        {
            var loggedinUser = _dbContext.Users.Where((x) => x.Username == user.Username && x.Password == user.Password).Include(x=>x.Employee).FirstOrDefault();
            if(loggedinUser == null)
            {
                return null;
            }

            return JsonConvert.SerializeObject(loggedinUser);
        }


        [EnableCors("AllowOrigin")]
        [HttpGet("api/AddUser")]
        public string AddUser([FromBody] User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();

            return "";
        }
    }
}
