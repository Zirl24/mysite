var sp = "."
var today = new Date();

/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0' + dd;
};
if(mm < 10) {
    mm = '0' + mm;
};

$("#date").html(mm+sp+dd+sp+yyyy)


