var slideIndex = 1;

function showSlides(n) {
  var i;
  var varslide = document.getElementsByClassName("slideList");
  var vardot = document.getElementsByClassName("dotIndicator");
  if (n > varslide.length) {slideIndex = 1}    
  else if (n < 1) {slideIndex = varslide.length}
  for (i = 0; i < varslide.length; i++) {
      varslide[i].style.display = "none";  
  }
  for (i = 0; i < vardot.length; i++) {
      vardot[i].className = vardot[i].className.replace(" active", "");
  }
  varslide[slideIndex-1].style.display = "block";
  vardot[slideIndex-1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}