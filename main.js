
const header = document.getElementsByTagName("header")[0];
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const menuItems = document.getElementsByTagName("a");
const main = document.getElementsByTagName("main")[0];

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("show-on-mobile");
}, false);

let menuItemClicked = false;
for (menuItem of menuItems) {
  menuItem.addEventListener("click", () => {
    menuItemClicked = true;
    menu.classList.remove("show-on-mobile");
    setTimeout(function() {
      menuItemClicked = false;
    }, 1000);
  }, false);
}

header.addEventListener("mouseleave", () => {
  menu.classList.remove("show-on-mobile");
}, false);

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    menu.classList.remove("show-on-mobile");
  }
}, false);

var sectionObserver = new IntersectionObserver(function(entries) {
  for (entry of entries) {
    if(entry.isIntersecting === true) {
      if (!menuItemClicked)
        window.location.hash = entry.target.id;
    }
  }
}, { threshold: [0.9] });

document.querySelectorAll("main section").forEach(function (element) {
  sectionObserver.observe(element);
  console.log(element);
});