using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using carRentProject.Models;

namespace carRentProject.Controllers
{
    public class DataController : Controller
    {
        [HttpPost]
        public ActionResult getLoginData(UserModel obj)
        {
            CarRentEntities db = new CarRentEntities();
            var user = db.Users.FirstOrDefault(x => x.login.Equals(obj.Login) && x.password.Equals(obj.Password));
            return new JsonResult { Data = user, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}