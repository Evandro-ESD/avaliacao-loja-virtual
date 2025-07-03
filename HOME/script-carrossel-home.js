// INÍCIO JS Carrossel Home
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}
// FIM JS Carrossel Home

// esconder h1
window.addEventListener('scroll', function(){
  const header = document.querySelector("header")

  if(window.scrollY > 140){
    header.classList.add('scrolled')
    // alert('funciona!!!')
  }
  else{
    header.classList.remove('scrolled')
  }
})
