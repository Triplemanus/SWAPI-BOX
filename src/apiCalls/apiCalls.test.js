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

  it('should throw error when fetching movies', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(fetchCalls.fetchMovies()).rejects.toEqual(Error('there was a problem fetching your data'))
  })

  it('should get people', async () => {
    const url = 'https://swapi.co/api/people/'
    await fetchCalls.fetchCharacters()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should throw error when fetching people', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(fetchCalls.fetchCharacters()).rejects.toEqual(Error('there was a problem fetching your data'))
  })

  it('should get planets', async () => {
    const url = 'https://swapi.co/api/planets/'
    await fetchCalls.fetchPlanets()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
  
  it('should throw error when fetching planets', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(fetchCalls.fetchPlanets()).rejects.toEqual(Error('there was a problem fetching your data'))
  })

  it('should get vehicles', async () => {
    const url = 'https://swapi.co/api/vehicles'
    await fetchCalls.fetchVehicles()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });
  it('should throw error when fetching vehicles', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(fetchCalls.fetchVehicles()).rejects.toEqual(Error('there was a problem fetching your data'))
  })

});