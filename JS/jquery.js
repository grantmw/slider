$(document).ready(function(){

  document.getElementById("slider").oninput = function(){
    var input_value = $('#slider').val();
    $('.handle').html(input_value)
    $('.slidevalue').css('left', input_value + '%')
    $('.pop').html(input_value)

  };


  $('.inputcontainer')
  .on('mousedown','input', function(){
    $('.handle').css('display','none')
    $('.pop').css('display','block')
  })
  .on('mouseup','input', function(){
    $('.handle').css('display','block')
    $('.pop').css('display','none')
  });


});