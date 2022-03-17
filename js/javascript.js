function blink(){
    document.getElementById("notification").style.color="black"
    setTimeout(function(){document.getElementById("notification").style.color="red"},500)
}
function clock() {
    let hours = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
   
    document.getElementsByClassName("hour1")[0].src="images/0" + Math.floor(hours/10) + ".gif"
    document.getElementsByClassName("hour2")[0].src="images/0" + hours%10 + ".gif"
    document.getElementsByClassName("minute1")[0].src="images/0" + Math.floor(minute/10) + ".gif"
    document.getElementsByClassName("minute2")[0].src="images/0" + minute%10 + ".gif"
    document.getElementsByClassName("second1")[0].src="images/0" + Math.floor(seconds/10) + ".gif"
    document.getElementsByClassName("second2")[0].src="images/0" + seconds%10 + ".gif"

    var notify = document.querySelector('notification')
        if(hours>=0 && hours<12)
        {
            document.getElementById("notification").textContent = 'Chào buổi sáng'
        }
        else if(hours>=12 && hours<17)
        {
            document.getElementById("notification").textContent = 'Chào buổi chiều'
        }
        else
        {
            document.getElementById("notification").textContent = 'Chào buổi tối'
        }

}

setInterval(clock,0)
setInterval(blink,1000)