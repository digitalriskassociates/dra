import * as React from 'react';

const Services = (props) => {
    return (
        <>
                <div>
                    <div className="max-w-screen-2xl px-5 md:pl-14 block m-auto flex flex-wrap lg:flex-nowrap py-14">
                        <h4 className="text-brown text-8xl font-bold pb-4 fatface pr-10">{props.number}</h4>
                        <div>
                        <p className="playfair text-brown text-2xl pb-3">{props.title}</p>
                        <p className="text-brown text-2xl">{props.subtitle}</p>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Services;