// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function birthday(num) {
    if (num === 1027 || num === 2710) {
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

birthday(2710);