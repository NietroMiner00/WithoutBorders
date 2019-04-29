(function(){
    var CONTAINER_ID = 'remover';
    var HOSTNAME = 'www.youtube.com';
    if(!document.getElementById(CONTAINER_ID)&&window.location.hostname == HOSTNAME){
        var container = document.createElement('div');
        container.id = CONTAINER_ID;
    
        var script=document.createElement('script');
        script.src='https://nietrominer00.github.io/WithoutBorders/youtubeBorders.js';
    
        container.appendChild(script);
        document.body.appendChild(container);
        console.log("Injection finished");
    }else console.log("Injection failed");
})();

function changeDisplay(elem, stand){
    if(elem == null) return;
    if(elem.style.display == "none"){
        elem.style.display = stand;
    }else{
        elem.style.display = "none";
    }
}

function removeDisplay(elem){
    if(elem == null) return;
    elem.remove();
}

function toggleCursor(){
    var elem = document.getElementsByClassName("html5-video-container")[0];
    if(elem.style.cursor == "none") elem.style.cursor = "";
    else elem.style.cursor = "none";
}

document.addEventListener('keydown', function(event){
    if(event.keyCode == 72){
        changeAllDisplays();
        console.log("toggled Interface");
    }
});