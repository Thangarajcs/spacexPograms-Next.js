import { manageQueryParam } from '../components/utilities';

describe('function  should modify and return query param based one the inputs', () => {
    it ('when we select one filter result object should be modified and result should be TRUE', () => {
        const queryParamStrings = {
            launch_year:'2006',
            launch_success: 'true',
            land_success: 'true'
        };
        const expectedQueryParamStrings = {
            launch_year:'2007',
            launch_success: 'true',
            land_success: 'true'
        };
        const output =manageQueryParam(queryParamStrings,'launch_year','2007');
        expect(output).toEqual(expectedQueryParamStrings);
    });

    it ('when we select same filter result object should not have that key', () => {
        const queryParamStrings = {
            launch_year:'2006',
            launch_success: 'true',
            land_success: 'true'
        };
        const expectedQueryParamStrings = {
            launch_success: 'true',
            land_success: 'true'
        };
        const output =manageQueryParam(queryParamStrings,'launch_year','2006');
        expect(output).toEqual(expectedQueryParamStrings);
    });

});