$(document).ready(function() {
    var bnText = ["Web Design", "Graphic Design", "Illustrations", "Films", "Handicrafts"];
    var n=0
//    for(i=0;i<5;i++){
//        $(".dot-"+i+"").click({id:i}, function(e){
//            n = e.data.id
//            change()
//            clearInterval(clock)
//            clock = setInterval(auto, 10000)
//        })
//    }
    $(".dot-0").click(function(){
        n = 0
        change()
        clearInterval(clock)
        clock = setInterval(auto, 10000)
    })
    $(".dot-1").click(function(){
        n = 1
        change()
        clearInterval(clock)
        clock = setInterval(auto, 10000)
    })
    $(".dot-2").click(function(){
        n = 2
        change()
        clearInterval(clock)
        clock = setInterval(auto, 10000)
    })
    $(".dot-3").click(function(){
        n = 3
        $(".slider").css({"width":imgw, "height":imgh, "background": "black", "background-size": "contain"})
        $("#player").css("visibility","visible").fadeIn(500)
        $("ul.designs li").fadeOut(500, function(){
            $(this).text(bnText[n]).fadeIn(500)
        })
        //$("#menudot").css({"top": ""+menuTop+"px"})
        $("#menudot span").css("background-color", "#4A4A4A").css("border", "4px solid white")
        $(".dot-"+n+"").css("background-color", "white").css("border", "8px solid #33CCCC")
        clearInterval(clock)
        clock = setInterval(auto, 62000)
    })
    $(".dot-4").click(function(){
        n = 4
        change()
        clearInterval(clock)
        clock = setInterval(auto, 10000)
    })
    
    var clock = setInterval(auto, 9500)
    $(".slider img").mouseover(function(){
        clearInterval(clock)
    })
    $(".slider img").mouseout(function(){
        clock = setInterval(auto, 9500)
    })
    function auto(){
        n++
        if(n>4){
            n=0
        }
        change()
    }
    var menuTop = parseFloat($("#menudot").css("top"))-imgh
    function change(){
        $("#player").css({'visibility': 'hidden'})
        $(".slider").css({"width":imgw, "height":imgh, "background": "url(images/bnpic"+n+".jpg) no-repeat", "background-size": "contain"})
        $(".slider img").fadeOut(500, function(){
            $(this).attr("src", "images/bnpic"+n+".jpg").fadeIn(500)
        })
        $("ul.designs li").fadeOut(500, function(){
            $(this).text(bnText[n]).fadeIn(500)
        })
        //$("#menudot").css({"top": ""+menuTop+"px"})
        $("#menudot span").css("background-color", "#4A4A4A").css("border", "4px solid white")
        $(".dot-"+n+"").css("background-color", "white").css("border", "8px solid #33CCCC")
    }
    
    
    
    
//    $("ul.designs li:eq(0)").fadeIn(500).css('display','block').delay(3500).fadeOut(500)
    
//    var n=0, clock=setInterval(auto,4500)
//        
//    function auto(){
//        n++
//        if(n>4){
//            n=0
//        }
//        $("ul.designs li:eq("+n+")").fadeIn(500).css('display','block').delay(3500).fadeOut(500);
//    
//    $('#nav-icon').click(function(){
//		$(this).toggleClass('open');
//        clearInterval(clock);
//        $("ul.designs li").css('display','block');
//        $(".rightnav").toggleClass('open');
//        $("#coverbox").toggleClass('open');
//	}); 
//        
//    }
   
  
window.addEventListener( 'scroll', function() {
       
    var box = document.getElementById('logobox'),
      svg = document.getElementById('logosvg'),
      dockHeight = window.innerHeight - 100,
      dockWidth = window.innerWidth,
      boxBottom = window.scrollY ||  document.documentElement.scrollTop,
      minScale = 0.5;
       
    if(window.scrollY > dockHeight){
     boxBottom = dockHeight;
    }
        
    transformValue = 'scale(' + (minScale + (1-minScale)*(1-boxBottom/dockHeight)) + ')';
    
    
//    box.style.top = 100 + 'px';
//    box.style.left = (35 - boxBottom/2) + 'px';
    svg.style.WebkitTransform = transformValue;
    svg.style.MozTransform = transformValue;
    svg.style.OTransform = transformValue;
    svg.style.transform = transformValue;
    svg.style.transformOrigin = (0,0,0)

    
    
  }, false);



var initTopPosition= $('#logobox').offset().top;   
$(window).scroll(function(){
    if($(window).scrollTop() > initTopPosition)
        $('#logobox').css({'position':'fixed','top':'-150px'});
    else
        $('#logobox').css({'position':'absolute','top':initTopPosition+'px'});
});
    

var aboutTopPosition= $('#about').offset().top;   
$(window).scroll(function(){
    if($(window).scrollTop() > aboutTopPosition){
        $('.navbar').css({'z-index':'2'});
        $('#nav-icon').css({'opacity':'1', 'transition':'opacity 2s', '-moz-transition':'opacity 2s', '-webkit-transition':'opacity 2s', '-o-transition':'opacity 2s'});
        $('#link').css({'opacity':'1', 'transition':'opacity 2s', '-moz-transition':'opacity 2s', '-webkit-transition':'opacity 2s', '-o-transition':'opacity 2s'});
    }
    else{
        $('.navbar').css({'z-index':'-99'});
        $('#nav-icon').css({'opacity':'0'});
        $('#link').css({'opacity':'0'});
    }
});

new WOW().init();


    
})


