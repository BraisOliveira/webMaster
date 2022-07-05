//javascript "mediaquery" only for educational reasons
window.onscroll = function() {myFunction()};

function myFunction() {
    if (screen.height < 865){
        var y = window.scrollY;
        if (y >= 1441.5){
            document.getElementById("bos").style.display = "none";
        }
    } 

    if (screen.height < 865){
        var y = window.scrollY;
        if (y < 1441.5){
            document.getElementById("bos").style.display = "";
        }
    } 
};