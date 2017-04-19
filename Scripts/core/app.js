(function () {
    var canvas;
    var canvasWidth;
    var canvasHeight;
    var canvasHalfWidth;
    var canvasHalfHeight;
    var stage;
    var TextLabel;
    var clickMeButton;
    /**
     *
     * @method Start
     * @returns void
     */
    function Start() {
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
    function Update(event) {
        TextLabel.rotation += 1;
        stage.update();
    }
    /**
     * @method Main
     * @returns void
     */
    function Main() {
        console.log("App Started!!");
        TextLabel = new objects.Label(" Click Kirby for My Projects", "18px", "Verdana", "#000000", canvasHalfWidth, canvasHalfHeight - 50, true);
        stage.addChild(TextLabel);
        clickMeButton = new objects.Button("../Client-Side-Scripting-Assignment-4/Assets/Kirby.gif", true, 150, 40, canvasHalfWidth, canvasHalfHeight + 50);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function (event) {
            // TextLabel.text = "Testing!";
            location.href = "Projects.html";
        });
    }
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map