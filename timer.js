var timer;
var timerOn = false;
var time = 0;
$( document ).ready(function() {
  $( '#start_stop' ).click(function() {
    timerOn = !timerOn;
    if (timerOn) {
      $(this).text('Stop');
      startTimer();
    } else {
      $(this).text('Start');
      stopTimer();
    }
  });

  function startTimer() {
    timer = setInterval(addTime, 1000)
  }
  function stopTimer() {
    clearInterval(timer);
  }
  function addTime() {
    time += 1000;
    $('#timer-seconds').text(time)
  }


});