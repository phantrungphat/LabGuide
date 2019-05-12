var display = document.getElementById("Chao");
var inputName = document.getElementById("Name");
var inp1 = document.getElementById("inp");
var datenbirth = document.getElementById("DateandBirth");
var getThanhNgu = document.getElementById("ThanhNgu");
var getBackground = document.getElementById("fullscreen");

function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

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
    document.getElementById('hidden-form').style.fontSize = "500%";
    document.getElementById('hidden-form').style.color = "white";
    document.getElementById('hidden-form').style.textAlign = "center";
    document.getElementById('hidden-form').innerHTML = h + ":" + m + ":" + s;
 
    // Dùng hàm setTimeout để thiết lập gọi lại 1 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 0);
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

var isInput = true;
window.onload = function()
{
    
    startTime();

      display.innerHTML = "Chào buổi " + checkBuoi() + ", ";
      display.style.fontSize = "200%";
      display.style.color = "white";
      display.style.textAlign = "center";
      display.style.lineHeight = "1";

      randomThanhNgu();
      randomBackground();
      

    
};

            inputName.style.fontSize = "200%";
            inputName.style.color = "white";
            inputName.style.textAlign = "center";
            inputName.style.lineHeight = "1";

inp1.addEventListener("blur", buong);
function buong() {
        var name1 = inp1.value;
        if (name1 != "")
        {
            inputName.innerHTML = name1;
            inputName.style.fontSize = "200%";
            inputName.style.color = "white";
            inputName.style.textAlign = "center";
            inputName.style.lineHeight = "1";

            isInput = false;
        }
}

if (inp1.value == "Phan Trung Phát")
{
    buong();
    value1 = "Phan Trung Phát";
}

inp1.addEventListener("change",SaveValue);
var value1;
function SaveValue() {
    value1 = document.getElementById("inp").value;
}

inputName.addEventListener("click", clik);
function clik() {
        if(!isInput)
        {

            inputName.innerHTML = '<input id="inp" type="text">';
            inp1 = document.getElementById("inp");
            inp1.addEventListener("change",SaveValue);
            inp1.value = value1;
            inp1.addEventListener("blur", buong);
            inputName.style.fontSize = "200%";
            inputName.style.color = "white";
            inputName.style.textAlign = "center";
            inputName.style.lineHeight = "1";
            isInput = true;
        }   
}

function checkTuoi(Birth) {
    var stringDate = Birth;
    var comp = stringDate.split('-');
    var date = new Date();
    var Tuoi = date.getFullYear() - comp[0] -1;

    if (date.getMonth()+1 > parseInt(comp[1]))
        return Tuoi+1;
    else if (date.getMonth()+1 == parseInt(comp[1]))
            if (date.getDate() >= parseInt(comp[2]))     //Nếu hôm nay là sinh nhật thì tuổi cũng được tăng vào ngày hôm nay
                return Tuoi +1;
            else return Tuoi;
        else return Tuoi;
}

function checkdatenbirth(Birth) {

    datenbirth.innerHTML = "Bạn đang " + checkTuoi(Birth) + " tuổi " + checkdate(Birth);

    var t = setTimeout(function() {
        checkdatenbirth(Birth);
    }, 86400000);
}

function checkdate(Birth) {
    var stringDate = Birth;
    var comp = stringDate.split('-');
    var d = new Date();
    d.setDate(comp[2]);
    
    d.setMonth(comp[1]-1);
    d.setFullYear(comp[0]);

    var endDate = new Date();
    var seconds = (endDate.getTime() - d.getTime()) / 1000;
    seconds /= 3600;
    var saveYear = seconds / 24;

    var saveYear1 = saveYear;
    var saveDay;
    var saveMonth;
    if (saveYear > 30)
    {
        saveDay = saveYear;
        saveYear = Math.floor(saveYear / 30);
        saveDay -= saveYear*30;
    }
    if (saveYear > 12)
    {
        saveMonth = saveYear;
        saveYear = Math.floor(saveYear/12);
        saveMonth-=saveYear*12;
    }

    return ("bạn đã sống " + saveYear1 + " ngày " + saveYear + " năm " + saveMonth + " tháng " + saveDay + " ngày");
}

checkdatenbirth("1998-05-03");

datenbirth.addEventListener("click", clickdate);
var saveCheckDate;
var checkclick = true;
function clickdate() {
    if (checkclick)
    {
        datenbirth.innerHTML = '<input id="inputDate" type="date" value="1998-05-03"/>';
        checkclick = false;
    }
}

datenbirth.addEventListener("change", changedate);

function changedate() {
    var inputDate = document.getElementById("inputDate");
    saveCheckDate = inputDate.value;
    checkdatenbirth(saveCheckDate);
    checkclick = true;
}

function randomThanhNgu() 
{
    var array = new Array('"Giàu nhân nghĩa hãy giữ cho giàu, khó tiền bạc chớ cho rằng khó."','"Lá lành đùm lá rách, lá rách ít đùm lá rách nhiều."','"Một miếng khi đói bằng một gói khi no."');
    var ramdom = Math.floor(Math.random() * (4 - 1)) + 1;
    if (ramdom == 1)
    {
        ramdom = array[0];
    }
    else if (ramdom == 2)
    {
        ramdom = array[1];
    }
    else if (ramdom == 3)
    {
        ramdom = array[2];
    }
    getThanhNgu.innerHTML = ramdom;
}

function randomBackground() {
    var ramdom = Math.floor(Math.random() * (3 - 1)) + 1;
    if (ramdom == 1)
    {
        getBackground.style.backgroundImage = 'url("image/avatar.jpg")';
    }
    else if (ramdom == 2)
    {
        getBackground.style.backgroundImage = 'url("image/phongcanhhoa.jpg")';
    }
}


    



