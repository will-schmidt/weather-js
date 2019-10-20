class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    // this.icon = document.getElementById('w-icon') Not supported
    this.humidity = document.getElementById('w-humidity')
    this.pressure = document.getElementById('w-pressure')
    this.windSpeed = document.getElementById('w-wind-speed')
    this.windDirection = document.getElementById('w-wind-direction')
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].main
    this.string.textContent = `${convertKelToCel(weather.main.temp)}\u00B0C`
    this.humidity.textContent = `Humidity ${weather.main.humidity}%`
    this.pressure.textContent = `Pressure ${weather.main.pressure} hPA`
    this.windSpeed.textContent = `Wind speed: ${weather.wind.speed} mps`
    this.windDirection.textContent = `Wind direction: ${weather.wind.deg}`
  }
}
