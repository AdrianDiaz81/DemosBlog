using System.Threading.Tasks;
using Microsoft.AspNet.WebHooks;

namespace Exemple.WebHook.Handler
{
    public class TestHandler : WebHookHandler
    {
        public override Task ExecuteAsync(string receiver, WebHookHandlerContext context)
        {
            return Task.FromResult(true);
        }
    }
}