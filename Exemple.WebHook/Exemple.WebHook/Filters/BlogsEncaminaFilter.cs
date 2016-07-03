using System.Collections.ObjectModel;
using System.Threading.Tasks;
using Microsoft.AspNet.WebHooks;

namespace Exemple.WebHook.Filters
{
    public class BlogsEncaminaFilter: IWebHookFilterProvider
    {
        private readonly Collection<WebHookFilter> filters = new Collection<WebHookFilter>
    {
        new WebHookFilter { Name = "DesarrollandoSobreSharePoint", Description = "Nuevo Post."},
        new WebHookFilter { Name = "PorUnaNubeSostenible", Description = "Nuevo Post."},
    };
        public Task<Collection<WebHookFilter>> GetFiltersAsync()
        {
            return Task.FromResult(this.filters);
        }
    }
}