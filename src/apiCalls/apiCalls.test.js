import fetchCalls from './apiCalls';

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }))
  });

  it('should get movies', async () => {
    const url = 'https://swapi.co/api/films'
    await fetchCalls.fetchMovies()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should get people', async () => {
    const url = 'https://swapi.co/api/people/'
    await fetchCalls.fetchCharacters()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should get planets', async () => {
    const url = 'https://swapi.co/api/planets/'
    await fetchCalls.fetchPlanets()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
  
  it('should get vehicles', async () => {
    const url = 'https://swapi.co/api/vehicles'
    await fetchCalls.fetchVehicles()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
});