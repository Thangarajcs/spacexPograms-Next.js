/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>SpaceX Launch Programs</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Web site to view spacex launch programs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>
            </Head>
            <Component {...pageProps}/>
        </Provider>
    );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
