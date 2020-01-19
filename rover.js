//function that returns a grid based on the parameters
function makeGrid(rows, columns){
    let grid = [];
    for(let i = 0; i < rows; i++){
        grid.push([]);
        for(let j = 0; j < columns; j++){
            grid[i].push(" ");
        }
    }
    // console.log(grid);
    return grid;
}

//10 x 10 grid
let grid = makeGrid(10, 10);

//Rover class declaration

class Rover {
    //constructor
    
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        grid[this.x][this.y] = this.name;
    }

    //direction

    direction = 'N';

    //travel log array

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
        grid[this.y][this.x] = " ";
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
        grid[this.y][this.x] = this.name;
        this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        console.log(`Rover moved forward and is now at position: [${this.x}, ${this.y}]\n`);
    }

    //moveBackward method

    moveBackward(){
        grid[this.x][this.y] = " ";
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
        grid[this.x][this.y] = this.name;
        this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        console.log(`Rover moved forward and is now at position: [${this.x}, ${this.y}]\n`);
    }

    //command string validation

    validateString(str){
        //regex that returns a boolean to validate the characters of the string command
        return str.match(/^[fbrlFBRL]+$/g);
    }
    
    //translate direction commands method
    
    translateCommands(str){
        
        console.log(`translateCommands was called with: ${str}\n=================================\n`);
        
        //str input validation; returns if any of the characters doesn't match the regex
        if(!this.validateString(str)){
            console.log('Input must be one of this letters: r, l, f, and b');
            return;
        } 

        // for(let i = 0; i < str.length; i++){
        str.split('').forEach(
            letter => {
            switch(letter.toLowerCase()){
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
        });
        
        console.log(this.travelLog);
        // this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
    }
}

const rover = new Rover("R", 0, 0);
const rover2 = new Rover("F", 1, 1);

rover.translateCommands('rffrffrf');

for(let i = 0; i <= grid.length; i++) console.log(JSON.stringify(grid[i]));