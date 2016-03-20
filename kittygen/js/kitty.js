function changeImage() {
    var image = document.getElementById('myImage');
    var imgVal = String(Math.floor((Math.random()*149)+1));
    image.src = "img/cats/cat-%20("+imgVal+").jpg";
    } 