const colorbox = document.getElementById('colorBox');
const colouropt = document.getElementById('colorOption');
const status = document.getElementById('gameStatus');
const newGameButton = document.getElementById('newGameButton');
const scoreDisplay = document.getElementById('score');
let score = 0;
let randomColor;

const colors = [
  "rgb(190, 236, 24)",
  "rgb(19, 7, 5)",
  "rgb(255, 0, 0)",
  "rgb(11, 25, 230)",
  "rgb(159, 33, 233)",
  "rgb(21, 177, 224)",
]

const randomColorGenerator = () => {
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorbox.style.backgroundColor = randomColor;
};
const changescore = () => {
  scoreDisplay.textContent = `score: ${score}`;

}

const result =()=>{
  randomColorGenerator();
  status.textContent = 'correct';
}

const wrong =()=>{
  status.textContent = 'wrong';
}

colouropt.addEventListener('click', (e) => {
  if (e.target.style.backgroundColor === randomColor) {
    score++;
    scoreDisplay.style.color = 'green';
    result();
    changescore()
  } else {
    wrong();
    scoreDisplay.style.color = 'red';
    changescore()
  }
}); 

newGameButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.style.color = 'black';
  status.textContent = '';
  randomColorGenerator();
  changescore()
} );    


colors.forEach((color) => {
  const div = document.createElement('div');
  div.style.backgroundColor = color;
  div.style.width = '200px';
  div.style.height = '200px';
  div.style.margin = '10px';
  div.style.display = 'inline-block';
  div.style.borderRadius ="20px"
  colouropt.appendChild(div);

});

randomColorGenerator();
changescore()


