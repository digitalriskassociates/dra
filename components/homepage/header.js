import * as React from 'react';
import Nav from './nav';

const Header = (props) => {
    return (
        <>
        <div className="bg-black">
            <Nav />
            <div className="max-w-lg px-5 md:px-14 block m-auto pt-24">
                <img src="../assets/drd-logo.png" alt="DRD logo" />
                <p className="text-white text-xl pt-14">Digital Risk Development (DRD) is a unique Singapore-based software development company focusing on financial risk software. We are always looking for highly-qualified employees. If you are qualified in one of these areas, please get in touch.</p>
                <ul className="text-white text-xl list-disc py-4 ml-4">
                    <li>Data Engineer</li>
                    <li>Frontend Engineer</li>
                    <li>Backend Engineer</li>
                    <li>DevOps Engineer</li>
                    <li>Quantitative Reporting Analyst</li>
                    <li>Risk Management Specialist</li>
                    <li>Business Intelligence Specialist</li>
                </ul>
                <p className="text-white text-xl pb-14">We hire across the globe. We pay competitive salaries.</p>
            </div>
        </div>
    </>
    );
}

export default Header;