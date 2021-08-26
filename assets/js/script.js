// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0


document.addEventListener('DOMContentLoaded', function () {



document.getElementById('flip').addEventListener('click', function() {
    let wasFlippedHeads = Math.random() < 0.5

    if (wasFlippedHeads){

      
        document.getElementById('message').textContent = 'You flipped heads!'
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        headFlips = headFlips + 1

    } else {

        
        document.getElementById('message').textContent = 'You flipped tails!'
        document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
        tailFlips = tailFlips + 1
    }

    let total = headFlips + tailFlips
    let percentHeads = 0
    let percentTails = 0

    if (total > 0) {
        percentHeads = Math.round((headFlips / total) * 100)
        percentTails = Math.round((tailFlips / total) * 100)
    }
        document.getElementById("heads").textContent = headFlips
        document.getElementById("tails").textContent = tailFlips
        document.getElementById("heads-percent").textContent = `${percentHeads}` + '%'
        document.getElementById("tails-percent").textContent = `${percentTails}` + '%' 
    
})


document.getElementById("clear").addEventListener('click', function(){

    headFlips = 0
    tailFlips = 0

    document.getElementById("message").textContent = "Let's Get Rolling!"

    let total = headFlips + tailFlips
    let percentHeads = 0
    let percentTails = 0

    if (total > 0) {
        percentHeads = Math.round(headFlips / total) * 100
        percentTails = Math.round(tailFlips / total) * 100
    }
        document.getElementById("heads").textContent = headFlips
        document.getElementById("tails").textContent = tailsFlips
        document.getElementById("heads-percent").textContent = `${percentHeads}` + '%'
        document.getElementById("tails-percent").textContent = `${percentTails}` + '%' 
})
})


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

