import React from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ProductListContainer } from './../components/productList';
import { SearchComp } from './../components/searchComp';
import {useEffect} from 'react';
import {frameURL} from '../components/utilities';

export default function Home(props) {
    const dispatch = useDispatch();
    useEffect(()=>{
        const pList = Object.values(props);
        dispatch({ type: 'INCREMENT_COUNTER',payload : pList});
    },[]);
    return (
        <div>
            <h1 className={styles.titleProgram}>SpaceX Lanuch Programs</h1>
            <div className={styles.flexcontainer}>

                <div className={styles.flexleft}>
                    <div className={styles.searchLeft}>
                        <SearchComp/>
                    </div>
                </div>
                <div className={styles.flexright}>
                    <ProductListContainer/>
                </div>
            </div>
            <footer className={styles.developerInfo}> <b>Developed by </b> : Thangaraj Mayilsamy</footer>
        </div>

    );
}

export const getServerSideProps = async (
    context
) => {
    const URL = frameURL(context.query);
    const data = await axios(URL);
    return { props: {...data.data}};
};