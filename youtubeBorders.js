var once = false;

changeAllDisplays();

function changeAllDisplays(){
    // menu bottom
    changeDisplay(document.getElementsByClassName("ytp-chrome-bottom")[0], "block");
    // menu top
    changeDisplay(document.getElementsByClassName("ytp-chrome-top")[0], "inline-flex");
    // gradient bottom
    changeDisplay(document.getElementsByClassName("ytp-gradient-bottom")[0], "block");
    // gradient top
    changeDisplay(document.getElementsByClassName("ytp-gradient-top")[0], "");
    // paid content
    changeDisplay(document.getElementsByClassName("ytp-paid-content-overlay")[0], "none");
    if(!once){
        // pause popup
        removeDisplay(document.getElementsByClassName("ytp-bezel-text-wrapper")[0].parentElement);
        // more videos
        removeDisplay(document.getElementsByClassName("ytp-pause-overlay ytp-scroll-min")[0]);
    }
    // subscribe button(right bottom corner)
    changeDisplay(document.getElementsByClassName("ytp-player-content ytp-iv-player-content")[0], "none");

    toggleCursor();

    once = true;
}