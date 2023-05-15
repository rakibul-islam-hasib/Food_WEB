import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 ">
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <h3 className="font-bold text-2xl text-indigo-600">Flavorful Creations</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit, quae deserunt sequi a harum ullam ipsam impedit id quam.</p>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
                        <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                        <a className="my-3 text-sm block" href="/#">Floor 4 San Francisco,Rostov-na-donu6 , Russia
                            <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Phone : +7(928) 123-45-67
                            <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default Footer;