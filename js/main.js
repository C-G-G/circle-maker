// var $html = $('html');
var $body = $('body');

// event listener that listens for keydown
$('html').on('keydown', function () {

  // create a new div
  var $div = $('<div>');

  // add div to body, then assign a class
  $body.append($div);
  $div.addClass('ball');

  // generate random top and left coordinate for div element
  // var randLeft = Math.random() * 1000;
  // var randTop = Math.random() * 1000;

  // place div on the page on random position
  $div.css('left', Math.random() * 1000);
  $div.css('top', Math.random() * 1000);

});
