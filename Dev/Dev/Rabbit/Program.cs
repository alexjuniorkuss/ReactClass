using Rabbit.Context;
using Rabbit.Models;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;

namespace Rabbit
{
    class Program
    {
        static void Main(string[] args)
        {
    
            var factory = new ConnectionFactory() { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            using (var channel = connection.CreateModel())
            {
                var consumer = new EventingBasicConsumer(channel);
                consumer.Received += (model, ea) =>
                {
                    var body = ea.Body.ToArray();
                    var dev = System.Text.Json.JsonSerializer.Deserialize<Dev>(body);
                    Console.WriteLine(" [x] Received {0}", dev.Name);
                    using (var context = new DevContext())
                    {
                        context.Set<Dev>().Add(dev);
                        context.SaveChanges();
                    }
                };
                channel.BasicConsume(queue: "product_queue",
                                                            autoAck: true,
                                                            consumer: consumer);
                Console.WriteLine(" Press [enter] to exit.");
                Console.ReadLine();
            }

        }
    }
}
