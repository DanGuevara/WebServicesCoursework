using System.Collections.Generic;
using CourseWork.DataProviders;
using CourseWork.Models;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Controllers
{
    [Route("api/rest/user")]
    public class UserController : Controller
    {
        private UserDataProvider _userDataProvider;

        public UserController()
        {
            _userDataProvider = new UserDataProvider();
        }

        [HttpGet("{id}")]
        public UserModel Get(string id)
        {
            return this._userDataProvider.GetUserById(id);
        }

        [HttpGet]
        [Route("getall")]
        public List<UserModel> GetAll()
        {
            return _userDataProvider.GetAllUsers();
        }
    }
}
