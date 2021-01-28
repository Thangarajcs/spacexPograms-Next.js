import React from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ProductListContainer } from '../components/productList';
import { SearchComponent } from '../components/searchComponent';
import { useEffect } from 'react';
import { frameURL } from '../components/utilities';

export default function Home(props) {
    const dispatch = useDispatch();
    /* storing the initial response from SSR to store */
    useEffect(()=>{
        const productList = Object.values(props);
        dispatch({ type: 'UPDATE_PRODUCT_LIST',payload : productList});
    },[]);
    return (
        <div>
            <h1 className={styles.projectTitle}>SpaceX Launch Programs</h1>
            <div className={styles.flexcontainer}>

                <section className={styles.searchContainerLeft}>
                    <div className={styles.searchContainer}>
                        <SearchComponent/>
                    </div>
                </section>
                <section className={styles.productDisplayContainer}>
                    <ProductListContainer/>
                </section>
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