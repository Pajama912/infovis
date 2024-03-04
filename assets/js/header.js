var opened = false;

d3.select('#header-nav-button').on('click', function () {
  if (opened) {
    opened = false;
    d3.select('#site-header').classed('opened', false);
    $("#site-header .nav-wrapper").stop().slideToggle({duration: 1000});
  } else {
    opened = true;
    d3.select('#site-header').classed('opened', true);
    $("#site-header .nav-wrapper").stop().slideToggle({duration: 1000});
  }
});

$('a[href^="#"]').on('click', function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
})