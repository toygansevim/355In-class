function initMap() {
    var $park = $("#park").on("click", function () {
        alert("Set Parking location:");
    });
    var $retrieve = $("#retrieve").on("click", function () {
        alert("get Parking location.");
    });

    var $gotIt = $("#gotIt").on('click', function () {
        $('#instructions').hide();
    });

    var BAU = {lat: 41.0421, lng: 29.0090};

    var mapDiv = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: BAU
        });

    //thid pararm
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}


function onDeviceReady() {
    //lOad the correct stylesheet depending on device
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type', 'text/css');

    if (cordova.platformid == 'ios') {

        $('head').append('<link rel="stylesheet" href="css/park-it-ios.css" type="text/css" />');

        //prevenet status bar from overlaying web view

        // node.setAttribute('href', 'css/park-it-ios.css');

        //prevent status bar from pverlaing
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    }
    else {


        //default code
        // node.setAttribute('href', 'css/park-it-android.css');

        $('head').append('<link rel="stylesheet" href="css/park-it-android.css" type="text/css"/>');


        window.StatusBar.backgroundColorByHexString("#1565c0");


    }

    //what is happeneing here
    $('head').appendChild(node);

}
