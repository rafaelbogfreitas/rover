// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    position: [0,0],
    travelLog: [[0,0]]
};



// ======================
function turnLeft(rover){
    switch(rover.direction) {
        case "N":
            rover.direction = "W";
            console.log(`Rover turned to: ${rover.direction}\n`);
            break;
        case "E":
            rover.direction = "N";
            console.log(`Rover turned to: ${rover.direction}\n`);
            break;
        case "S":
            rover.direction = "E";
            console.log(`Rover turned to: ${rover.direction}\n`);
            break;
        case "W":
            rover.direction = "S";
            console.log(`Rover turned to: ${rover.direction}\n`);
            break;
        default:
            console.log("Wrong direction entered\n");
    }
}

function turnRight(rover){
    switch(rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
            default:
                console.log("Wrong direction entered");
            }
        console.log(`Rover turned to: ${rover.direction}\n==================\n`);
}

function moveForward(rover){
    switch(rover.direction) {
        case "N":
            if(rover.position[1] == 0) console.log("Area out of grid's range");
            else {
                rover.position[1] -= 1;
            }
            break;
        case "E":
            if(rover.position[0] == 10) console.log("Area out of grid's range");
            else {
                rover.position[0] += 1;
            }
            break;
        case "S":
            if(rover.position[1] == 10) console.log("Area out of grid's range");
            else {
                rover.position[1] += 1;
            }
            break;
        case "W":
            if(rover.position[0] == 0) console.log("Area out of grid's range");
            else {
                rover.position[0] -= 1;
            }
            break;
        default:
            console.log("Wrong direction entered");
    }
    console.log(`Rover moved forward and is now at position: ${rover.position}\n`);
}

function moveBackward(rover){
    switch(rover.direction) {
        case "N":
            if(rover.position[1] == 10) console.log("Area out of grid's range");
            else {
                rover.position[1] += 1;
            }
            break;
        case "E":
            if(rover.position[0] == 0) console.log("Area out of grid's range");
            else {
                rover.position[0] -= 1;
            }
            break;
        case "S":
            if(rover.position[1] == 0) console.log("Area out of grid's range");
            else {
                rover.position[1] -= 1;
            }
            break;
        case "W":
            if(rover.position[0] == 10) console.log("Area out of grid's range");
            else {
                rover.position[0] += 1;
            }
            break;
        default:
            console.log("Wrong direction entered");
    }
    console.log(`Rover moved forward and is now at position: ${rover.position}\n`);
    console.log("moveBackward was called");
}

function translateCommands(str){
    let positionArr = [];
    console.log(`translateCommands was called with: ${str}\n===========`);
    if(!str.match(/^[fbrlFBRL]+$/g)){
        console.log('Input must be one of this letters: r, l, f, and b');
        return;
    }

    for(let i = 0; i <= str.length; i++){
        switch(str[i]){
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
                break;
            default:
                console.log("Wrong command!");
        }
    };

}

translateCommands('rfffrff');
console.log(rover);


