import React from 'react';

import './styles.css';


const Team = () => (
    <div className="team-container">
        <h1>Nuestro Equipo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className = "row">
            <div className = "col-3">
                <label>Maria Inés Vasquez</label>
            </div>
            <div className = "col-3">
                <label>Camila González</label>
            </div>
            <div className = "col-3">
                <label>Marco Fuentes</label>
            </div>
        </div>
        <div className = "row">
            <div className = "col-3">
                <label>Andy Castillo</label>
            </div>
            <div className = "col-3">
                <label>Francisco Rosal</label>
            </div>
            <div className = "col-3">
                <label>Gian Luca Rivera</label>
            </div>
        </div>
    </div>
);

export default(Team);
