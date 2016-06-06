/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#494e8f',
    lineColor: '#494e8f'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



// jQuery plugin example:
//$(document).ready(function() {
//  $('#particles').particleground({
//    dotColor: '#feeeed',
//    lineColor: '#feeeed'
//  });
//  $('.intro').css({
//    'margin-top': -($('.intro').height() / 2)
//  });
//});
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

