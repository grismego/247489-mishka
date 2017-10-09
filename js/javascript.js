var menu_open = document.querySelector(".header-nav__toggle--open");
var menu_close = document.querySelector(".header-nav__toggle--close");
var menu = document.querySelector(".header-nav__toggle");
var site_list = document.querySelector(".site-list");

function remove_css_btn() {
  var menu = document.querySelector(".header-nav__toggle");
  if (menu.classList.contains("header-nav__toggle--no-js")) {
    menu.classList.remove("header-nav__toggle--no-js");
  }
}
remove_css_btn();

function remove_css_menu() {
  var site_list = document.querySelector(".site-list");
  if (site_list.classList.contains("site-list--no-js")) {
    site_list.classList.remove("site-list--no-js");
  }
}
remove_css_menu();

menu_open.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("header-nav__toggle--close");
  site_list.classList.toggle("site-list--show");
});
