using CourseWork.Models.SOAP;
using System;
using System.Xml.Linq;

namespace CourseWork.Services.SOAP
{
    public class SampleService : ISampleService
    {
        public string Test(string s)
        {
            Console.WriteLine("Test Method Executed!");
            return s;
        }

        public MyModel Test2()
        {
            return new MyModel
            {
                Field1 = "SomeString",
                Filed2 = 123
            };
        }

        public void XmlMethod(XElement xml)
        {
            Console.WriteLine(xml.ToString());
        }
    }
}
