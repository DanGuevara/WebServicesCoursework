using LibraryApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryApi.DAL
{
    public class LibraryContext : DbContext
    {
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<LibraryAccount> LibraryAccounts { get; set; }
        public virtual DbSet<Penalty> Penalties { get; set; }
        public virtual DbSet<PenaltiesAccounting> PenaltiesAccountings { get; set; }
        public virtual DbSet<LibraryAccounting> LibraryAccounting { get; set; }
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {
        }

        public static LibraryContext Create()
        {
            var optionsBuilder = new DbContextOptionsBuilder<LibraryContext>()
                .UseSqlServer(ConfigurationManager.ConnectionStrings["LibraryDatabase"].ConnectionString)
                .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);

            return new LibraryContext(optionsBuilder.Options);
        }

       


    }
}
