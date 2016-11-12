$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$('#close').click(function() {
    $('#menu').fadeIn();
    document.getElementById("close").style.display="none";
    document.getElementById("close2").style.display="block";
});

$('#close2').click(function() {
    $('#menu').fadeOut();
    document.getElementById("close2").style.display="none";
    document.getElementById("close").style.display="block";
});
$('#smallMenuOpen').click(function() {   
    $('#smallDvcMenu').fadeIn();
});
$('#smallMenuClose').click(function() {
    $('#smallDvcMenu').fadeOut();
});