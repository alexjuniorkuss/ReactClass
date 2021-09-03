using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Film : Base
    {
        public string Name { get; set; }
        public Category Category { get; set; }
        public DateTime ReleaseDate { get; set; }
        public double Duration { get; set; }
    }
}
