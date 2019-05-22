var HOST = "https://nietrominer00.github.io/WithoutBorders/";
//var HOST = "http://localhost:9615/";

(function(){
    var CONTAINER_ID = 'remover';
    if(!document.getElementById(CONTAINER_ID)){
        var container = document.createElement('div');
        container.id = CONTAINER_ID;
        var script = null;
        if(window.location.hostname == "www.youtube.com"){
            script=document.createElement('script');
            script.src= HOST + 'youtubeBorders.js';
        }else if(window.location.hostname == "www.amazon.de"){
            script=document.createElement('script');
            script.src= HOST + 'primeBorders.js';
        }else return;
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

function toggleCursor(elem){
    if(elem.style.cursor == "none") elem.style.cursor = "";
    else elem.style.cursor = "none";
}

document.addEventListener('keydown', function(event){
    if(event.keyCode == 72){
        changeAllDisplays();
        console.log("toggled Interface");
    }
});