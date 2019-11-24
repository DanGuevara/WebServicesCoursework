using CourseWork.Models;
using System.Collections.Generic;
using System.ServiceModel;

namespace CourseWork.Services.SOAP
{
    [ServiceContract]
    public interface IUserServiceSoap
    {
        [OperationContract]
        UserModel GetById(string id);

        [OperationContract]
        UserModel[] GetAll(string stub);
    }
}
