using CourseWork.DataProviders;
using CourseWork.Models;

namespace CourseWork.Services.SOAP
{
    public class UserServiceSoap : IUserServiceSoap
    {
        private UserDataProvider _userDataProvider;
        public UserServiceSoap()
        {
            _userDataProvider = new UserDataProvider();
        }

        public UserModel[] GetAll(string stub)
        {
            return _userDataProvider.GetAllUsers().ToArray();
        }

        public UserModel GetById(string id)
        {
            return _userDataProvider.GetUserById(id);
        }
    }
}
