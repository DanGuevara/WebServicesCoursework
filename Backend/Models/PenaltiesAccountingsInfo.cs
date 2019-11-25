using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    public class PenaltiesAccountingsInfo
    {
        public int PenaltiesAccountingID { get; set; }
        public string AccountNumber { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string Type { get; set; }
        public double Sum { get; set; }
        public DateTime Date { get; set; }
    }
}
