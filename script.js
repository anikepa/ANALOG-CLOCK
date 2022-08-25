
function showtime() {
    /* FUNCTION RELATES TO MIE */
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var session = "AM";

    if (h > 12) {
        h = h - 12;
    }

    if (h >= 12) {
        session = "PM"
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    var time = h + ":" + m + ":" + s + " " + session;


    document.getElementsByTagName('h1')[0].innerText = time;
    setTimeout(showtime, 1000)


    wis();

}


    
    wi = "GOOD MORNING";
    var wish = function wis() {
    if (h <= 12) {
        wi = "GOOD hiii";
    }
    else if (h <= 5  /*  && session = "PM" */ ) {
        wi = "GOOD  AFTERNOON";
    }
    else{
        wi = "GOOD  EVENING";
        
    }

    var m =  wi;

    document.getElementsByTagName('h2')[0].innerTextL = m;
}      