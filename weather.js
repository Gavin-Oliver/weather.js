class Weather {
  constructor(city, state) {
    this.apiKey = '46afb629ed1156d5';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from the api
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const resData = await response.json();
    return resData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}