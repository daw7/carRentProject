using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.Web.Mvc;
using carRentProject.Models;

namespace carRentProject.Controllers
{
    public class EmailsController : Controller
    {
        //
        // GET: /Email/ 

        public ActionResult Email()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SendEmail(Email em)
        {
            MailMessage mail = new MailMessage();
            mail.To.Add("wypozyczalniasam@gmail.com");
            mail.From = new MailAddress("wypozyczalniasam@gmail.com");
            string temat = "Nazwa: " + em.name + ", E-mail: " + em.email;
            mail.Subject = temat;
            string Body = em.text;
            mail.Body = Body;
            mail.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential
            ("wypozyczalniasam", "janusz05");// Enter seders User name and password
            smtp.EnableSsl = true;
            smtp.Send(mail);
            return Json(new { status = "Email pomyślnie wysłany" });
        }
    }
}