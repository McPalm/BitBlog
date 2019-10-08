using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BitBlog.Models
{
    public class ContentContext : DbContext
    {

        public ContentContext(DbContextOptions<ContentContext> options) : base(options)
        {

        }

        public DbSet<FrontpageEntry> FrontpageEntries { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }
    }
}
