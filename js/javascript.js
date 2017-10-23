var menu_open = document.querySelector(".header-nav__toggle--open");
var menu_close = document.querySelector(".header-nav__toggle--close");
var menu = document.querySelector(".header-nav__toggle");
var site_list = document.querySelector(".site-list");
var modal_window = document.querySelectorAll(".js-modal");
var modal = document.querySelector(".modal");
var modal_block = document.querySelector(".modal__window")


for (var i = 0; i < modal_window.length; i++) {
  modal_window[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");

    if (document.querySelector(".modal--show")) {
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        modal.classList.remove("modal--show");
      }
    });
    }

  modal.addEventListener("click", function() {
    modal.classList.remove("modal--show");
  });
  });
};

modal_block.addEventListener("click" ,function(evt) {
  evt.stopPropagation();
});
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
