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
    public class DeleteModel : PageModel
    {
        private readonly BitBlog.Models.ContentContext _context;

        public DeleteModel(BitBlog.Models.ContentContext context)
        {
            _context = context;
        }

        [BindProperty]
        public BlogPost BlogPost { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            BlogPost = await _context.BlogPosts.FirstOrDefaultAsync(m => m.Key == id);

            if (BlogPost == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            BlogPost = await _context.BlogPosts.FindAsync(id);

            if (BlogPost != null)
            {
                _context.BlogPosts.Remove(BlogPost);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
