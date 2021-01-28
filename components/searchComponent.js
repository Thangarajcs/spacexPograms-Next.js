/* eslint max-statements: 0 */
import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './../styles/serachStyles.module.css';
import router ,{ useRouter }from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { frameURL, manageQueryParam } from './utilities';
export function SearchComponent() {
    const filterYearA = [ 2006,2008,2010,2012,2014,2016,2018,2020];
    const filterYearB = [ 2007,2009,2011,2013,2015,2017,2019];
    const { query } = useRouter();
    const queryParamStrings = {
        launch_year:query.launch_year || '',
        launch_success: query.launch_success || '',
        land_success: query.land_success || ''
    };
    const dispatch = useDispatch();

    /* API call on the  filter update */
    const updateProductList = async (obj) => {
        try{
            const URL = frameURL(obj);
            const data = await axios(URL);
            return { ...data.data};
        }catch (e){
            throw e;
        }
    };

    /*This fuction is for updating route and calling api for new data */
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
            dispatch({ type: 'UPDATE_PRODUCT_LIST',payload :queryResponse });
        }catch (e){
            throw e;
        }

    };
    /* below fuctions are responsible for filter changes*/

    const filterYearChanged = (qkey ,value) => {

        const updatedParam = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(updatedParam);

    };

    const landInputChanged  = (qkey ,value) => {
        const val = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(val);
    };

    const  launchInputChanged = (qkey ,value) => {
        const val = manageQueryParam(queryParamStrings,qkey,value);
        updateRoute(val);

    };

    return (
        <div className={styles.listStyle}>
            <h2 className={styles.filterTitle}>Filters</h2>
            <section>
                <h4 className={styles.filterHead}>Launch Year</h4>
            </section>


            <div className={styles.row}>
                <div className={styles.column}>
                    {
                        filterYearA.map((year,index) =>
                            <Button style={{ backgroundColor: queryParamStrings.launch_year === year.toString()? '#7cba01': '#c5e09b'}} key={index}  variant="outlined" color="primary"
                                onClick={() =>  filterYearChanged('launch_year',`${year}`)}>{year}</Button>
                        )
                    }
                </div>
                <div className={styles.column}>
                    {
                        filterYearB.map((year,index) =>
                            <Button style={{ backgroundColor: queryParamStrings.launch_year === year.toString()? '#7cba01': '#c5e09b'}} key={index} variant="outlined" color="primary"
                                onClick={() =>  filterYearChanged('launch_year',`${year}`)}>{year}</Button>
                        )
                    }
                </div>
            </div>
            <section>
                <h4 className={styles.filterHead}>Successful Launch</h4>
            </section>

            <div className={styles.row}>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.launch_success === 'true'? '#7cba01': '#c5e09b'}} variant="outlined" color="primary" onClick={() =>  launchInputChanged('launch_success','true') }>true</Button>
                </div>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.launch_success === 'false'? '#7cba01': '#c5e09b'}} variant="outlined" color="primary" onClick={() =>  launchInputChanged('launch_success','false') }>false</Button>
                </div>
            </div>
            <section>
                <h4 className={styles.filterHead}>Successful Landing</h4>
            </section>
            <div className={styles.row}>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.land_success === 'true'? '#7cba01': '#c5e09b'}} variant="outlined" color="primary" onClick={() =>  landInputChanged('land_success','true') }>true</Button>
                </div>
                <div className={styles.column}>
                    <Button style={{ backgroundColor: queryParamStrings.land_success === 'false'? '#7cba01': '#c5e09b'}} variant="outlined" color="primary" onClick={() =>  landInputChanged('land_success','false') }>false</Button>
                </div>
            </div>
        </div>
    );

}