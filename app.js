// Init local storage
const storage = new Storage()
// Get stored location data
const weatherLocation = storage.getLocationData()

// Initialise the weather object
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode)
// INit UI
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const countryCode = document.getElementById('countryCode').value

  // Change location
  weather.changeLocation(city, countryCode)

  // Set location in LS
  storage.setLocationData(city, countryCode)

  // Get and display weather
  getWeather()

  // Close modal
  $('#locModal').modal('hide')
})

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // console.log(results)
      ui.paint(results)
    })
    .catch(err => console.log(err))
}

function convertKelToCel(kelvin) {
  return Math.round(300 - kelvin)
}
