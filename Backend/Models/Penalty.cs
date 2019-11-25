using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.Models
{
    [Table("Penalty")]
    public partial class Penalty
    {
        public int PenaltyID { get; set; }
        public string Type { get; set; }
        public DateTime DateFrom { get; set; }
    }
}
