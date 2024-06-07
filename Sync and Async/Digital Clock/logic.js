let hrsEle = document.getElementById('hrs')
let minsEle = document.getElementById('mins')
let secsEle = document.getElementById('secs')
let ampm = document.getElementById('ampm')

function padZero(num) {
    return num < 10 ? '0' + num : num
}

function displayTime() {
    let date = new Date()
    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    console.log(`hrs = ${hrs}, mins = ${mins}, secs = ${secs}`)
    if(hrs > 12) {
        hrs = hrs - 12
        ampm.innerHTML = 'PM'
    }
    hrsEle.innerHTML = padZero(hrs)
    minsEle.innerHTML = padZero(mins)
    secsEle.innerHTML = padZero(secs)
}

setInterval(displayTime, 500)
