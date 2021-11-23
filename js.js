
   //2 задание
   var date = new Date();
   var month = date.getMonth()+1;
    button1.onclick = function(){
        var change = document.getElementById("First_p");
        change.innerText = month;

    };

//3 задание

var color_text = document.getElementById("First_p");
color_text.onmouseover = function (){
    color_text.style.backgroundColor = "black";
    color_text.style.color="white";
}

color_text.onmouseout = function (){
    color_text.style.backgroundColor = "white";
    color_text.style.color="black";
}

button2.onclick=function(){
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++){
        p[i].style.fontSize="34pt";
    }
};
// 4 задание
   /* var img = document.getElementById("image");
    img.onmouseover = function(){

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
    }*/

    for (i=0;i<3;i++){
        if (i==0){
            document.images[0].onclick = function(){
        
                document.images[1].src = "https://i.pinimg.com/236x/76/06/35/760635d91fc23f6a4383ceb62ace3f9a.jpg"
        
                document.images[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX///8AAAD7+/vY2NiqqqpLS0vV1dXr6+u3t7fR0dFmZmbGxsba2tpHR0fVJdOjAAABC0lEQVR4nO3cS24CQRBEQRiM+fr+1/UOs02pO3tkIg6Q0lvVrg4HAAAAAAAAAAAAAAAAAADgn7pcv0a7XlZHvXscZ3isznozJfB4XJ315zmp8Lk67OU0qfC0OuzlYwrP4+y0cODiTgu3YYObwjaFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxh3ccUDlzcaeHte5TbTguHU9jz/wsvkwp39AvrZ0rgeXXWm+0+IfA+7r4OsY22OggAAAAAAAAAAAAAAAAAAJjnF2i3D/Wf5qxnAAAAAElFTkSuQmCC"
                
            }
        }
    }
    
    document.images[1].onclick = function(){
        
        document.images[1].src = "https://i.pinimg.com/236x/76/06/35/760635d91fc23f6a4383ceb62ace3f9a.jpg"

        document.images[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX///8AAAD7+/vY2NiqqqpLS0vV1dXr6+u3t7fR0dFmZmbGxsba2tpHR0fVJdOjAAABC0lEQVR4nO3cS24CQRBEQRiM+fr+1/UOs02pO3tkIg6Q0lvVrg4HAAAAAAAAAAAAAAAAAADgn7pcv0a7XlZHvXscZ3isznozJfB4XJ315zmp8Lk67OU0qfC0OuzlYwrP4+y0cODiTgu3YYObwjaFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxh3ccUDlzcaeHte5TbTguHU9jz/wsvkwp39AvrZ0rgeXXWm+0+IfA+7r4OsY22OggAAAAAAAAAAAAAAAAAAJjnF2i3D/Wf5qxnAAAAAElFTkSuQmCC"
        
    }

    document.images[0].onclick = function(){
        
        document.images[1].src = "https://i.pinimg.com/236x/76/06/35/760635d91fc23f6a4383ceb62ace3f9a.jpg"

        document.images[0].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX///8AAAD7+/vY2NiqqqpLS0vV1dXr6+u3t7fR0dFmZmbGxsba2tpHR0fVJdOjAAABC0lEQVR4nO3cS24CQRBEQRiM+fr+1/UOs02pO3tkIg6Q0lvVrg4HAAAAAAAAAAAAAAAAAADgn7pcv0a7XlZHvXscZ3isznozJfB4XJ315zmp8Lk67OU0qfC0OuzlYwrP4+y0cODiTgu3YYObwjaFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxhncKYwjqFMYV1CmMK6xTGFNYpjCmsUxhTWKcwprBOYUxh3ccUDlzcaeHte5TbTguHU9jz/wsvkwp39AvrZ0rgeXXWm+0+IfA+7r4OsY22OggAAAAAAAAAAAAAAAAAAJjnF2i3D/Wf5qxnAAAAAElFTkSuQmCC"
        
    }

