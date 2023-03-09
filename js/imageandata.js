appendData();
function appendData() 
{
    fetch('assets/people.json')
    .then(function (response) {return response.json();})
    .then(function (data) 
    {
        
        var mainContainer = document.getElementById("infocard"); 
        const element = document.getElementById("staffinfo");
        const imageremoval = document.getElementById("staffimage");
        element.remove();
        imageremoval.remove();
        var i = Math.floor(Math.random()*(data.length));                            //randomizes a number between 0 and the length of the file. 
        var div = document.createElement("div");    
        div.innerHTML = 
       '<h2>NAME:</h2><h3>'+ data[i].TeacherName+
       '</h3><h2>Email Address:</h2><h3>'+data[i].Email+
       '@bangor.ac.uk</h3><h2>Room Number:</h2><h3>'+data[i].RoomNum+
       '</h3><h2>Area of Study:</h2><h3>'+data[i].StudyArea+'</h3>';
        div.setAttribute("id","staffinfo");
        var img = document.createElement("img");
        img.setAttribute("id","staffimage");
        img.setAttribute("src","/assets/"+ data[i].image);
        mainContainer.appendChild(div);
        mainContainer.appendChild(img);                                             //adds the above to the container div
    })
    .catch(function (err) {console.log('error: ' + err);}); 
}
setInterval(appendData,6000);
