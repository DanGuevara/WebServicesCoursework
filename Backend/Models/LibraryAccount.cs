using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    [Table("LibraryAccount")]
    public partial class LibraryAccount
    {
        [Key]
        public int AccountID { get; set; }
        public string AccountNumber { get; set; } 
        public int PassportNumber { get; set; }
        public int PassportSerial { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }

    }
}
