var hidden_form = document.getElementById("hidden-form");
var countdownclock = document.getElementById("countdownclock");
var btinfo = document.getElementById("btinfo");
var inputName = document.getElementById("inputName");
var inputDate = document.getElementById("inputDate");
var LoiChao = "";
var dem = 1;

function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkBuoi() {
    var d = new Date();
    var Hour = d.getHours();
    var i;
    if (Hour == 3)
        if (d.getMinutes() > 0)
            return "sáng";
        else return "tối";
    if (Hour == 11)
        if (d.getMinutes() > 0)
            return "trưa";
        else return "sáng";
    if (Hour == 13)
        if (d.getMinutes() > 0)
            return "chiều";
        else return "trưa";
    if (Hour == 18)
        if (d.getMinutes() > 0)
            return "tối";
        else return "chiều";
    if (Hour == 4 || Hour == 5 || Hour == 6 || Hour == 7 || Hour == 8 || Hour == 9 || Hour == 10)
        return "sáng";
    if (Hour == 12)
        return "trưa";
    if (Hour == 14 || Hour == 15 || Hour == 16 || Hour == 17)
        return "chiều";
    if (Hour == 19 || Hour == 20 || Hour == 21 || Hour == 22 || Hour == 23 || Hour == 0 || Hour == 1 || Hour == 2)
        return "tối";
}
function checkDanhXung() {
    var checkbox = document.getElementsByName("gender");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            if (checkbox[i].value == "Nam")
                return "anh";
            if (checkbox[i].value == "Nữ")
                return "chị";
        }
    }
}
function checkTuoi () {
    var stringDate = inputDate.value;
    var comp = stringDate.split('-');
    var date = new Date();
    var Tuoi = date.getFullYear() - comp[0];

    if (date.getMonth()+1 > parseInt(comp[1]))
        return Tuoi+1;
    else if (date.getMonth()+1 == parseInt(comp[1]))
            if (date.getDate() >= parseInt(comp[2]))     //Nếu hôm nay là sinh nhật thì tuổi cũng được tăng vào ngày hôm nay
                return Tuoi +1;
            else return Tuoi;
        else return Tuoi;
}

var check = false;
function checkSoNgay () {
    var stringDate = inputDate.value;
    var comp = stringDate.split('-');
    var d = new Date();
    d.setDate(comp[2]);
    
    d.setMonth(comp[1]-1);

    var endDate   = new Date();
    endDate.setFullYear(endDate.getFullYear());
    endDate.setMonth(endDate.getMonth());
    endDate.setDate(endDate.getDate());

    d.setFullYear(endDate.getFullYear());

    var seconds = (endDate.getTime() - d.getTime()) / 1000;
    if (seconds > 0)
    {
        d.setFullYear(endDate.getFullYear()+1);
        seconds = (d.getTime() - endDate.getTime()) / 1000;
        check=true;
    }
    else if (seconds < 0){
        seconds = (d.getTime() - endDate.getTime()) / 1000;
    }
    else return 0;
    seconds /= 3600;
    var SoNgay = seconds / 24;
    return SoNgay;
}

var DanhXung;

function CountDown () {

    var d = new Date();
    var countDownDate = new Date($('#inputDate').val());
    if (check)
        countDownDate.setFullYear(d.getFullYear()+1);
    else countDownDate.setFullYear(d.getFullYear());        

    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("countdownclock").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdownclock").innerHTML = "HAPPY BIRTHDAY TO YOU, " + DanhXung + " " + inputName.value;
        }
    }, 1000);
}

$('#btinfo').click(function() {

        $('#hidden-form').fadeOut(1000);

        DanhXung = checkDanhXung();

        var nexttuoi = checkTuoi()+1;
    
    LoiChao = "Xin chào buổi " + checkBuoi()  + " " + checkDanhXung() + " " + inputName.value + "<br>" + checkDanhXung() + " " + "đang ở tuổi " + checkTuoi() + " và còn "+ checkSoNgay() + " ngày  nữa sẽ đến sinh nhật thứ " + nexttuoi + " của " + checkDanhXung();
    
    var stringDate = inputDate.value;
    var comp = stringDate.split('-');
    var d = new Date();
    if (d.getDate() == comp[2] && d.getMonth()+1 == comp[1])
        LoiChao = "Xin chào buổi " + checkBuoi()  + " " + checkDanhXung() + " " + inputName.value + "<br>" + checkDanhXung() + " " + "đang ở tuổi " + checkTuoi();

    return false;
});

var checkFormHidden = setInterval(function() {

    if (LoiChao != "" && dem != 1)
    {
        CountDown();

        hidden_form.innerHTML = LoiChao;
        hidden_form.style.fontSize = "250%";
        hidden_form.style.color = "white";
        hidden_form.style.textAlign = "center";

        countdownclock.style.fontSize = "300%";
        countdownclock.style.color = "white";
        countdownclock.style.textAlign = "center";

        $('#hidden-form').show(1000);

        clearInterval(checkFormHidden);
    }   
    dem++; 
},2000);





    



