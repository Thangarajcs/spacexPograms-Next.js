import {frameURL } from './../components/utilities'
describe('function should return valid URL based on param', () => {
    it ('when all 3 params are in URL then expected URL should be TRUE', () => {
        const queryParamStrings = {
            launch_year:2006,
            launch_success: true,
            land_success: true
        };
        const expectedUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2006&launch_success=true&land_success=true&'
        const output =frameURL(queryParamStrings);
        console.log('obj',output);
        expect(output).toEqual(expectedUrl);
    });

    it ('when all  params are in URL then default API url should be returned', () => {
        const queryParamStrings = {
        };
        const expectedUrl = 'https://api.spaceXdata.com/v3/launches?limit=100&'
        const output =frameURL(queryParamStrings);
        expect(output).toEqual(expectedUrl);
    });

});