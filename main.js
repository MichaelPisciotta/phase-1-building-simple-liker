const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!

let modal = document.querySelector('.hidden')



function clickHeart(){
  let hearts = document.getElementsByClassName('like-glyph')
  for(const heart of hearts){
    heart.addEventListener('click', () => {
      if (heart.classList.contains("activated-heart")){
        heart.classList.remove("activated-heart")
      } else { heart.classList.add("activated-heart")}
    })
  }
}
clickHeart()







function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}








