using Microsoft.EntityFrameworkCore;
using Rabbit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rabbit.Context
{
    public class DevContext : DbContext
    {
        public DbSet<Dev> Dev { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5433;Database=postgres;Username=postgres;Password=123;Persist Security Info=True");
        }
    }
}
