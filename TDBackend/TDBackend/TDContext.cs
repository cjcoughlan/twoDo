using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TDBackend.Models;

namespace TDBackend
{
    public class TDContext : DbContext
    {
        public TDContext(DbContextOptions<TDContext> options) : base(options)
        {
        }

        public DbSet<ListItem> ListItems { get; set; }
    }
}
