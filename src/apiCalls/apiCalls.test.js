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
});