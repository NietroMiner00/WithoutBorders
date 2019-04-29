var container = document.getElementById("movie_player");
var once = false;

changeAllDisplays();

function changeAllDisplays(){
    // menu bottom
    changeDisplay(container.getElementsByClassName("ytp-chrome-bottom")[0], "block");
    // menu top
    changeDisplay(container.getElementsByClassName("ytp-chrome-top")[0], "inline-flex");
    // gradient bottom
    changeDisplay(container.getElementsByClassName("ytp-gradient-bottom")[0], "block");
    // gradient top
    changeDisplay(container.getElementsByClassName("ytp-gradient-top")[0], "none");
    // paid content
    changeDisplay(container.getElementsByClassName("ytp-paid-content-overlay")[0], "none");
    // pause popup
    if(!once) removeDisplay(container.getElementsByClassName("ytp-bezel-text-wrapper")[0].parentElement);
    // subscribe button(right bottom corner)
    changeDisplay(container.getElementsByClassName("ytp-player-content ytp-iv-player-content")[0], "none");

    toggleCursor();

    once = true;
}