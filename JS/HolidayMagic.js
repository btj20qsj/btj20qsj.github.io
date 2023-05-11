HolidayMagic();
document.Cookie =  "SameSite=lax";
function HolidayMagic() 
{
    var CSSlink = document.getElementById('EventStyle');
    var EventBgd = document.createElement('script');
    var festiveContainer = document.getElementById("FestiveObj");
    var TodaysDate = new Date();
    console.log(TodaysDate.getMonth);
    //To test theme set month check to current month
    if(TodaysDate.getMonth()==11)                                                               //for December run the festive theme
    {
        CSSlink.setAttribute('href','CSS/Style_Christmas.css');
        EventBgd.setAttribute('src',' ');
        document.body.appendChild(EventBgd);
        festiveContainer.replaceChildren();
        festiveContainer.innerHTML = 
        '<div class="Tree">'+
        '<div class="TreeTop"></div>'+
        '<div class="TreeMiddle"></div>'+
        '<div class="TreeBottom"></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 15%;top: 35%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 39%;top: 46%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 3%;top: 20%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 2%;top: 55%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 35%;top: 68%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 8%;top: 70%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 17%;top: 80%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 35%;top: 88%;"><div class="shine"></div></div>'+
        '<div class="deco col'+getRandomInt(3)+'"style="left: 4%;top: 92%;"><div class="shine"></div></div>'+
        '</div>'+
        '<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>'+
        '<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>'+
        '<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>'+'<div class="snowflake">❆</div>';
    }
    else if(TodaysDate.getMonth()==9)                                                           //for October run the spooky theme
    {
        CSSlink.setAttribute('href','CSS/Style_Halloween.css');
        EventBgd.setAttribute('src','JS/Lighting.js');
        festiveContainer.replaceChildren();
        document.body.appendChild(EventBgd);
        festiveContainer.innerHTML = 
        '<div class="pumpkin">'+
        '<div class="surface"></div>'+
        '<div class="stem"></div>'+
        '<div class="eye left"></div>'+
        '<div class="eye right"></div>'+
        '<div class="mouth left"></div>'+
        '<div class="mouth right"></div>'+
        '<div class="teeth"></div>'+
        '</div>';
    }
    else if(TodaysDate.getMonth()==1 && TodaysDate.getDate()>=7 && TodaysDate.getDate()<=14 )   //for the week leading up to valentines day have the romantic theme
    {
        CSSlink.setAttribute('href','CSS/Style_Valentines.css');
        EventBgd.setAttribute('src','JS/lovehearts.js');
        festiveContainer.replaceChildren();        
        document.body.appendChild(EventBgd);
        festiveContainer.innerHTML = 
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(5) +'s; animation-duration:60s; margin-left:'+getRandomInt(50)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(15) +'s; animation-duration:60s; margin-left:'+getRandomInt(50)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(5) +'s; animation-duration:60s; margin-left:'+getRandomInt(100)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(15) +'s; animation-duration:60s; margin-left:'+getRandomInt(100)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(5) +'s; animation-duration:40s; margin-left:'+getRandomInt(50)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(15) +'s; animation-duration:40s; margin-left:'+getRandomInt(50)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(5) +'s; animation-duration:40s; margin-left:'+getRandomInt(100)+'vw;" />'+
        ' <img alt="heart" src="/ASSETS/Love-clipart-free-clipart-images.png" class="FlyingHearts" style="width: 400px; animation-delay:-'  + getRandomInt(15) +'s; animation-duration:40s; margin-left:'+getRandomInt(100)+'vw;" />';
    }
    else if(TodaysDate.getMonth()==10 && TodaysDate.getDate()>=1 && TodaysDate.getDate()<=5 )   //from the end of halloween to guy fawkes night have fireworks included 
    {
        CSSlink.setAttribute('href',' ');
        EventBgd.setAttribute('src',' ');
    }
    else                                                                                        // if it isnta any important date just use the basic theme
    {
        CSSlink.setAttribute('href',' ');
        EventBgd.setAttribute('src',' ');
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max + 1);
      }
}