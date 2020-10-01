import React from 'react';

import './styles.css';


const AboutUs = () => (
    <div className="d-flex flex-column justify-content-center aboutUsContainer" name="about">
        <div className="d-flex flex-column teamTitle">
            <h1 className = "d-flex justify-content-center">Acerca de nostros</h1>
            <div className="aboutUs-text">
                <p class="text-center">
                Estudiantes universitarios jóvenes y emprendedores que quieran hacer un cambio, comenzando 
                en Guatemala por hacer un ambiente creativo y sustentable abierto a la innovación con el 
                plástico, fomentando la conciencia ambiental.
                </p>
            </div>
        </div>
        <div className="d-flex flex-column mision-vision">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center flex-wrap ">
                    <div className="col-md-5  col-sm mision-container">
                        <h3 className = "d-flex justify-content-center">Misión</h3>
                        <p class="text-justify">
                            Ofrecer a los guatemaltecos una opción para reciclar el 
                            plástico que utilizan diariamente y contribuir con el 
                            cuidado del medio ambiente evitando el desecho irresponsable 
                            de este polímero.
                        </p>
                    </div>
                    <div className="col-md-5  col-sm vision-container">
                        <h3 className = "d-flex justify-content-center">Visión</h3>
                        <p class="text-justify">
                            Ser la primera red de personas en Guatemala que contribuyan entre 
                            sí para lograr darle un nuevo ciclo de vida a productos plásticos 
                            a través de la elaboración de artículos para construcción, 
                            decoración y educación, fabricados con dicho material. Apoyando 
                            a la educación ambiental, y limpiando los ecosistemas de Guatemala.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default(AboutUs);
