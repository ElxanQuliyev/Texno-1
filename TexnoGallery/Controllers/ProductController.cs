﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TexnoGallery.ViewModel.Default;
using TexnoGallery.Models;
using System.Net;
using PagedList;


namespace TexnoGallery.Controllers
{
    public class ProductController : Controller
    {
        TexnoGalleryEntities db = new TexnoGalleryEntities();
        // GET: Product
        public ActionResult Product(int? id,int? subId, int Page = 1)
        {


            var selectPro =new List<Product>();
            if (id == null)   return RedirectToAction("Index", "Home");
            if (subId == null) {  
                selectPro = db.Products.Where(pr => pr.SubCategory.CategoryId == id).OrderByDescending(pr => pr.Id).ToList();
            }
            else
            {
                selectPro = db.Products.Where(pr => pr.SubCategory.CategoryId == id && pr.SubCategoryId == subId).OrderByDescending(pr=>pr.Id).ToList();
            }

            var defaultModel = new DefaultViewModel
            {
                CategoryName = db.Categories.ToList(),
                SubCategoryName = db.SubCategories.ToList(),
                aboutTech = db.AboutUs.FirstOrDefault(),
                productList = selectPro,
                OneCategory=db.Categories.Where(ca=>ca.Id==id).FirstOrDefault(),
                OneSubCategory=db.SubCategories.Where(sb=>sb.Id==subId).FirstOrDefault(),
                marka =db.Markas.Where(pr=>pr.SubCategoryId==subId).OrderByDescending(pr => pr.Id).ToList()                
            };
            ViewBag.proMax = db.Products.Where(sb=>sb.SubCategory.Category.Id==id).Max(pr=>pr.Price);
            ViewBag.proMin = db.Products.Where(sb => sb.SubCategory.Category.Id == id).Min(pr => pr.Price);
            ViewBag.subId = subId;
            ViewBag.catId = id;

            return View(defaultModel);
        }
        public ActionResult PcTopla()
        {
            var defaultModel = new DefaultViewModel
            {
                CategoryName = db.Categories.ToList(),
                SubCategoryName = db.SubCategories.ToList(),
                aboutTech = db.AboutUs.FirstOrDefault(),
            };
               return View(defaultModel);  
        }
        public ActionResult CheckOut()
        {
            var defaultModel = new DefaultViewModel
            {
                CategoryName = db.Categories.ToList(),
                SubCategoryName = db.SubCategories.ToList(),
                aboutTech = db.AboutUs.FirstOrDefault(),
            };
            return View(defaultModel);
        }
        public ActionResult Details(int? id, int? subId)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product SelectPro = db.Products.Find(id);
            if (SelectPro == null)
            {
                return HttpNotFound();
            }
            var defaultModel = new DefaultViewModel
            {
                productList=db.Products.Where(p=>p.SubCategory.Id==subId).ToList(),
                CategoryName = db.Categories.ToList(),
                SubCategoryName = db.SubCategories.ToList(),
                ProImage = db.ProductImages.Where(pri=>pri.ProductId==id).ToList(),
                ProductDetail = db.Products.FirstOrDefault(pr => pr.Id == id),
                //OptionPro=db.ProductOptions.Where(a=>a.Id==id).ToList(),
                aboutTech = db.AboutUs.FirstOrDefault(),
                OneCategory = db.Categories.Where(ca => ca.Id == id).FirstOrDefault(),
                OneSubCategory = db.SubCategories.Where(sb => sb.Id == subId).FirstOrDefault(),

            };
            ViewBag.subId = subId;
            ViewBag.catId = id;
            return View(defaultModel);
        }
        
    }
}