/*
Gabriel Paiva Sousa - 2019/11/08
- Makes a (red) square circle around a bigger (green) square
- Implements buttons to:
    - Start/Stop the circling movement
    - Increase and Decrease speed
    - Mode of increasing/deacreasing the speed: pixels or period
*/

//Assigns box Object to the Moving Square Object
Object.assign(boxRef, box);

//BACKGROUND OBJECT REFERENCE
var back = document.getElementById("back");

//MOVING SQUARE OBJECT REFERENCE
var boxRef = document.getElementById("animate");
var box = {
    //inital square position
    x: 0,
    y: 0,
    //horizontal and vertical path dimensions (pixels)
    xpath: back.offsetWidth - boxRef.offsetWidth,
    ypath: back.offsetHeight - boxRef.offsetHeight,
    //box status for movement condition
    status: false,
    //initial step in pixels
    step: 1,
    //initial period in ms
    period: 20,
    //rep variable to control movement through interval repetition
    rep: 0,
    //control method//
    control: function () {
        console.log(this);
        if (this.state == false){
            //sets interval for move() function
            this.rep = setInterval(this.move, this.period.call(box));
            play.startstop;
            this.state = true;
        } else {
            clearInterval(this.rep);
            play.startstop;
            this.rep = 0;
            this.state = false;
        }
    },
    //movement method//
    move: function () {
        if (this.x<this.xpath && this.y==0) {
            this.x += this.step;
            this.style.left = this.x + "px";
        } else if (this.x==this.xpath && this.y<this.ypath) {
            this.y += this.step;
            this.style.top = this.y + "px";
        } else if (this.y==this.ypath && this.x>0) {
            this.x -= this.step;
            this.style.left = this.x + "px";
        } else if (this.x==0 && this.y>0) {
            this.y -= this.step;
            this.style.top = this.y + "px";
        }
    }
}

///////BUTTONS/////
//Start/Stop OBJECT REFERENCE
var buttonRef = document.getElementById("start");
var play = {
    status: "Start",
    onclick: function () {
        var tt = setInterval(box.move);
    },
    startstop: function () {
        if (this.status == "Start"){
            this.status = "Stop";
        } else {
            this.status = "Start";
        }
        this.innerHTML = this.status;
    }
}