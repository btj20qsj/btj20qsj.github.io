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
