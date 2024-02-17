
    function changeColor(){
    var red = Math.round(Math.random() * 255);
    var green = Math.random(Math.random() * 255);
    var blue = Math.random(Math.random() * 255);

    var rgbColor = 'rgb('+red+','+green+','+blue+')'; 
    document.body.style.backgroundColor = rgbColor;}
     document.getElementById('btn').addEventListener('click',changeColor)