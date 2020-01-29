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

//create 10 x 10 grid with makeGrid function
let grid = makeGrid(10, 10);

//Rover class declaration

class Rover {
    //constructor
    
    constructor(name, x, y){
        this.name = name;
        this.direction = 'N';
        this.x = x;
        this.y = y;
        this.travelLog = [{x:this.x, y:this.y}];
        grid[this.y][this.x] = this.name;
    }

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
        console.log(`
            ROVER ${this.name.toUpperCase()} TURNED RIGHT TO: ${this.direction}
            ----------------------------
        `);
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
        console.log(`
            ROVER ${this.name.toUpperCase()} TURNED LEFT TO: ${this.direction}
            ----------------------------
        `);
    }

    //moveForward method

    moveForward(){
        //removes the name string from the current position in the grid
        grid[this.y][this.x] = " ";
        //checks for collision and updates the position based on the direction the rover is facing
        switch(this.direction) {
            case "N":
                if(this.y == 0){
                    console.log("Area out of grid's range")
                    grid[this.y][this.x] = this.name;
                    return true;
                } else if (this.collision(this.x, this.y - 1)) {
                    console.log("COLLISION AHEAD!");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else this.y -= 1
                break;
            case "E":
                if(this.x == 10){
                    console.log("Area out of grid's range");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else if(this.collision(this.x + 1, this.y)) {
                    console.log("COLLISION AHEAD!");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else this.x += 1;
                break;
            case "S":
                if(this.y == 10){
                    console.log("Area out of grid's range");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else if(this.collision(this.x, this.y + 1)) {
                    console.log("COLLISION AHEAD!");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else this.y += 1;
                break;
            case "W":
                if(this.x == 0){
                    console.log("Area out of grid's range");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else if(this.collision(this.x - 1, this.y)){
                    console.log("COLLISION AHEAD!");
                    grid[this.y][this.x] = this.name;
                    return true;
                } else this.x -= 1;
                break;
            default:
                console.log("Wrong direction entered");
        }
        
        //updates the rover position in the grid
        grid[this.y][this.x] = this.name;


        /*This conditional checks if the current 'x' or 'y' is different than the last entry in the travelLog
        if any of the conditions evaluates to 'true', a message is logged in the console to confirmed that the rover 
        has updated its position and a new entry is created in the travelLog*/

        if(this.x != this.travelLog[this.travelLog.length - 1]['x'] || this.y != this.travelLog[this.travelLog.length - 1]['y']){
            console.log(`Rover ${this.name} moved forward and is now at position: [${this.x}, ${this.y}]\n`);
            this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        }
    }

    //moveBackward method

    moveBackward(){
        grid[this.y][this.x] = " ";
        switch(this.direction) {
            case "N":
                if(this.y == 10){  
                    grid[this.y][this.x] = this.name;
                    console.log("Area out of grid's range");
                    return true;
                } else if(this.collision(this.x, this.y + 1)){
                    grid[this.y][this.x] = this.name;
                    console.log("COLLISION AHEAD!");
                    return true;
                } else this.y += 1;
                break;
            case "E":
                if(this.x == 0){  
                    grid[this.y][this.x] = this.name;
                    console.log("Area out of grid's range");
                    return true;
                } else if(this.collision(this.x - 1, this.y)){
                    grid[this.y][this.x] = this.name;
                    console.log("COLLISION AHEAD!");
                    return true;
                } else this.x -= 1;
                break;
            case "S":
                if(this.y == 0){  
                    grid[this.y][this.x] = this.name;
                    console.log("Area out of grid's range");
                    return true;
                } else if(this.collision(this.x, this.y - 1)){
                    grid[this.y][this.x] = this.name;
                    console.log("COLLISION AHEAD!");
                    return true;
                } else this.y -= 1;
                break;
            case "W":
                if(this.x == 10){
                    grid[this.y][this.x] = this.name;  
                    console.log("Area out of grid's range");
                    return true;
                } else if(this.collision(this.x + 1, this.y)){
                    grid[this.y][this.x] = this.name;
                    console.log("COLLISION AHEAD!");
                    return true;
                } else this.x += 1;
                break;
            default:
                console.log("Wrong direction entered");
        }
        
        //updates the rover position in the grid
        grid[this.y][this.x] = this.name;


        /*This conditional checks if the current 'x' or 'y' is different than the last entry in the travelLog
        if any of the conditions evaluates to 'true', a message is logged in the console to confirmed that the rover 
        has updated its position and a new entry is created in the travelLog*/

        if(this.x != this.travelLog[this.travelLog.length - 1]['x'] || this.y != this.travelLog[this.travelLog.length - 1]['y']){
            console.log(`Rover ${this.name} moved backward and is now at position: [${this.x}, ${this.y}]\n`);
            this.travelLog = [...this.travelLog, {x: this.x, y: this.y}];
        }

    } //TO-DO

    //command string validation method

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

        for(let i = 0; i < str.length; i++){
        // str.split('').forEach(
            // letter => {
            // switch(letter.toLowerCase()){
            switch(str[i].toLowerCase()){
                case 'r':
                    this.turnRight();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'f':
                    if(this.moveForward()) return;
                    break;
                case 'b':
                    if(this.moveBackward()) return;
                    break;
                default:
                    console.log("Wrong command!");
            }
        // });
        }
        
        console.log(`

            Travel Log rover ${this.name}: 
            ${JSON.stringify(this.travelLog)}

        `);
    }

    //collision detection

    collision(x, y){
        if(grid[y][x] !== " ") return true;
        else return false;
    }
}

//create rover variables using the Rover class
const rover1 = new Rover("R", 0, 0);
const rover2 = new Rover("F", 1, 1);
const rover3 = new Rover("D", 1, 2);

//calls translateCommands method on rover1
rover1.translateCommands('bbb');
rover2.translateCommands('frfffrfffffflfflfffrffrflfrbbbbbbb');
rover3.translateCommands('b');

//logs the grid and rovers on the console, in a well-formatted way
for(let i = 0; i < grid.length; i++) console.log(JSON.stringify(grid[i]));