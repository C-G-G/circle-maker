// var $html = $('html');
var $body = $('body');

// generate a random top and left coordinate for div element
var randLeft = Math.random() * 1000;
var randTop = Math.random() * 1000;

// event listener that listens for keydown
$body.on('keydown', function () {

  // create a new div
  var $div = $('<div>');

  // add div to body, then assign a class 
  $body.append($div);
  $div.addClass('ball');

  // place div on the page on random position
  // $('.ball').css('left', randLeft);
  // $('.ball').css('top', randTop);
  $div.css('left', randLeft);
  $div.css('top', randTop);

});
