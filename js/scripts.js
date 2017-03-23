//WOW

new WOW().init();

$(window).on('load', function(){
	$.stellar();
});

//SCROLLTO
$(function() {
  $('[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      	window.setTimeout(function(){


	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
        }, 400)
        return false;
      }
    }
  });
});

//SCROLLTO BINDING
$('label').click(function(e) {
    e.preventDefault();
    var For = $(this).attr('for');
    $('#' + For).trigger('click');
});


//SCROLLTO BINDING
CountDownTimer('2017-04-06', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);

        document.getElementById(id).innerHTML = '(' + days + ' days left)';
    }

    timer = setInterval(showRemaining, 1000);
}





