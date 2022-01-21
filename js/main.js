// var $html = $('html');
var $body = $('body');

// event listener that listens for keydown
$body.on('keydown', function () {

  // create a new div
  $body.append('<div class="ball"></div>');

  // generate a random top and left coordinate for div element
  var randLeft = Math.random() * 1000;
  var randTop = Math.random() * 1000;

  // place div on the page on random position
  $('.ball').css('left', randLeft);
  $('.ball').css('top', randTop);

});
