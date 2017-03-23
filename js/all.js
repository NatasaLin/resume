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
    svg.style.transformOrigin = (0,0)

    
    
  }, false);



var initTopPosition= $('#logosvg').offset().top;   
$(window).scroll(function(){
    if($(window).scrollTop() > initTopPosition)
        $('#logosvg').css({'position':'fixed','top':'-105px'});
    else
        $('#logosvg').css({'position':'absolute','top':initTopPosition+'px'});
});
    

var aboutTopPosition= $('#about').offset().top;   
$(window).scroll(function(){
    if($(window).scrollTop() > aboutTopPosition){
        $('.navbar').css({'z-index':'99'});
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


//    $("#timeline").bind('inview', function (event, visible) {
//        if (visible === true) {
//            if ($(this).hasClass('init')) {
//                $(this).removeClass('init');
//                init_timeline();
//            }
//            if (!timeline_move) timeline_move = setInterval(function () {
//                move_timeline();
//            }, timeline_speed);
//        }
//        else {
//            clearInterval(timeline_move);
//            timeline_move = false;
//        }
//    });
//    $("#timeline .bar").hover(function () {
//        clearInterval(timeline_move);
//        timeline_move = false;
//    }, function () {
//        if (!timeline_move) timeline_move = setInterval(function () {
//            move_timeline();
//        }, timeline_speed);
//    });
//    $("#timeline-section .span").bind('inview', function (event, visible) {
//        if (visible === true) {
//            if ($("#timeline").children(".bar").data('style')) {
//                var style = $("#timeline").children(".bar").data('style');
//                $("#timeline").children(".bar").attr('style', style).data('style', false);
//            }
//        }
//        else {
//            var style = $("#timeline").children(".bar").attr('style');
//            $("#timeline").children(".bar").removeAttr('style').data('style', style);
//        }
//    });
//
//function pop_timeline() {
//    if ($("#timeline").hasClass('static')) {
//        $("#timeline").find(".project").first().addClass('hovered');
//    }
//}
//
//function init_timeline() {
//    var bar = $("#timeline .bar");
//    var width = $(window).width();
//    var pop_point = width * 0.66;
//    bar.find('.project').removeClass('visible').each(function () {
//        var proj = $(this);
//        var line = $(this).children(".line");
//        var parentOffset = proj.offsetParent().position().left;
//        var projOffset = proj.position().left;
//        var trueOffset = parentOffset + projOffset + line.position().left;
//        line.css('height', 0);
//        if (trueOffset <= pop_point) {
//            line.animate({
//                'height': line.data('height')
//            }, 300, function () {
//                $(this).css('overflow', 'visible');
//                proj.addClass('visible');
//            });
//        }
//    });
//}
//
//function move_timeline() {
//    var bar = $("#timeline .bar");
//    var bar_width = bar.width();
//    var width = $(window).width();
//    var end = bar_width - width;
//    var pos = bar.data('pos');
//    var fade_speed = 600;
//    pos -= 1;
//    if (pos < -end) {
//        pos = -end;
//        clearInterval(timeline_move);
//        timeline_move = true;
//        bar.fadeOut(fade_speed, function () {
//            bar.css({
//                'transform': 'translate3d(0px, 0px, 0px)'
//                , 'opacity': 0
//                , 'display': 'flex'
//            }).data('pos', 0);
//            init_timeline();
//            bar.animate({
//                'opacity': 1
//            }, fade_speed, function () {
//                timeline_move = setInterval(function () {
//                    move_timeline();
//                }, timeline_speed);
//            });
//        });
//    }
//    else {
//        bar.css('transform', 'translate3d(' + pos + 'px, 0px, 0px)').data('pos', pos);
//        var pop_point = (width * 0.95) + Math.abs(pos);
//        bar.find('.project').not('.visible').each(function () {
//            var proj = $(this);
//            var line = $(this).children(".line");
//            var parentOffset = proj.offsetParent().position().left;
//            var projOffset = proj.position().left;
//            var trueOffset = parentOffset + projOffset + line.position().left;
//            if (trueOffset <= pop_point) {
//                line.animate({
//                    'height': line.data('height')
//                }, 300, function () {
//                    proj.addClass('visible');
//                });
//            }
//        });
//    }
//}
//  

 