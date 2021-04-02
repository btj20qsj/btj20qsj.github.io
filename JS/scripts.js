/*3X3 Image gallery*/
var gallery = document.getElementById('planets');
fetch("https://raw.githubusercontent.com/btj20qsj/btj20qsj.github.io/main/JSON/artwork.json").then
(
    function(loaditems)
    {
        loaditems.json().then(
        function(thumbnails)
        {
            thumbnails.forEach(function(imageitem) //loop through creation of image thumbnails until end of JSON
            {
                var galleryImage= document.createElement('a');//container for the image
                var image = document.createElement('img');//the actual image
                // add the link to full size to the thumbnail
                galleryImage.setAttribute('href',imageitem.url); galleryImage.setAttribute('class', 'gallery-image'); galleryImage.setAttribute('target', '_blank');
                // load in the image to use for the thumbnail
                image.setAttribute('src', imageitem.url);image.setAttribute('alt', imageitem.caption);image.setAttribute('title', imageitem.caption);
            
                galleryImage.appendChild(image);
                gallery.appendChild(galleryImage);
            });
        });
    });
    
    var secondgallery = document.getElementById('history');
    fetch("https://raw.githubusercontent.com/btj20qsj/btj20qsj.github.io/main/JSON/gcse.json").then
(
    function(loaditems)
    {
        loaditems.json().then(
        function(thumbnails)
        {
            thumbnails.forEach(function(imageitem) //loop through creation of image thumbnails until end of JSON
            {
                var galleryImage= document.createElement('a');//container for the image
                var image = document.createElement('img');//the actual image
                // add the link to full size to the thumbnail
                galleryImage.setAttribute('href',imageitem.url); galleryImage.setAttribute('class', 'gallery-image'); galleryImage.setAttribute('target', '_blank');
                // load in the image to use for the thumbnail
                image.setAttribute('src', imageitem.url);image.setAttribute('alt', imageitem.caption);image.setAttribute('title', imageitem.caption);
            
                galleryImage.appendChild(image);
                secondgallery.appendChild(galleryImage);
            });
        });
    });
/*Image carousel*/

/*Recipe tabs*/
function openRecipe(evt, recipe) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Recipe");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    document.getElementsByClassName("explainer")[0].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(recipe).style.display = "block";
  evt.currentTarget.className += " active";
}

/*Background change */
function light()
{
    var background = document.getElementById("background"),
    context = background.getContext("2d"),
    width   = background.width = window.innerWidth,
    height  = background.height = window.innerHeight;
    //gradient
    var gradient = context.createLinearGradient(0,0,0,height);//top to bottom gradient, three distinct colours
    gradient.addColorStop(0,"#0C5F86");
    gradient.addColorStop(1,"#63B2C2");
    context.fillStyle = gradient; //background colour
    context.fillRect(0, 0, width, height);

    var text = document.getElementById("about")
    text.style.display = "none";
    document.getElementsByClassName("aboutlit")[0].style.display="block";
    setTimeout(function(){ document.getElementsByClassName("aboutlit")[1].style.display="block";}, 1000);
}
