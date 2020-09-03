import React from 'react';
import { INITIAL_STATE } from '../../Variables/initial_state';

import styles from './app.module.css';

import Home from '../Home' ;
import Team from '../Team';
import Contact from '../Contact';

class App extends React.Component {
    constructor() {
        super();
        this.state = {...INITIAL_STATE}
    }

    displayNavbar = () => {
        this.setState({ navbarVisible: !this.state.navbarVisible});
    }

    render() {
        return(
            <div className ={`container-fluid ${styles.container}`}>
                <div className='row'>
                    <Home
                        displayNavbar={this.displayNavbar}
                        navbarVisible={this.state.navbarVisible}
                    />
                    <Team/>
                    <Contact/>
                </div>
            </div>
        )
    }
}


export default App;
