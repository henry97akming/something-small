const alternatives = [
  {text:"", images:"images/Welsh Corgi Hello.gif"},
  {text:"I promise you it will be unforgettable~", images:"images/Corgi Love.gif"},
  {text:"Nothing stopping you, right?", images:"images/Corgi No 1.gif"},
  {text:"Come on, dare to say yes~", images:"images/Corgi No 2.gif"},
  {text:"Please reconsider~", images:"images/Corgi No 3.gif"},
]
const ohyes = {text:"I knew you would accept~", images:"images/Corgi Yes.gif"}
const dog = document.querySelector('.dog')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')
const heartsContainer = document.getElementById("hearts-container");
const isMobile = window.innerWidth < 768;

let count = 0;

function updateDisplay(item){
  dog.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes, Of Course~"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
		  const heartCount = isMobile ? 25 : 50;
		  for (let i = 0; i < heartCount; i++) {
			  createHeart();
		  }
      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 15 + 12; // min size 12px
  heart.style.setProperty("--size", `${size}px`);

  const colors = ["#ff4d6d", "#ff758f", "#ff9aa2", "#e63946"];
  heart.style.setProperty(
    "--heart-color",
    colors[Math.floor(Math.random() * colors.length)]
  );

  heart.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}