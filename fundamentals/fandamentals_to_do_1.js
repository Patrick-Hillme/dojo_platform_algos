// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42;
let myName = "Patrick"
let temp = ""
const swap = () => {
    temp = myNumber;
    myNumber = myName;
    myName = temp;
    results = `Number: ${myNumber} Name: ${myName}`
    return results;
}

console.log(swap());