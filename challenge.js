// document.addEventListener("DOMContentLoaded", () => {

// });


let plusButton = document.getElementById('plus')
let minusButton = document.getElementById('minus')
let heartButton = document.getElementById('heart')
let pauseButton = document.getElementById('pause')
let commentForm = document.getElementById('comment-form')
let commentDiv = document.querySelector('div')

let timestamp = new Date();
timestamp.setHours(0)
timestamp.setMinutes(0)
timestamp.setSeconds(0,0)

// Alert "Hello" every 3 seconds (3000 milliseconds):
// setInterval(function(){ alert("Hello"); }, 3000);

setInterval(function(){
    document.getElementById('counter').innerText = timestamp.getSeconds() 
    timestamp.setTime(timestamp.getTime()+ 1000)
}, 1000)

plusButton.addEventListener('click', () => {
    document.getElementById('counter').innerText = timestamp.getSeconds()
    timestamp.setTime(timestamp.getTime()+ 1000)
})

minusButton.addEventListener('click', () => {
    document.getElementById('counter').innerText = timestamp.getSeconds()
    timestamp.setTime(timestamp.getTime() - 1000)
})


let likeCounter = document.createElement('p')
likeCounter = 0 
heartButton.addEventListener('click', (evt) => {
        console.log(likeCounter.innerText)
        let likeUL = document.querySelector('.likes')
        let likeIL = document.createElement('li')
        console.log(parseInt(likeCounter) + 1)

        likeIL.innerText = timestamp.getSeconds() + ' has been like ' + likeCounter + ' times'
        likeUL.append(likeIL)
})

pauseButton.addEventListener('click', () => {
    document.getElementById('counter').innerText = timestamp.getSeconds()
    console.log(timestamp.getSeconds())
    // timestamp.setTime(timestamp.getTime())
})

commentDiv.addEventListener('submit', (event) => {
    event.preventDefault()
    let commentLi = document.createElement('li')
    commentLi.innerText = event.target.comment.value
    commentDiv.append(commentLi)

})