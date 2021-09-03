﻿using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiFilm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : BaseController<Category, CategoryRepository>
    {
    }
}
