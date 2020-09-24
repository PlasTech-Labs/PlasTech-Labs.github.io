import React from 'react'

import styles from './footer.module.css';
import { Link } from 'react-scroll';


import facebook from '../../Assets/Icons/fb_logo.png'
import instagram from '../../Assets/Icons/instagram_logo.png'
import arrow from '../../Assets/Icons/arrow.png'

export default function Footer() {
    return (
        <div className={styles.fullVHDiv}>
            <div className='row no-gutters'>
                <div className='col-lg-5 col-md-5 col-12'>
                <div className={styles.textContainer}>
                    <p>PlasTech Labs</p>
                    <p>plastechlabs@gmail.com</p>
                </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <div className={styles.iconContainer}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt='instagram'/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt='facebook'/>
                        </a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 col-12'>
                    <div className={styles.arrowContainer}>
                        <Link
                        to="home"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                            <img src={arrow} alt="Up" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}