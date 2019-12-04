using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseWork.DataProviders;
using CourseWork.Models;
using Microsoft.AspNetCore.Mvc;

namespace CourseWork.Controllers
{
    [Route("api/rest/user")]
    public class UserController : Controller
    {
        private UserDataProvider _userDataProvider;
        private MongoDataProvider _mongoDataProvider;

        public UserController()
        {
            _userDataProvider = new UserDataProvider();
            _mongoDataProvider = new MongoDataProvider();
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

        [HttpGet]
        [Route("GetAllTobaccos")]
        public async Task<List<HookahTobacco>> GetAllTobaccos()
        {
            var tmp = await _mongoDataProvider.GetAllTobaccos();
            return tmp.ToList();
        }

        [HttpPost]
        [Route("CreateTobacco")]
        public async Task CreateTobacco([FromBody]HookahTobacco tobacco)
        {
            await _mongoDataProvider.Create(tobacco);
        }

        [HttpGet]
        [Route("GetAllCompanies")]
        public async Task<List<Company>> GetAllCompanies()
        {
            return (await _mongoDataProvider.GetAllCompanies()).ToList();
        }

        [HttpPost]
        [Route("CreateCompany")]
        public async Task CreateTobacco([FromBody]Company company)
        {
            await _mongoDataProvider.CreateCompany(company);
        }


        [HttpGet]
        [Route("GetAllTastes")]
        public async Task<List<Taste>> GetAllTastes()
        {
            return (await _mongoDataProvider.GetAllTastes()).ToList();
        }

        [HttpPost]
        [Route("CreateTaste")]
        public async Task CreateTaste([FromBody]Taste taste)
        {
            await _mongoDataProvider.CreateTaste(taste);
        }
    }
}
