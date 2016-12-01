/**
 * Created by GodaiYuusaku on 12/1/16.
 */
var ctx,
    width,
    height;

var keys = {up: 87, left: 65, down: 83, right: 68};

function main()
{
    windowSetup();
    canvasSetup();

}

function windowSetup()
{
    width = window.innerWidth / 2;
    height = window.innerHeight / 2;
}

function canvasSetup() {
    var canvas = "<canvas id='canvasArea' width='" + width + "' height='" + height + "'></canvas>";
    $("body").append(canvas);
    ctx = $("#canvasArea")[0].getContext("2d");
}

$("body").keydown(function (event) {
    switch (event.keyCode)
    {
        case keys.up:
            console.log("up!");
            break;
        case keys.left:
            console.log("left!");
            break;
        case keys.right:
            console.log("right!");
            break;
        case keys.down:
            console.log("down!");
            break;
    }
});