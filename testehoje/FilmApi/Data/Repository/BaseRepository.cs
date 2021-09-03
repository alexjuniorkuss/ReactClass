using Data.Context;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public abstract class BaseRepository<T> where T: Base
    {
        T repo = Activator.CreateInstance<T>();
        public void Create(T model)
        {
            using (var context = new FilmContext())
            {
                context.Set<T>().Add(model);
                context.SaveChanges();
            }
        }
        public List<T> Read()
        {
            using (var context = new FilmContext())
            {
                return context.Set<T>().ToList();
            }
        }
        public T Read(int id)
        {
            using (var context = new FilmContext())
            {
                return context.Set<T>().Find(id);
            }
        }
        public void Update(T model)
        {
            using (var context = new FilmContext())
            {
                context.Entry<T>(model).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            using (var context = new FilmContext())
            {
                context.Entry<T>(this.Read(id)).State = EntityState.Deleted;
                context.SaveChanges();
            }
        }
    }
}
