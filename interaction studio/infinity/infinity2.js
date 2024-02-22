/*$(function() {
  $("#vertical").mousewheel(function(event, delta) {
  this.scrollLeft -= (delta * 2);
  event.preventDefault();
  });
});*/


$.fn.isInViewport = function(options){
    viewportTop = $(window).scrollTop();
    viewportBottom = viewportTop + $(window).height();

    var settings = $.extend({
        delay: 0,
    }, options );

    var elementTop = $(this).offset().top + settings.delay;
    elementBottom = elementTop + this.outerHeight();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


function verticalSettings() { 
  var width = 0;
  var height = 0;
  $('#vertical li').each(function() {
      width += $(this).outerWidth( true );
      height += $(this).outerHeight( true );
  });
  var last = $('#vertical li:last-child').width();
  $('#vertical ul').css('width', width);
  $('.placeholder').css('height', width - last);
}

function verticalScrolling() { 
  var scroll = $(window).scrollTop();
  $('#vertical').each(function(){
    if ($('.placeholder').isInViewport()) {
      $('#vertical ul').css('transform','translateX(-'+(scroll)+"px)");
    }
  });
}


$(window).on('load resize scroll', function(e){
  e.preventDefault();
  verticalScrolling();
  verticalSettings();
});



/*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta; //controls the scroll wheel range/speed
    else if (event.detail) delta = -event.detail;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
var animationInterval = 1; //controls the scroll animation after scroll is done
  var scrollSpeed = 1; //controls the scroll animation after scroll is done

if (end == null) {
  end = $(window).scrollTop();
  }
  end -= delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function () {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (scrollTop <= 0 || 
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          goUp && step > -1 || 
          !goUp && step < 1 ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step );
    }, animationInterval);
  }
}*/