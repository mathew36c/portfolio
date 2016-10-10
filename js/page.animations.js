$('document').ready(function() {

    $('.burger').click(function() {
        $('.nav-menu').toggleClass("open");
        $('.menu-list').toggleClass("list-open");
        $('iframe').toggle();
        $('.logo').toggle();
    });

});

$.fn.extend({
  animateCss: function (animationName) {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  	$(this).addClass('animated ' + animationName);
  	}
});
