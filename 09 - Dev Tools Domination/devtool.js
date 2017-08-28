const dogs = [{
  name: 'Snickers',
  age: 2
}, {
  name: 'hugo',
  age: 8
}];
const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
} 

// Regular

// Interpolated
console.log('hello %s', 'yui')
// Styled
console.log('%c great text', 'font-size: 25px; background: red')
// warning!
console.warn('on noooooooo')
// Error :|
console.error('SHiffdsafads')
// Info
console.info('a bit info')
// Testing
console.assert(1===2, 'that is wrong')
// clearing
//console.clear()
// Viewing DOM Elements
console.dir(p)
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name }`)
  console.log(`this is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.groupEnd(`${dog.name }`)
})
// counting
console.count('yui')
console.count('yui')
console.count('yui')
console.count('yui')
console.count('yui')
console.count('yui')
// timing
console.time('fetch start')
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => {
    console.timeEnd('end')
    console.log(data)
  })