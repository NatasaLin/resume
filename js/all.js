$(document).ready(function() {
    
    $("ul.designs li:eq(0)").fadeIn(500).css('display','block').delay(3500).fadeOut(500)
    
    var n=0, clock=setInterval(auto,4500)
        
    function auto(){
        n++
        if(n>4){
            n=0
        }
        $("ul.designs li:eq("+n+")").fadeIn(500).css('display','block').delay(3500).fadeOut(500);
    
    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
        clearInterval(clock);
        $("ul.designs li").css('display','block');
        $(".rightnav").toggleClass('open');
        $("#coverbox").toggleClass('open');
	}); 
        
    }
   
  
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



var initTopPosition= $('#logosvg').offset().top;   
$(window).scroll(function(){
    if($(window).scrollTop() > initTopPosition)
        $('#logosvg').css({'position':'fixed','top':'-120px'});
    else
        $('#logosvg').css({'position':'absolute','top':initTopPosition+'px'});
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


