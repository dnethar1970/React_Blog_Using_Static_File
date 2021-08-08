import React from 'react';
import Logo from '../logo/logo.component';
import Navbar from '../navbar/navbar.component';
import Card from '../ui/card/card.component';
import './hero.styles.css';

const Hero = (props) => {
    return (
        <div>
            <Card>
                <div style={{padding: '50px 0'}}>
                    <Logo />
                </div>
                <Navbar />
            </Card>
        </div>
    )
};

export default Hero;