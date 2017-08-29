const inbox = document.querySelector('.inbox')
const items = document.querySelectorAll('.item input[type="checkbox"]')
Array.from(items).forEach((item, index) => item.dataset.id = index)
let lastChekced
 
function handleCheck (e) {
  let inBetween = false
  if (e.shiftKey && this.checked) {
    items.forEach( checkbox => {
      if (checkbox === this || checkbox == lastChekced) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChekced = this
}


items.forEach(checkbox => checkbox.addEventListener('click', handleCheck))



 