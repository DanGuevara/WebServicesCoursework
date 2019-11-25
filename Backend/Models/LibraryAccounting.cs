using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    [Table("LibraryAccounting")]
    public partial class LibraryAccounting
    {
        [Key]
        public int LibraryAccountingID { get; set; }
        public string Type { get; set; }
        public int BookID { get; set; }
        public int AccountID { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime CompletionDate { get; set; }
    }
}
