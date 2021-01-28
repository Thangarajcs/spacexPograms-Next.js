import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
    useSelector } from 'react-redux';
import styles from './../styles/productStyles.module.css';
export function ProductListContainer() {
    /* getting the latest state from store for product */
    const productList = useSelector(state => state.productList);
    const productListItems = Object.values(productList);

    return (
        <div>
            {
                productListItems && productListItems.length > 0?

                    <Grid container spacing={3}>
                        {
                            productListItems.map ((item,index)=> {
                                return <Grid key={index} item xs={12} sm={6} xl={3} lg={3}>

                                    <div className={styles.productCard}>
                                        <div className={styles.ImageContainer}>
                                            <img  width={256} height={256} className={styles.productImage} src={item.links.mission_patch_small} alt={item.mission_name} />
                                        </div>
                                        <h4 className={styles.productName}>{item.mission_name} #{item.flight_number}</h4>
                                        <section className={styles.footerinfo}>
                                            <div ><b>Mission Id: </b>
                                                {
                                                    item.mission_id.length > 0 ? <ul className={styles.missionList}>{ item.mission_id.map((x,ind)=><li key={ind+'x'}>{x}  </li>) }</ul> :<span>NA</span>
                                                }
                                            </div>
                                            <div><b>Launch Year: </b><span className={styles.infoValue}>{item.launch_year}</span></div>
                                            <div><b>Successful Launch: </b><span className={styles.infoValue}>{`${item.launch_success}`}</span></div>
                                            <div><b>Successful Landing: </b><span className={styles.infoValue}>{`${item.rocket.first_stage.cores[0].land_success}`}</span></div>
                                        </section>

                                    </div>

                                </Grid>;
                            })
                        }
                    </Grid> : <div className={styles.noData}><h4>No Data Available</h4></div>}
        </div>
    );
}