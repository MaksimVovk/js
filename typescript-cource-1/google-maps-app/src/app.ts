const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler (event: Event) {
  event.preventDefault()
  const eneredAddress = addressInput.value

  //send this to Google API
}

form.addEventListener('submit', searchAddressHandler)