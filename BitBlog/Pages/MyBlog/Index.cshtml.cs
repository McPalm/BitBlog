using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BitBlog.Models;

namespace BitBlog.Pages.Blog
{
    public class IndexModel : PageModel
    {
        private readonly BitBlog.Models.ContentContext _context;

        public IndexModel(BitBlog.Models.ContentContext context)
        {
            _context = context;
        }

        public IList<BlogPost> BlogPost { get;set; }

        public async Task OnGetAsync()
        {
            BlogPost = await _context.BlogPosts.ToListAsync();
        }
    }
}
