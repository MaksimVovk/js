const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = 'AIzaSyCBXX75i_MPqdkEIZ75QBjsQx3MHQ2QEwE'

function searchAddressHandler (event: Event) {
  event.preventDefault()
  const eneredAddress = addressInput.value

  //send this to Google API
  //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

}

form.addEventListener('submit', searchAddressHandler)