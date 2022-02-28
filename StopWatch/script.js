var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var start = document.getElementById("start");
var lap = document.getElementById("lap");
var totoalTime = 0;

var state = false;
var lapCount = 0;
var value = false;

var reS = false;


start.addEventListener("click",function(event){
    if(state == false){
        if(totoalTime == 0){
            var content = document.createElement("div");
            content.setAttribute("id","content");
            var body = lap.parentNode.parentNode.parentNode;
            body.appendChild(content);
        }
        value = setInterval(function(){
            totoalTime++;
            if(seconds.innerHTML == "00" || seconds.innerHTML < 9){
                seconds.innerHTML = "0" + totoalTime%60;
            }else{
                seconds.innerHTML = totoalTime%60;
            }
            if(minutes.innerHTML == "00" || minutes.innerHTML < 9){
                minutes.innerHTML = "0"+parseInt((totoalTime/60)%60);
            }else{
                minutes.innerHTML = parseInt((totoalTime/60)%60);
            }
            if(hour.innerHTML == "00" || hour.innerHTML < 9){
                hour.innerHTML = "0"+parseInt(totoalTime/3600);
            }else{
                hour.innerHTML = parseInt(totoalTime/3600);
            }


            // hour.innerHTML = parseInt(totoalTime/3600);
            // minutes.innerHTML = parseInt((totoalTime/60)%60);
            // seconds.innerHTML = totoalTime%60;
        },1000);
        event.target.innerHTML = "Stop";
        start.style.background = "rgb(53,22,20)";
        start.style.color = "red";
        state = true;
        lap.innerHTML = "Lap";
    }
    else{
        clearInterval(value);
        event.target.innerHTML = "Start";
        start.style.background = "rgb(53, 53, 53)"
        start.style.color = "white";
        lap.innerHTML = "Restart";
        state = false;
    } 
})


lap.addEventListener("click",function(){
    
    if(state == true){

        var laplist = document.createElement("div");
        var lapNo = document.createElement("lable");
        var lapTimeDiv = document.createElement("lable");
        
        var h = document.createElement("label");
        h.innerHTML = 00;
        var m = document.createElement("label");
        m.innerHTML = 00;
        var s = document.createElement("label");
        s.innerHTML = 00;
        var c1 = document.createElement("label");
        c1.innerHTML = ":";
        var c2 = document.createElement("label");
        c2.innerHTML = ":";
        var line = document.createElement("hr");
        line.setAttribute("class","line");

        lapNo.setAttribute("id","lapNo");
        lapTimeDiv.setAttribute("id","lapTimeDiv");




        laplist.setAttribute("class","laplist");
        h.setAttribute("id","h");
        m.setAttribute("id","m");
        s.setAttribute("id","s");


        
        lapTimeDiv.appendChild(h);
        lapTimeDiv.appendChild(c1);
        lapTimeDiv.appendChild(m);
        lapTimeDiv.appendChild(c2);
        lapTimeDiv.appendChild(s);

        laplist.appendChild(line);
        laplist.appendChild(lapNo);
        laplist.appendChild(lapTimeDiv);

        var content = document.getElementById("content");

        lapCount++;
        lapNo.innerHTML = `Lap ${lapCount}`;
        h.innerHTML = hour.innerHTML;
        m.innerHTML = minutes.innerHTML;
        s.innerHTML = seconds.innerHTML;
        //content = lap.parentNode.parentNode.parentNode.children[1];
        content.appendChild(laplist);
    }
    else{
        lap.innerHTML = "Lap";
        totoalTime = 0;
        lapCount = 0;
        hour.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00"
        //reS = true;
        state = false;
        var content = document.getElementById("content");
        content.remove();

    }
})