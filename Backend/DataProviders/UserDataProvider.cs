using CourseWork.Models;
using System.Collections.Generic;

namespace CourseWork.DataProviders
{
    public class UserDataProvider
    {
        public UserModel GetUserById(string Id)
        {
            return new UserModel
            {
                Name = "MockUser",
                Email = "MockMail@gmail.com",
                Age = 18
            };
        }

        public List<UserModel> GetAllUsers()
        {
            return new List<UserModel>
            {
                new UserModel
                {
                    Name = "MockUser",
                    Email = "MockMail@gmail.com",
                    Age = 18
                },
                new UserModel
                {
                    Name = "MockUser2",
                    Email = "Mock2Mail@gmail.com",
                    Age = 21
                }
            };
        }
    }
}
