var timer;
var timerOn = false;
var time = 0;
var difference = 0;
var startTime;
var lastTime = 0;
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
    startTime = new Date();
    timer = setInterval(addTime, 1000)

  }
  function stopTimer() {
    clearInterval(timer);
    lastTime = time;
  }
  function addTime() {
    currentTime = new Date();
    difference = Math.floor(((currentTime.getTime() - startTime.getTime())/1000));
    time = lastTime + difference;
    $('#timer-seconds').text(time)
  }


});