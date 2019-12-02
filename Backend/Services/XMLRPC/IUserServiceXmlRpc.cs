using CourseWork.Models;
using Horizon.XmlRpc.Core;
using System.Collections.Generic;

namespace CourseWork.Services.XMLRPC
{
    public interface IUserServiceXmlRpc
    {
        [XmlRpcMethod("getById")]
        UserModel GetById(string id);

        [XmlRpcMethod("getAll")]
        UserModel[] GetAll();

        [XmlRpcMethod("GetAllTobaccos")]
        HookahTobacco[] GetAllTobaccos();

        [XmlRpcMethod("CreateTobacco")]
        void CreateTobacco(HookahTobacco tobacco);

        [XmlRpcMethod("GetAllCompanies")]
        Company[] GetAllCompanies();

        [XmlRpcMethod("CreateCompany")]
        void CreateCompany(Company company);

        [XmlRpcMethod("GetAllTastes")]
        Taste[] GetAllTastes();

        [XmlRpcMethod("CreateTaste")]
        void CreateTaste(Taste taste);
    }
}
