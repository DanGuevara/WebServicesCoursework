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
    }
}
