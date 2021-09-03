using Data.Models;
using Microsoft.EntityFrameworkCore;

public class MariaDBContext : DbContext
{
    public DbSet<Produto> Produto { set; get; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql("Server=localhost;Port=5435;Database=sys;user id=root;Password=123321@", new MariaDbServerVersion(new System.Version()));
    }
}

