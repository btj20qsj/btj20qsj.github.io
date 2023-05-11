Message();
document.Cookie =  "SameSite=lax";
var i = 0;
const msglocate = [];
var TodaysDate = new Date();
var rerun = 0;
function Message(){
    fetch('ASSETS/announcements.json')
    .then(function (response) {return response.json();})
    .then(function (data) 
    {
        if(rerun == 0)
        {
        for(a = 1; a < data.length; a++)
        {
            if (TodaysDate >= Date.parse(data[a].RunFrom) && TodaysDate <= Date.parse(data[a].RunTill) )
            {
                msglocate.push(a);
                rerun = 1;
            }   
        }          
        }
        if(msglocate.length == 0)
        {
            msglocate.push("0");
        }
        var mainContainer = document.getElementById("Message-Container"); 
        const Message = document.getElementById("Message");
        const NoticeFrom = document.getElementById("Attention");
        Message.remove();NoticeFrom.remove();
        var div = document.createElement("div"); 
        var corner = document.createElement("div"); 
        div.innerHTML = '<div class="text">'+data[msglocate[i]].Announcement + '</div>';
        div.setAttribute("id","Message");
        corner.innerHTML = data[msglocate[i]].MsgFrom;
        corner.setAttribute("id","Attention");
        mainContainer.appendChild(corner); 
        mainContainer.appendChild(div); 
        i++;
        if(i == msglocate.length)
        {
            i = 0;
            console.log("back to start");
        }

    }) 
    .catch(function (err) {console.log('error: ' + err);});
    
}
setInterval(Message,45000);