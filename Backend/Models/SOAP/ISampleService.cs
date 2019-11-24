using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Threading.Tasks;

namespace CourseWork.Models.SOAP
{
    [ServiceContract]
    public interface ISampleService
    {
        [OperationContract]
        string Test(string s);

        [OperationContract]
        void XmlMethod(System.Xml.Linq.XElement xml);

        [OperationContract]
        MyModel Test2();
    }

    public class MyModel
    {
        public string Field1 { get; set; }

        public int Filed2 { get; set; }
    }
}
