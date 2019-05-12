function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Hàm khởi tạo đồng hồ
function startTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();
 
    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
 
    // Chuyển đổi sang dạng 01, 02, 03
    m = checkTime(m);
    s = checkTime(s);
 
    // Ghi ra trình duyệt
    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
 
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 1000);
}

var x;
var y;
function show1()
{
    x = Math.floor((Math.random() * 100) + 1);
    y = Math.floor((Math.random() * 100) + 1);
    document.getElementById("display1").style.color = "red";
    document.getElementById("display1").innerHTML = "2 số random là " + x + " và " + y;
}

function show2()
{
    var sum = x + y;
    document.getElementById("display2").style.color = "red";
    document.getElementById("display2").innerHTML = "Kết quả sau khi đã cộng là: " + sum;
}

var turn = false;
function changeBRC()
{
    if (turn)
    {
        document.body.style.backgroundColor = "white";
        turn = false;
    }    
    else {
        document.body.style.backgroundColor = "pink";
        turn = true;
    }
    
}
