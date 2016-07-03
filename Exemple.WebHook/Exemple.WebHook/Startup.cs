using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Exemple.WebHook.Startup))]
namespace Exemple.WebHook
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
