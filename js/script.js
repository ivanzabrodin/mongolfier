$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
 
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      margin: 20,
      loop: true
 
  });

  $('.smoothScroll').click(function(event) {
    event.preventDefault();
    var href=$(this).attr('href');
    var target=$(href);
    var top=target.offset().top;
    $('html,body').animate({
      scrollTop: top
    }, 1000);
    });

  $(function () {
    var austDay = new Date();                               // сегодняшняя дата
    austDay = new Date(austDay.getFullYear() + 1, 0, 1);    // дата, до которой считаем
    // console.log(austDay);
    $('#countdown').countdown({until: austDay, padZeroes: true});
  });

  var scene =document.getElementById('fly__scene')
  var parallax = new Parallax(scene);
 
});



