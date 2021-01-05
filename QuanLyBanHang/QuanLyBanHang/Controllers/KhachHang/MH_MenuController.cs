using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuanLyBanHang.Controllers.KhachHang
{
    public class MH_MenuController : Controller
    {
        // GET: MH_Menu
        public ActionResult ManHinh_Menu()
        {
            return View();
        }
    }
}