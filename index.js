
const guessGame = (range) => {
  const randomNum =
    Math.floor(Math.random() * range) + 1

  let guessNum =
    prompt(`guess a number between 1-${range}`)

  if (guessNum > range) {
    alert(`Please choose a number between 1 and ${range}`);
    
  } else if (guessNum != randomNum) {
    console.log(`oops try again the number was ${randomNum}`)

  } else {
    range = range + 1
    prompt(`Hurray you won and qualified for stage 2! now guess a number between 1-${range}`)
  }

}

console.log(guessGame(2))