// let outimg = "balls";
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
function exists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404) {
        return true;
    } else {
        return false;
    }
}
function isPlaying(aEl) {
    return !aEl.paused;
}


// On start
addStyle(`
    #coolimg {
        display: block;
    }
`)