$(document).ready(function(){

  var update = document.getElementById("slider").oninput = function(){
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

  $('.slidercontainer')
  .on('mousedown', '.subtract', function(){
    $("#slider").val($("#slider").val()-5)
    update()
  })
  .on('mousedown', '.add', function(){
    console.log('hi')
    $("#slider").val(parseInt($("#slider").val())+5)
    update()
  })


});