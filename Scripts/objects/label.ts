module objects {
    export class Label extends createjs.Text  {
        constructor(private textString:string, 
        private fontSize:string, 
        private fontType:string,
        private fontColor:string,
        x:number,
        y:number,
        private isCentered: boolean) {
           
        super(textString, fontSize + " " + fontType, fontColor);

        if(this.isCentered) {
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
        }


        this.x = x;
        this.y = y;
        }
    }
}