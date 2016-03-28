
function parallax() {
  var parallax_layer1 = document.getElementById('parallax_layer1');
  parallax_layer1.style.top = -(window.pageYOffset / 4) + 'px';
}
window.addEventListener("scroll", parallax, false);
