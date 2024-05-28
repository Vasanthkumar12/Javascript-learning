let bg = document.getElementById('background')
let colr_pick = document.getElementById('colr_pick')
let btn = document.getElementById('btn')

let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function(){
    let str = '#'
    for(let i=1; i<=6; i++) {
        str += bgColorSet()
    }
    console.log("str = " + str)
    bg.style.backgroundColor = str
    colr_pick.innerHTML = str
})

function bgColorSet() {
    let randNum = Math.floor(Math.random() * 16)
    return hexArr[randNum]
}