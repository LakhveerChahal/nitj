var timer;
function anim(){                    
    objdiv=document.getElementById("contain");
    prev=objdiv.scrollTop;
    objdiv.scrollTop=objdiv.scrollTop+1;
    if(prev==objdiv.scrollTop)
        {
            objdiv.scrollTop=0;
        }
    timer=setTimeout('anim()',25);
}

$(document).ready(function(){
    anim();
    $('#upeventbtn').css("background","#49274a");
    $("#contain").mouseover(function(){
            clearTimeout(timer);
    });
    $("#contain").mouseout(function(){
       anim(); 
    });
    var btns = document.getElementsByClassName("btns");
    for(var i=0; i<btns.length; i++){
        btns[i].addEventListener("click",function(){
            var current = document.getElementsByClassName("btnactive");
            $('#'+current[0].value).css("display","none");
            current[0].className = current[0].className.replace("btnactive","");
            this.className += " btnactive";
            $('#'+this.value).fadeIn();
        });
    }
    var recbtns = document.getElementsByClassName("recbtn");
    for(var i=0; i<recbtns.length; i++){
        recbtns[i].addEventListener("click",function(){
            var current = document.getElementsByClassName("recbtnactive");
            $('#'+current[0].value).css("display","none");
            current[0].className = current[0].className.replace("recbtnactive","");
            this.className += " recbtnactive";
            $('#'+this.value).fadeIn();
        });
    }
});