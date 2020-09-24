import React from 'react';
import { Link } from 'react-scroll';

import styles from './navbar.module.css';

import menu from '../../Assets/Icons/menu.png';

export default function Navbar({ ...props }) {
    return(
        <div className={`row no-gutters`}>
            <div className='col-6 col-md-3 col-lg-3'>
                <div className={styles.whiteContainer}>
                    <div className={styles.logo}>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-3 d-md-block d-lg-block d-none'>
                <div className={styles.whiteContainer}>
                </div>
            </div>
            <div className='col-md-6 col-lg-6 d-none d-md-block d-lg-block'>
                <div className='row no-gutters'>
                    <div className='col'>
                        <Link
                            to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className={styles.navItem}>
                                <p>Inicio</p>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link
                            to='about'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className={styles.navItem}>
                                <p>Acerca de nosotros</p>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link
                            to='project'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className={styles.navItem}>
                                <p>Proyectos</p>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link
                            to='team'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className={styles.navItem}>
                                <p>Equipo</p>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link
                            to='contact'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <div className={styles.navItem}>
                                <p>Contáctanos</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-3 d-block d-md-none d-lg-none'>
                <div className={styles.whiteContainer}></div>
            </div>
            <div className='col-3 d-block d-md-none d-lg-none'>
                <div
                    className={styles.dropdownIcon}
                    onClick={props.displayNavbar}
                >
                    <img src={menu}></img>
                </div>
            </div>
            <div
                className={styles.navbarContainer}
                hidden={!props.navbarVisible}
            >
                <Link
                    className={styles.home}
                    to='home'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.navItem}>
                        <p>Inicio</p>
                    </div>
                </Link>
                <Link
                    className={styles.about}
                    to='about'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.navItem}>
                        <p>Acerca de nosotros</p>
                    </div>
                </Link>
                <Link
                    className={styles.about}
                    to='project'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.navItem}>
                        <p>Proyectos</p>
                    </div>
                </Link>
                <Link
                    className={styles.team}
                    to='team'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.navItem}>
                        <p>Equipo</p>
                    </div>
                </Link>
                <Link
                    className={styles.contact}
                    to='contact'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <div className={styles.navItem}>
                        <p>Contáctanos</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}