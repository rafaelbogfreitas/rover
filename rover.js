//Rover class declaration
class Rover {
    //constructor
    
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    direction = 'N';
    travelLog = [];

    //Turn right method
    
    turnRight(){
        switch(this.direction) {
            case "N":
                this.direction = "E";
                break;
            case "E":
                this.direction = "S";
                break;
            case "S":
                this.direction = "W";
                break;
            case "W":
                this.direction = "N";
                break;
                default:
                    console.log("Wrong direction entered");
                }
            console.log(`ROVER TURNED RIGHT TO: ${this.direction}\n---------------------\n`);
    }

    //turn left method

    turnLeft(){
        switch(this.direction) {
            case "N":
                rover.direction = "W";
                break;
            case "E":
                this.direction = "N";
                break;
            case "S":
                this.direction = "E";
                break;
            case "W":
                this.direction = "S";
                break;
            default:
                console.log("Wrong direction entered\n");
        }
        console.log(`ROVER TURNED LEFT TO: ${this.direction}\n------------------\n`);
    }

    //moveForward method

    moveForward(){
        switch(this.direction) {
            case "N":
                if(this.y == 0){
                    console.log("Area out of grid's range")
                    return;
                } else {
                    this.y -= 1;
                }
                break;
            case "E":
                if(this.x == 10){
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.x += 1;
                }
                break;
            case "S":
                if(this.y == 10){
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.y += 1;
                }
                break;
            case "W":
                if(this.x == 0){
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.x -= 1;
                }
                break;
            default:
                console.log("Wrong direction entered");
        }
        this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        console.log(`Rover moved forward and is now at position: [${this.x}, ${this.y}]\n`);
    }

    //moveBackward method

    moveBackward(){
        switch(this.direction) {
            case "N":
                if(this.y == 10){  
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.y += 1;
                }
                break;
            case "E":
                if(this.x == 0){  
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.x -= 1;
                }
                break;
            case "S":
                if(this.y == 0){  
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.y -= 1;
                }
                break;
            case "W":
                if(this.x == 10){  
                    console.log("Area out of grid's range");
                    return;
                } else {
                    this.x += 1;
                }
                break;
            default:
                console.log("Wrong direction entered");
        }
        this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        console.log(`Rover moved forward and is now at position: [${this.x}, ${this.y}]\n`);
    }

    //translate direction commands method

    translateCommands(str){

        console.log(`translateCommands was called with: ${str}\n=================================\n`);
        
        //str input validation; returns if any of the characters doesn't match the regex
        if(!str.match(/^[fbrlFBRL]+$/g)){
            console.log('Input must be one of this letters: r, l, f, and b');
            return;
        }
    
        for(let i = 0; i < str.length; i++){
            switch(str[i]){
                case 'r':
                    this.turnRight();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                default:
                    console.log("Wrong command!");
            }
        };
        console.log(this.travelLog);
        // this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
    }
}

const rover = new Rover(0, 0);


rover.translateCommands('rfffrbb');

