//add your code here
//dont need return

$(document).ready(function(){


  doMath();

});

  var num1 = $('#number1');
  var num2 = $('#number2');
  var operator = $('#operation');


function doMath(){
  //gets information when "=" button is clicked
  $('#equals').on('click', function(){
    //can also use .click()
    num1 = parseFloat(num1.val());
    //num1 = Number.parseInt(num1.val())
    num2 = parseFloat(num2.val());
    operator = operator.val();
    result(operator, num1, num2);
  });
}  

function result(operator, num1, num2) {
  //validate calls this function
  if (operator == '+'){
    $('#result').html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    $('#result').html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '*'){
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
  else if (operator == '/'){
    $('#result').html(num1 * num2);
    return num1 / num2;
  }
  else{
    $('#result').html("Unable to read input");
    return 'Unable to read input'
  }
}

function validate(operator, num1, num2) {
  //debugger;
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, num1, num2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}