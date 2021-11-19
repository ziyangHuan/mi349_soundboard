var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')

first.addEventListener('click', function () {
  var firstSound = new Audio('first.wav');
  firstSound.play();
  })
  second.addEventListener('click', function () {
  var secondSound = new Audio('second.wav');
  secondSound.play();
  })
  third.addEventListener('click', function () {
  var thirdSound = new Audio('third.wav');
  thirdSound.play();
  })


  first.addEventListener('mouseenter', function () {
    var firstSound = new Audio('button.wav');
    firstSound.play();
    })
    second.addEventListener('mouseenter', function () {
    var secondSound = new Audio('button.wav');
    secondSound.play();
    })
    third.addEventListener('mouseenter', function () {
    var thirdSound = new Audio('button.wav');
    thirdSound.play();
    })