var slideUpObj = {
    start : 0,
    end : 0,
    element : "",
    fps : 0,
    followup : null,
    initiate : function(){
        setTimeout(function(){     
        //console.log(slideUpObj.start);
        $(slideUpObj.element).css("margin-top",slideUpObj.start.toString()+"px");
        slideUpObj.start-=slideUpObj.fps;
        if(slideUpObj.start>slideUpObj.end){
            slideUpObj.initiate();
        }                          
        else{
                if(slideUpObj.followup != null)
                    slideUpObj.followup.initiate();
        } 
        },1);
    }
}
var slideDownObj = {
    start : 0,
    end : 0,
    element : "",
    fps : 0,
    followup : null,
    initiate : function(){    
        setTimeout(function(){                                     $(slideDownObj.element).css("margin-top",slideDownObj.start.toString()+"px");
        slideDownObj.start+=slideDownObj.fps;
        console.log(slideDownObj.start);
        if(slideDownObj.start<=slideDownObj.end)
            slideDownObj.initiate();
        else{
            if(slideDownObj.followup != null)
                slideDownObj.followup.initiate();
        }
        },1);
    }
}
$("#placeholder-screen").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
        console.log(fingerData[0].start.y);
        done = fingerData;
        if(distance<=50 && direction=="up" && phase=="end"){
            slideUpObj.start = 0;
            slideUpObj.end = -50;
            slideUpObj.fps = 1;
            slideUpObj.element = "#placeholder-screen";
            slideDownObj.start = -50;
            slideDownObj.end = 0;
            slideDownObj.fps = 1;
            slideDownObj.element = "#placeholder-screen";
            slideUpObj.followup = slideDownObj;
            slideUpObj.initiate();
        }
        if(direction=="up" && phase=="end" && distance>50){
            slideUpObj.start = 0;
            slideUpObj.end = -485;
            slideUpObj.fps = 5;
            slideUpObj.element = "#placeholder-screen";
            slideUpObj.followup = null;
            slideUpObj.initiate();
            //slideUp(i,j,5,0,0,0,"#placeholder-screen");
            //console.log("done");
        }
        if(distance>50 && direction=="down" && phase=="end" && fingerData[0].start.y<=50){
            console.log("dfaidhfl");
            console.log($(this).css("margin-top"));
        }
    }
,threshold:0
});
$("#login-pin").swipe({
    tap:function(event,target){
    console.log("ASDFAF");
    slideUp(480,310,3,0,0,0,"#keyboard-layout");
}});
