const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener(onclick, function(){
  navLinks.classList.toggle('active');
})
// menuIcon.onclick =() {
//   navLinks.classList.toggle('active');
// }