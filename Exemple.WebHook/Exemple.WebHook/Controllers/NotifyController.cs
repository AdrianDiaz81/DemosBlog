using System.Threading.Tasks;
using System.Web.Mvc;

namespace Exemple.WebHook.Controllers
{
    [Authorize]
    public class NotifyController : Controller
    {
        [HttpPost]
        public async Task<ActionResult> Submit()
        {
            // Create an event with action 'event1' and additional data
            await this.NotifyAsync("DesarrollandoSobreSharePoint", new { Titulo = "Nuevo post" });

            return new EmptyResult();
        }
    }
}