
   //2 задание
   var date = new Date();
   var month = date.getMonth()+1;
    button1.onclick = function(){
        var change = document.getElementById("First_p");
        change.innerText = month;

    };

//3 задание

var color_text
function over(){
    color_text = document.getElementById("First_p");
    color_text.style.backgroundColor = "black";
    color_text.style.color="white";
}
function out(){
    color_text = document.getElementById("First_p");
    color_text.style.backgroundColor = "white";
    color_text.style.color="black";
}

button2.onclick=function(){
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++){
        p[i].style.fontSize="34pt";
    }
};

function onover(){
    var img = document.getElementById("image");
    img.style.position = "absolute";
    var max = 900;

    var top = Math.floor(Math.random() * max)+50;
    img.style.top = top+"px";

    var down = Math.floor(Math.random()* max)+50;
    img.style.bottom = down+"px";

    var left = Math.floor(Math.random() * max)+50;
    img.style.left = left+"px";

    var right = Math.floor(Math.random() * max)+50;
    img.style.right = right+"px";




}