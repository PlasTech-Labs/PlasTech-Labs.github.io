import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

import imgMaria from '../../Assets/media/Maria.jpeg';
import imgCamila from '../../Assets/media/Camila.JPG';
import imgMarco from '../../Assets/media/Marco.jpg';
import imgAndy from '../../Assets/media/Andy.jpeg';
import imgWilli from '../../Assets/media/Willi.jpg';
import imgLuca from '../../Assets/media/Luca.jpg';


const Team = () => (
    <div className="d-flex flex-column justify-content-center" name="team">
        <div className="d-flex flex-column teamTitle">
            <h1 className = "d-flex justify-content-center">Nuestro Equipo</h1>
        </div>
        <div className = "d-flex flex-column teamContainer">
            <div className="container-fluid">
                <div className = "row d-flex justify-content-center flex-wrap">
                    <div className = "col-md-3  col-sm">
                        <img src = {imgMaria} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>María Inés Vasquez</label>
                            <div>
                                <a href="https://www.facebook.com/mariaines.vasquez.52"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/mariainesvasquez/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src = {imgCamila} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>Camila González</label>
                            <div>
                                <a href="https://twitter.com/pcamilago"><FontAwesomeIcon icon={faTwitter} className="socialMedia-icons left"/></a>
                                <a href="https://www.facebook.com/paulacamilago"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/camilago12/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src = {imgMarco} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>Marco Fuentes</label>
                            <div>
                                <a href="https://twitter.com/pictureframe05"><FontAwesomeIcon icon={faTwitter} className="socialMedia-icons left"/></a>
                                <a href="https://www.facebook.com/mfuenteslima"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/pictureframe16/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className = "row d-flex justify-content-center flex-wrap ">
                    <div className = "col-md-3  col-sm">
                        <img src = {imgAndy} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>Andy Castillo</label>
                            <div>
                                <a href="https://twitter.com/andysam12"><FontAwesomeIcon icon={faTwitter} className="socialMedia-icons left"/></a>
                                <a href="https://www.facebook.com/andy.castillo.16503"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/andycas99/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src = {imgWilli} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>Francisco Rosal</label>
                            <div>
                                <a href="https://www.facebook.com/willi.rosal.1"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/willir98/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-3  col-sm">
                        <img src = {imgLuca} className="img-fluid" alt="Responsive image"/>
                        <div className="lblName d-flex justify-content-between">
                            <label>Gian Luca Rivera</label>
                            <div>
                                <a href="https://twitter.com/LucaBia11"><FontAwesomeIcon icon={faTwitter} className="socialMedia-icons left"/></a>
                                <a href="https://www.facebook.com/gianluca.riverabiagioni"><FontAwesomeIcon icon={faFacebookF} className="socialMedia-icons left"/></a>
                                <a href="https://www.instagram.com/luca.r.biagioni/"><FontAwesomeIcon icon={faInstagram} className="socialMedia-icons"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default(Team);
