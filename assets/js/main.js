$(document).ready(function() {
  $('.read-btn').click(function(){
    $('.cards').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.start-btn').click(function(){
    $('.start').toggleClass('show');
  });
});

$(document).ready(function() {
  $('.nav-btn').click(function(){
    $('.navbar').toggleClass('show');
    $('.brand-name').toggleClass('hide');
  });
});