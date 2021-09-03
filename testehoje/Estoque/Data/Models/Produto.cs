using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    [Table("Estoque")]
    public class Produto : Base
    {
        public string Name { get; set; }
        public string Qtd { get; set; }
    }
}
