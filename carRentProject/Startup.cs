using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(carRentProject.Startup))]
namespace carRentProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
