function askName() {
    let askName = prompt("Adınız nedir?");
    document.querySelector("#myName").innerHTML = askName;
}

function showTime () {
    // get time
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // string day
    let day = date.getDay();
    switch(day){
        case 1: day = "Pazartesi"; break;
        case 2: day = "Salı"; break;
        case 3: day = "Çarşamba"; break;
        case 4: day = "Perşembe"; break;
        case 5: day = "Cuma"; break;
        case 6: day = "Cumartesi"; break;
        case 7: day = "Pazar"; break;
    }

    // add 0 if < 10
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    // show time
    let time = `${hour}:${minute}:${second} ${day}`
    document.querySelector("#myClock").innerHTML = time;

    // repeat 1 second
    setTimeout(showTime,1000);
}
askName();
showTime();

