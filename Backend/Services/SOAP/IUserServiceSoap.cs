using CourseWork.Models;
using System.Collections.Generic;
using System.ServiceModel;
using System.Threading.Tasks;

namespace CourseWork.Services.SOAP
{
    [ServiceContract]
    public interface IUserServiceSoap
    {
        [OperationContract]
        UserModel GetById(string id);

        [OperationContract]
        UserModel[] GetAll(string stub);

        [OperationContract]
        HookahTobacco[] GetAllTobaccos(string stub);

        [OperationContract]
        void CreateTobacco(HookahTobacco tobacco);

        [OperationContract]
        Company[] GetAllCompanies(string stub);

        [OperationContract]
        void CreateCompany(Company company);

        [OperationContract]
        Taste[] GetAllTastes(string stub);

        [OperationContract]
        void CreateTaste(Taste taste);
    }
}
