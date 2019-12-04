using System.Net;
using System.ServiceModel;
using System.Threading;
using System.Threading.Tasks;
using CourseWork.Models.SOAP;
using CourseWork.Services.SOAP;
using CourseWork.Services.XMLRPC;
using Horizon.XmlRpc.AspNetCore.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using SoapCore;

namespace CourseWork
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
            services.AddGrpc();
            services.AddSoapCore();
            services.AddCors();
            services.AddXmlRpc();
            services.TryAddSingleton<ISampleService, SampleService>();
            services.TryAddSingleton<IUserServiceSoap, UserServiceSoap>();

            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyOrigin()
                                          .AllowAnyHeader()
                                          .AllowAnyMethod()
                                          .WithExposedHeaders()
            );

            app.UseHttpsRedirection();

            app.UseRouting();

            // app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSoapEndpoint<ISampleService>("/Service.asmx", new BasicHttpBinding(), SoapSerializer.XmlSerializer);
            app.UseSoapEndpoint<IUserServiceSoap>("/api/soap/user.asmx", new BasicHttpBinding(), SoapSerializer.XmlSerializer);

            var listener = new HttpListener();
            listener.Prefixes.Add("http://127.0.0.1:5678/");
            listener.Start();

            Task.Run(() =>
            {
                while (true)
                {
                    var service = new UserServiceXmlRpc();
                    ThreadPool.QueueUserWorkItem((object context) =>
                    {
                        var httpContext = (context as HttpListenerContext);
                        httpContext.Response.Headers["Access-Control-Allow-Origin"] = "*";
                        httpContext.Response.AddHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                        httpContext.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
                        httpContext.Response.AddHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
                        httpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
                        service.ProcessRequest(httpContext);
                    }, listener.GetContext());
                }
            });
        }
    }
}
