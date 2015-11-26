$('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1000);
    });

$(document).ready(function(){
	
	$('.js-tab-link').on('click', tabToggle);

	function tabToggle(e) {
	e.preventDefault();

	$('.js-tab-link').removeClass('tab-link-active');
	$(this).addClass('tab-link-active');

	$('.tab-item').removeClass('tab-item-active');
	$(this.hash).addClass('tab-item-active');
	}

});