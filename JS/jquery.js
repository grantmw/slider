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

  var moving


  $('.slidercontainer')
  .on('mousedown', '.subtract', function(){
    moving = setInterval(function(){
      $("#slider").val(parseInt($("#slider").val())-5)
      update();
    },200);
  })
  .on('mousedown', '.add', function(){
    moving = setInterval(function(){
      $("#slider").val(parseInt($("#slider").val())+5)
      update();
    },200);
  })
  .on('mouseup', '.button', function(){
    clearInterval(moving);
  }) 
  .on('click', '.subtract', function(){
    $("#slider").val(parseInt($("#slider").val())-5)
    update();
  }) 
  .on('click', '.add', function(){
    $("#slider").val(parseInt($("#slider").val())+5)
    update();
  });

});

