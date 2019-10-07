using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BitBlog.Models;
using Microsoft.AspNetCore.Mvc;

namespace BitBlog.Controllers
{
    [Route("api/home")]
    public class HomeController : Controller
    {
        public ContentContext _db { get; }

        public HomeController(ContentContext contentContext)
        {
            _db = contentContext;
        }

        [HttpGet]
        public IEnumerable<FrontpageEntry> FrontpageEntries()
        {
            return _db.FrontpageEntries;
        }
    }
}