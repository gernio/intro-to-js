let counter = 0
const main = () => {
  console.log('Hello world')
}
const addOneToCount = () => {
  console.log('add 1 to counter')
  // get current value of the counter
  // add 1 to counter
  counter = counter + 1
  console.log(counter)
  //update html
  //hey Dom, find the p, update the content
  document.querySelector('p').textContent = counter
}
const subtractOneFromCounter = () => {
  console.log('subtract 1 to counter')
   // get current value of the counter
  // add 1 to counter
  counter = counter - 1
  console.log(counter)
  //update html
  //hey Dom, find the p, update the content
  document.querySelector('p').textContent = counter
}


const updateName = () => {
  console.log('team name') 
  //get the value of the text
  const updateName = document.querySelector('.team-1-input').value
  //update html
  document.querySelector('h2').textContent = updateName

  
}


// Find the buttons, when you are clicked, do this thing
document
.querySelector ('.team-1-add-1-button')
.addEventListener('click', addOneToCount)
// Find the buttons, when you are clicked, do this thing

document
.querySelector ('.team-2-add-1-button')
.addEventListener('click', addOneToCount)

document
.querySelector('.team-1-subtract-1-button')
.addEventListener('click', subtractOneFromCounter)

document
.querySelector('.team-2-subtract-1-button')
.addEventListener('click', subtractOneFromCounter)

//Find the buttons, when clicked do the thing
document
.querySelector('.update-team-1-name')
.addEventListener('focus', updateName)

document
.querySelector('.update-team-2-name')
.addEventListener('focus', updateName)


document.addEventListener('DOMContentLoaded', main)
