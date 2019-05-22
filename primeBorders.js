var once = false;
var webPlayer = document.getElementById("dv-web-player").getElementsByClassName("webPlayer")[0];

changeAllDisplays();

function changeAllDisplays(){
    var overlay = webPlayer.getElementsByClassName("overlaysContainer")[0];
    changeDisplay(overlay, "");
    
    toggleCursor(overlay);
}