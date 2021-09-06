using Data.Context;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class BaseRepository<M> where M : BaseModel
    {
        M repo = Activator.CreateInstance<M>();
        //public void Create(M model)
        //{
        //    using (var context = new DevContext()) 
        //    {
        //        context.Set<M>().Add(model);
        //        context.SaveChanges();
        //    }
        //}
        public void Create(M model)
        {
            //var factory = new ConnectionFactory() { HostName = "192.168.0.174" };
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                channel.QueueDeclare(
                        queue: "product_queue",
                        durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                        );

                string message = System.Text.Json.JsonSerializer.Serialize(model);
                var body = Encoding.UTF8.GetBytes(message);
                channel.BasicPublish(exchange: "",
                                                routingKey: "product_queue",
                                                basicProperties: null,
                                                body: body);
            }

        }
        public List<M> Read()
        {
            using (var context = new DevContext())
            {
                return context.Set<M>().ToList();
            }
        }
        public M Read(int id)
        {
            using (var context = new DevContext())
            {
                return context.Set<M>().Find(id);
            }
        }
        public void Update(M model)
        {
            using (var context = new DevContext())
            {
                context.Entry<M>(model).State = EntityState.Modified;
                context.SaveChanges();
            }
        }
        public void Delete(int id)
        {
            using (var context = new DevContext())
            {
                context.Entry<M>(this.Read(id)).State = EntityState.Deleted;
                context.SaveChanges();
            }
        }
    }
}
