import * as React from 'react';
import ServicesBreakdown from '../homepage/service-breakdown'


const Services = (props) => {
    return (
        <>
            <div className="bg-cream py-14">
                <div className="max-w-screen-2xl px-5 md:px-14 block m-auto">
                    <h3 className="text-brown font-light text-3xl md:text-6xl font-light pb-4">Our Services</h3>
                    <p className="text-brown text-2xl pb-10 md:pb-24">We focus on decentralized finance and digital assets.</p>
                </div>
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="col-span-2">
                <ServicesBreakdown
                    number="01"
                    title="Financial and risk model development"
                    subtitle="Our team of traditional and decentralized finance experts leverage state of the art tools to build financial and risk models using blockchain data."
                />
                <ServicesBreakdown
                    number="02"
                    title="Blockchain data"
                    subtitle="We provide access to fully-transparent blockchain data as well as data derived from smart contracts. This data is fundamental to any analysis or investigation."
                />
                <ServicesBreakdown
                    number="03"
                    title="Forensic and forward-looking research"
                    subtitle="Our research team uses the most reliable data available, leverages existing financial models, and develops new models in order to understand past events and predict future developments in decentralized finance."
                />
                <ServicesBreakdown
                    number="04"
                    title="Expert testimony"
                    subtitle="Our team of experts can provide reliable testimony to elucidate prepared expert reports and declarations."
                />
                </div>
                <div className="hidden lg:block col-span-1 px-10 max-w-xl mx-auto pt-10">
                    <img src="../assets/vertices.png" alt="Vertices" />
                </div>
            </div>
            </div>
        </>
    );
}

export default Services;