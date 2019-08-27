const fetchCalls = {

  fetchMovies() {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(data => this.setState({
      filmData: data.results[number]
    }))
    .catch(error => this.setState({ error }))
  }
}