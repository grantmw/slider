$(document).ready(function(){

  var update = document.getElementById("slider").oninput = function(){
    var input_value = $('#slider').val();
    $('.handle').html(input_value)
    $('.slidevalue').css('left', input_value + '%')
    $('.pop').html(input_value)
  };

  $('input').bind("mousedown mouseup", function(){
    $('.handle').toggle()
    $('.pop').toggle()
  })

  var moving

  var move = function(direction){
    if (direction === "add"){
      $("#slider").val(parseInt($("#slider").val())+5)
    }
    else{
      $("#slider").val(parseInt($("#slider").val())-5)
    }
    update();
  };

  $('.slidercontainer')
  .on('mousedown', '.subtract', function(){
    moving = setInterval(function(){
      move("subtract")
    },200);
  })
  .on('mousedown', '.add', function(){
    moving = setInterval(function(){
      move("add")
    },200);
  })
  .on('mouseup', '.button', function(){
    clearInterval(moving);
  }) 
  .on('click', '.subtract', function(){
    move("subtract")
  }) 
  .on('click', '.add', function(){
    move("add")
  });

});

