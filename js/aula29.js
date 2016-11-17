window.onload = function() {
    // Objeto Window e Navigator

    console.log(window.screen.width);
    console.log(window.screen.height);
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);

    window.onresize = function() {
        console.log(document.body.clientWidth);
    };

    // Navigator
    console.log(navigator.appName);
    console.log(navigator.appCodeName);
    console.log(navigator.product);
    console.log(navigator.appVersion);
    console.log(navigator.userAgent);
    console.log(navigator.platform);
};
