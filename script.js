let myHour = document.querySelector(".hour")
let myMinute = document.querySelector(".minute")
let mySeconds = document.querySelector(".second")

function myClock(){

    var datee = new Date()
    var seconds = datee.getSeconds()
    var minutes = datee.getMinutes()
    var hours = datee.getHours()

  const hourRotation = 30 * (hours % 12) + 0.5 * minutes;
  const minuteRotation = 6 * minutes + 0.1 * seconds;
  const secondRotation = 6 * seconds;


    myHour.style.transform =`rotate(${hourRotation}deg)`
    myMinute.style.transform =`rotate(${minuteRotation}deg)`
    mySeconds.style.transform =`rotate(${secondRotation}deg)`

}

setInterval(myClock,1000)