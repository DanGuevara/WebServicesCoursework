using System.Linq;
using System.Threading.Tasks;
using CourseWork.DataProviders;
using CourseWork.Models;

namespace CourseWork.Services.SOAP
{
    public class UserServiceSoap : IUserServiceSoap
    {
        private UserDataProvider _userDataProvider;
        private MongoDataProvider _mongoDataProvider;
        public UserServiceSoap()
        {
            _userDataProvider = new UserDataProvider();
            _mongoDataProvider = new MongoDataProvider();
        }

        public UserModel[] GetAll(string stub)
        {
            return _userDataProvider.GetAllUsers().ToArray();
        }

        public HookahTobacco[] GetAllTobaccos(string stub)
        {
            return _mongoDataProvider.GetAllTobaccos().Result.ToArray();
        }

        public async void CreateTobacco(HookahTobacco tobacco)
        {
            if (tobacco != null)
            {
                await _mongoDataProvider.Create(tobacco);
            }
        }

        public Company[] GetAllCompanies(string stub)
        {
            return _mongoDataProvider.GetAllCompanies().Result.ToArray();
        }

        public async void CreateCompany(Company company)
        {
            if (company != null)
            {
                await _mongoDataProvider.CreateCompany(company);
            }
        }

        public Taste[] GetAllTastes(string stub)
        {
            return _mongoDataProvider.GetAllTastes().Result.ToArray();
        }

        public async void CreateTaste(Taste taste)
        {
            if (taste != null)
            {
                await _mongoDataProvider.CreateTaste(taste);
            }
        }

        public UserModel GetById(string id)
        {
            return _userDataProvider.GetUserById(id);
        }
    }
}
