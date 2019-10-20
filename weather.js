class Weather {
  constructor(city, countryCode) {
    this.apiKey = 'a275c6e4a85636b41310f9e3ae0404f8'
    this.city = city
    this.countryCode = countryCode
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`
    )

    const responseData = await response.json()

    return responseData
  }

  // Change weather location
  changeLocation(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }
}
