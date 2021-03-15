import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement
const GOOGLE_API_KEY = 'AIzaSyCBXX75i_MPqdkEIZ75QBjsQx3MHQ2QEwE'

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number,
        lng: number
      }
    }
  }[]
  status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler (event: Event) {
  event.preventDefault()
  const eneredAddress = addressInput.value

  //send this to Google API
  const HOST = 'https://maps.googleapis.com/maps/api/geocode/json'
  const ADDRESS = 'address=' + encodeURI(eneredAddress)
  const API_KEY = 'key=' + GOOGLE_API_KEY

  axios.get<GoogleGeocodingResponse>(HOST + '?' + ADDRESS + '&' + API_KEY)
  .then(r => {
    if (r.data.status !== 'OK') {
      throw new Error('Could not fetch location!')
    }

    const coordinates = r.data?.results[0].geometry.location
    console.log(coordinates)
  })
  .catch(e => {
    alert(e.message)
    console.log(e)
  })

}

form.addEventListener('submit', searchAddressHandler)