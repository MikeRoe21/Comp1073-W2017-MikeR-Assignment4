(function () {
    var canvas;
    var stage;
    var Test;
    /**
     *
     * @method Start
     * @returns void
     */
    function Start() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    /**
     * @method Update
     * @returns void
     */
    function Update(event) {
        Test.rotation += 2;
        stage.update();
    }
    /**
     * @method Main
     * @returns void
     */
    function Main() {
        console.log("App Started!!");
        Test = new createjs.Text("My Projects", "24px Verdana", "#000000");
        Test.regX = Test.getMeasuredWidth() * 0.5;
        Test.regY = Test.getMeasuredHeight() * 0.5;
        Test.x = 234;
        Test.y = 30;
        stage.addChild(Test);
    }
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map