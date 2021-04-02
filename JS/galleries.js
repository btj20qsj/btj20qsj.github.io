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