import cleaner from './cleanData';
import uncleanData from './sampleUncleanData'

describe('Data Cleaner', () => {

  it('should return clean people data when called', () => {
    expect(cleaner.cleanPeople([uncleanData.uncleanPeople()])).toEqual([uncleanData.cleanPeople()]) 
  }); 

  it('should return clean planet data when called', () => {
    expect(cleaner.cleanPlanets([uncleanData.uncleanPlanet()])).toEqual([uncleanData.cleanPlanet()]) 
  });

  it('should return clean vehicle data when called', () => {
    expect(cleaner.cleanVehicles({results: [uncleanData.uncleanVehicle()]})).toEqual([uncleanData.cleanVehicle()])
  })
});