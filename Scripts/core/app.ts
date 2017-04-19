(function(){

let canvas:HTMLElement;
let canvasWidth: number;
let canvasHeight: number;
let canvasHalfWidth: number;
let canvasHalfHeight: number;

let stage:createjs.Stage;
let TextLabel:objects.Label;

let clickMeButton:createjs.Bitmap;

/**
 * 
 * @method Start
 * @returns void
 */
function Start():void {

        canvas = document.getElementById("canvas");

       canvasWidth = parseInt(canvas.getAttribute("width"));
       canvasHeight = parseInt(canvas.getAttribute("height"));
       canvasHalfWidth = canvasWidth * 0.5;
       canvasHalfHeight = canvasHeight * 0.5;

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);


    Main();
}

/**
 * @method Update
 * @returns void
 */
function Update(event:createjs.Event):void {


    TextLabel.rotation += 1;
    
    stage.update();

}

/**
 * @method Main
 * @returns void
 */
function Main():void {
    console.log("App Started!!");

    TextLabel = new objects.Label(" Click Kirby for My Projects", "18px", "Verdana","#000000", canvasHalfWidth, canvasHalfHeight - 50, true);
    stage.addChild(TextLabel);

    clickMeButton = new objects.Button("Client-Side-Scripting-Assignment-4/Assets/Kirby.gif", true, 150, 40, canvasHalfWidth, canvasHalfHeight + 50);
    stage.addChild(clickMeButton);

    clickMeButton.on("click", function(event:createjs.MouseEvent){
        // TextLabel.text = "Testing!";
        location.href="Projects.html";
    });

}



window.onload = Start;

})();
