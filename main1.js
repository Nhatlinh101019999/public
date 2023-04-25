var menu = document.getElementById("menu-icon");
var icon = document.querySelector('.nav-list')
menu.onclick = function(){
  menu.classList.toggle('bx-x');
  icon.classList.toggle('open')
}