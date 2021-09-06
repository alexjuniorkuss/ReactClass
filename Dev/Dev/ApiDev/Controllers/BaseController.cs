using Data.Models;
using Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiDev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController<M,R> : ControllerBase where M : BaseModel where R : BaseRepository<M>
    {
        R repo = Activator.CreateInstance<R>();
        [HttpGet]
        public List<M> Get() 
        {
            return repo.Read();
        }
        [HttpGet ("{id}")]
        public M Get(int id)
        {
            return repo.Read(id);
        }
        [HttpPost]
        public void Post([FromBody] M model)
        {
            repo.Create(model);
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] M model)
        {
            model.Id = id;
            repo.Update(model);
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repo.Delete(id);
        }
    }
}
