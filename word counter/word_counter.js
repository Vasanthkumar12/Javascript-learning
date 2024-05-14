function count() {
    let txtarea = document.getElementById("paragraph").value
    let word_arr = txtarea.split(" ")
    let result = document.getElementById("result")

    result.innerHTML = word_arr.length
}