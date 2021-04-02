/*Image carousel W3School https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow*/
var carousel = document.getElementById('games');
fetch("https://raw.githubusercontent.com/btj20qsj/btj20qsj.github.io/main/JSON/artwork.json").then
(
    function(loaditems)
    {
        loaditems.json().then(
        function(thumbnails)
        {
            thumbnails.forEach(function(imageitem) //loop through creation of image thumbnails until end of JSON
            {
                
            });
        });
    });

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}
function showSlides(n) {
 var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}