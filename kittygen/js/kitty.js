function changeKitty() {
   //load image
    var image = document.getElementById('myImage');
    var imgVal = String(Math.floor((Math.random() * 149) + 1));
    image.src = "img/cats/cat-%20("+imgVal+").jpg";
  
    //load upvote
    document.getElementById("myUpVote").innerHTML = Math.floor((Math.random()*650)+1);
    
    //load downvote
    document.getElementById("myDownVote").innerHTML = Math.floor((Math.random()*149)+1);
    } 

function voteUp() {
    var upvote = Number(document.getElementById('myUpVote').innerHTML);
    upvote += 1;
    document.getElementById("myUpVote").innerHTML ="  "+ upvote + " ";
}

function voteDown() {
    var downvote = Number(document.getElementById('myDownVote').innerHTML);
    downvote += 1;
    document.getElementById("myDownVote").innerHTML ="  "+ downvote + " ";
}

function uploadKitty(){
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + Math.floor(file.size/1000) + " kb <br>";
                    
                }
            }
        }
    }   
    else {
        if (x.value == "") {
            txt += "Select one or more files.";
        } else {
            txt += "The files property is not supported by your browser!";
            txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
    }
    document.getElementById("msg").innerHTML = txt;
}