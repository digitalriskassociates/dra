import * as React from 'react';
import Nav from './nav';

const Header = (props) => {
    return (
        <>
        <div className="bg-brown">
            <Nav />
            <div className="max-w-screen-2xl px-5 md:px-14 block m-auto">
                <strong><h1 className="text-white text-5xl md:text-8xl py-5 pt-16 md:pt-28 leading-relaxed">Understand DeFi</h1></strong>
                <p className="text-white text-3xl pb-14">Use reliable data and sophisticated financial models to uncover facts.</p>
            </div>
        </div>
    </>
    );
}

export default Header;