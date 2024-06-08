let hrsEle = document.getElementById('hrs')
let minsEle = document.getElementById('mins')
let secsEle = document.getElementById('secs')
let milliEle = document.getElementById('milli')
let startbtn = document.getElementById('start-btn')
let stopbtn = document.getElementById('stop-btn')
let resetbtn = document.getElementById('reset-btn')

function padZero(n) {
    return n < 10 ? '0' + n : n
}
let h = 0
let m = 0
let s = 0
let mil = 0

// hrsEle.innerHTML = padZero(h)
// minsEle.innerHTML = padZero(m)
// secsEle.innerHTML = padZero(s)
// milliEle.innerHTML = padZero(mi)

startbtn.addEventListener('click', () => {
    // let date = new Date()
    // milliEle.innerHTML = date.getMilliseconds()
    let interval = setInterval(() => {
        mil += 1
        if(mil == 100) {
            mil = 0
            s += 1
        }

        if(s == 60) {
            s = 0
            m += 1
        }

        if(m == 60) {
            m = 0
            h += 1
        }
       
        milliEle.innerHTML = padZero(mil)
        secsEle.innerHTML = padZero(s)
        minsEle.innerHTML = padZero(m)
        hrsEle.innerHTML = padZero(h)


    }, 10)

    stopbtn.addEventListener('click', () => {
        clearInterval(interval)
    })

    resetbtn.addEventListener('click', () => {
        clearInterval(interval)
        s=0, mil=0, h=0, m=0
        milliEle.innerHTML = padZero(mil)
        secsEle.innerHTML = padZero(s)
        minsEle.innerHTML = padZero(m)
        hrsEle.innerHTML = padZero(h)
    })
})
    
