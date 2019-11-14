/*
Gabriel Paiva Sousa - 2019/11/08
Test for:
- Makes a (red) square circle around a bigger (green) square
- Implements buttons to:
    - Start/Stop the circling movement
    - Increase and Decrease speed
    - Mode of increasing/deacreasing the speed: pixels or period
*/


//BACKGROUND OBJECT REFERENCE
var back = document.getElementById("background");
//MOVING SQUARE OBJECT REFERENCE
var boxRef = document.getElementById("animate");
boxRef.style.left = 0;
boxRef.style.top = 0;
//BOX OBJECT - to be assigned to boxRef
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
    step: 2,
    //initial period in ms
    period: 20,
    
    //MOVE METHOD
    move: function () {
        if (mode.clock){
            //ClockWise movement
            if (box.x<box.xpath && box.y==0){
                box.x += box.step;
                if (box.x > box.xpath){
                    box.x = box.xpath;
                }
                boxRef.style.left = box.x + "px";
            } else if (box.x==box.xpath && box.y<box.ypath){
                box.y += box.step;
                if (box.y > box.ypath){
                    box.y = box.ypath;
                }
                boxRef.style.top = box.y + "px";
            } else if (box.x>0 && box.y==box.ypath){
                box.x -= box.step;
                if (box.x < 0){
                    box.x = 0;
                }
                boxRef.style.left = box.x + "px";
            } else if (box.x==0 && box.y>0){
                box.y -= box.step;
                if (box.y < 0){
                    box.y = 0;
                }
                boxRef.style.top = box.y + "px";
            }
        } else {
            //CounterClockWise movement
            if (box.x==0 && box.y<box.ypath){
                box.y += box.step;
                if (box.y > box.ypath){
                    box.y = box.ypath;
                }
                boxRef.style.top = box.y + "px";
            } else if (box.x<box.xpath && box.y==box.ypath){
                box.x += box.step;
                if (box.x > box.xpath){
                    box.x = box.xpath;
                }
                boxRef.style.left = box.x + "px";
            } else if (box.x==box.xpath && box.y>0){
                box.y -= box.step;
                if (box.y < 0){
                    box.y = 0;
                }
                boxRef.style.top = box.y + "px";
            } else if (box.x>0 && box.y==0){
                box.x -= box.step;
                if (box.x < 0){
                    box.x = 0;
                }
                boxRef.style.left = box.x + "px";
            }
        }
        
    },
    
    //CONTROL METHOD
    control: function () {
        if (box.status == false){
            //sets interval for move() function
            box.rep = setInterval(box.move, box.period);
            box.status = true;
        } else {
            clearInterval(box.rep);
            box.rep = 0;
            box.status = false;
        }
    },
};

///////BUTTONS/////
//START/STOP//
//OBJECT REFERENCE
var buttonRef = document.getElementById("start");
//TO-BE-ASSIGNED OBJECT
var play = {
    repeat: 0,
    onclick: function () {
        if (!box.status){
            buttonRef.innerHTML = "Stop";
        } else {
            buttonRef.innerHTML = "Start";
        }
        box.control();
    }
};
//Assigns play{} to buttonRef{}
Object.assign(buttonRef, play);

//MINUS BUTTON OBJECT REFERENCE//
var minusRef = document.getElementById("minus");
//onclick method
minusRef.onclick = function() {
    box.step /= 2;
};

//PLUS BUTTON OBJECT REFERENCE//
var plusRef = document.getElementById("plus");
//onclick method
plusRef.onclick = function() {
    box.step *= 2;
};


//MODE BUTTON//
//OBJECT REFERENCE//
var modeRef = document.getElementById("mode");
//Mode Status (ClockWise/Counter) text Object
var modeStatus = document.getElementById("modeStatus");
//TO-BE-ASSINED OBJECT
var mode = {
    clock: true,
    onclick: function () {
        if (mode.clock){
            modeStatus.innerHTML = "Counter";
            mode.clock = false;
        } else {
            modeStatus.innerHTML = "ClockWise";
            mode.clock = true;
        }
    }
};
Object.assign(modeRef, mode);
