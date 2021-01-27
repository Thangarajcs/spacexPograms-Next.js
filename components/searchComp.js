/* eslint max-statements: 0 */
import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './serachStyles.module.css';
import router ,{ useRouter }from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { frameURL, manageQueryParam } from './utilities';
export function SearchComp() {
    const filterYearA = [ 2006,2008,2010,2012,2014,2016,2018,2020];
    const filterYearB = [ 2007,2009,2011,2013,2015,2017,2019];
    const { query } = useRouter();
    const queryParamStrings = {
        launch_year:query.launch_year || '',
        launch_success: query.launch_success || '',
        land_success: query.land_success || ''
    };
    const dispatch = useDispatch();


    const updateProductList = async (obj) => {
        try{
            const URL = frameURL(obj);
            const data = await axios(URL);
            return { ...data.data};
        }catch (e){
            throw e;
        }
    };


    function filterYearChanged (qkey ,value) {

        const updatedParam = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(updatedParam);

    }
    const  updateRoute = async (queryString) =>{
        try{
            await router.push(
                {
                    pathname: '/',
                    query: queryString
                },
                undefined,
                { shallow: true }
            );
            const queryResponse = await updateProductList(queryString);
            dispatch({ type: 'INCREMENT_COUNTER',payload :queryResponse });
        }catch (e){
            throw e;
        }

    };

    function landInputChanged (qkey ,value) {
        const val = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(val);
    }

    function launchInputChanged (qkey ,value) {
        const val = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(val);

    }

    return (
        <div className={styles.listStyle}>
            <h2 className={styles.searchTitle}>Filters</h2>
            <h5 className={styles.searchTitle}>Launch Year</h5>


            <div className={styles.row}>
                <div className={styles.column}>
                    {
                        filterYearA.map((year,index) =>
                            <Button style={{ backgroundColor: queryParamStrings.launch_year === year.toString()? '#73b34b': '#b9f792'}} key={index}  variant="outlined" color="primary" onClick={() =>  filterYearChanged('launch_year',`${year}`)}>{year}</Button>
                        )
                    }
                </div>
                <div className={styles.column}>
                    {
                        filterYearB.map((year,index) =>
                            <Button style={{ backgroundColor: queryParamStrings.launch_year === year.toString()? '#73b34b': '#b9f792'}} key={index} variant="outlined" color="primary" onClick={() =>  filterYearChanged('launch_year',`${year}`)}>{year}</Button>
                        )
                    }
                </div>
            </div>
            <h5>Successful Launch</h5>

            <div className={styles.row}>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.launch_success === 'true'? '#73b34b': '#b9f792'}} variant="outlined" color="primary" onClick={() =>  launchInputChanged('launch_success','true') }>true</Button>
                </div>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.launch_success === 'false'? '#73b34b': '#b9f792'}} variant="outlined" color="primary" onClick={() =>  launchInputChanged('launch_success','false') }>false</Button>
                </div>
            </div>
            <h5>Successful Landing</h5>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.land_success === 'true'? '#73b34b': '#b9f792'}} variant="outlined" color="primary" onClick={() =>  landInputChanged('land_success','true') }>true</Button>
                </div>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.land_success === 'false'? '#73b34b': '#b9f792'}} variant="outlined" color="primary" onClick={() =>  landInputChanged('land_success','false') }>false</Button>
                </div>
            </div>
        </div>
    );

}