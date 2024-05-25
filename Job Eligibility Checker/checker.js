function checker() {
    let quals = document.getElementsByName('qualification')
    console.log("quals = " + quals)
    let qual
    for(i=0; i<quals.length; i++) {
        if(quals[i].checked)
            qual = quals[i].value
    }
    console.log("qualification = " + qual)

    if(qual == "Higher Secondary" || qual == "UG") {
        document.getElementById('result').innerHTML = "You are eligible for a Job"
    }
    else {
        document.getElementById('result').innerHTML = "You are Not eligible for a Job"
    }
}