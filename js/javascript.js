var menu_open = document.querySelector(".header-nav__toggle--open");
var menu_close = document.querySelector(".header-nav__toggle--close");
var menu = document.querySelector(".header-nav__toggle");
var site_list = document.querySelector(".site-list");


menu_open.addEventListener("click", function(event){
  event.preventDefault();
  menu.classList.toggle("header-nav__toggle--close");
  site_list.classList.toggle("site-list--show");
});
