const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search')
const suggestion = document.querySelector('.suggestions')

let cities = []

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    cities = Array.from(data)
    console.log(cities)
  })


function findMatches(wordToMatch, cities) {
  return cities.filter( palce => {
    const reg = new RegExp(wordToMatch, 'gi')
    return palce.city.match(reg) || palce.state.match(reg)
  })
}
function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
      <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='poputation'>${place.population}</span>
      </li>
      `
  }).join('')
  suggestion.innerHTML = html
}

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
