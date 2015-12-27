using Microsoft.AspNet.Mvc;

namespace webapp.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}
	}
}
