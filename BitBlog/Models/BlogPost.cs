using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BitBlog.Models
{
    public class BlogPost
    {
        [Key]
        public int Key { get; set; }

        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Article { get; set; }
    }
}
