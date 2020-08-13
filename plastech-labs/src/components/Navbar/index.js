import React from 'react';
import { Link } from 'react-scroll';

import styles from './navbar.module.css';

export default function Navbar({ ...props }) {
    return(
        <div className={`row no-gutters`}>
            <div className='col-6 col-md-3 col-lg-3'>
                <div className={styles.logo}>
                </div>
            </div>
            <div className='offset-md-3 offset-lg-3 col-md-6 col-lg-6 d-none d-md-block d-lg-block'>
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
            <div className='offset-3 col-3 d-block d-md-none d-lg-none'>
                <div
                    className={styles.dropdownIcon}
                    onClick={props.displayNavbar}
                >
                    Icon
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