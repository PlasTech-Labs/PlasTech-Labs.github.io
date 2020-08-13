import React from 'react';

import styles from './home.module.css';

import Navbar from '../Navbar';


export default function Home({ ...props }) {
    return(
        <div className={styles.fullVHDiv}>
            <div id='backgroundCarousel' className={`carousel slide ${styles.carouselBackground}`} data-ride='carousel'>
                <div className={`carousel-inner ${styles.carouselBackground}`}>
                    <div className={`carousel-item active ${styles.carouselBackgroundItem}`}>
                        <div className={styles.image}>

                        </div>
                    </div>
                    <div className={`carousel-item ${styles.carouselBackgroundItem}`}>
                        <div className={styles.image2}>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles.carouselBackgroundItem}`}>
                        <div className={styles.image3}>
                        </div>
                    </div>
                </div>
            </div>
            <a className={`carousel-control-prev ${styles.carouselArrow}`} href='#backgroundCarousel' role='button' data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='sr-only'>Prev</span>
            </a>
            <a className={`carousel-control-next ${styles.carouselArrow}`} href='#backgroundCarousel' role='button' data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
            </a>
            <Navbar
                navbarVisible={props.navbarVisible}
                displayNavbar={props.displayNavbar}
            />
        </div>
    )
}