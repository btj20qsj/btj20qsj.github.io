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
    if(TodaysDate.getMonth()==4)                                                               //for December run the festive theme
    {
        CSSlink.setAttribute('href','CSS/Style_Christmas.css');
        EventBgd.setAttribute('src','JS/xmasLights.js');
        document.body.appendChild(EventBgd);
        festiveContainer.replaceChildren();
        festiveContainer.innerHTML = 
        '<div class="Tree">'+
        '<div class="TreeTop"></div>'+
        '<div class="TreeMiddle"></div>'+
        '<div class="TreeBottom"></div>'+
        '<div class="deco col1"><div class="shine"></div></div>'+
        '<div class="deco col2"><div class="shine"></div></div>'+
        '<div class="deco col3"><div class="shine"></div></div>'+
        '<div class="TreeStump"></div>'+
        '</div>';
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
        EventBgd.setAttribute('src','');
    }
    else if(TodaysDate.getMonth()==10 && TodaysDate.getDate()>=1 && TodaysDate.getDate()<=5 )   //from the end of halloween to guy fawkes night have fireworks included 
    {
        CSSlink.setAttribute('href','CSS/Style_Fawkes.css');
        EventBgd.setAttribute('src','');
    }
    else                                                                                        // if it isnta any important date just use the basic theme
    {
        CSSlink.setAttribute('href','CSS/Style_Normal.css');
        EventBgd.setAttribute('src','');
    }
}
