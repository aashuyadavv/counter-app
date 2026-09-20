// document.getElementById("count-el").innertext = 5;

// let count = 5
//count = count + 1
//console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase
// decrease it down to 25, and then finally increase it to 70 
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById ("count-el") 
let count = 0

// console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}    

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
} 
// saveEl.innerText += countStr
// console.log(count)
// console.log("Let's count people on the subway!")