using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BitBlog.Models
{
    public class FrontpageEntry
    {
        [Key]
        public int Key { get; set; }

        public string Name { get; set; }
        public string ImageSource { get; set; }
        public string Body { get; set; }
        public string Link { get; set; }
    }
}
