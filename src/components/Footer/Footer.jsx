import { faDatabase, faEarth, faGift, faLineChart, faNetworkWired, faTeethOpen, faTextWidth, faTShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='py-10 text-white bg-slate-950'>
            <div className='flex flex-col md:flex-row w-[80%] mx-auto justify-between'>
                <div className='py-5 space-y-1'>
                    <h1>Exxistence</h1>
                    <p className='text-xs text-slate-300'>Exxistence Inc. serves you the top notch opportunities.</p>
                    <div className='space-x-2 text-xl text-slate-200'>
                        <FontAwesomeIcon icon={faDatabase} />
                        <FontAwesomeIcon icon={faEarth} />
                        <FontAwesomeIcon icon={faNetworkWired} />
                    </div>
                </div>
                <div className='space-y-5 md:space-y-0 md:flex gap-20'>
                    <div>
                        <h1>Company</h1>
                        <ul className='text-xs text-slate-400'>
                            <li>About Us</li>
                            <li>Sitemap</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Service</h1>
                        <ul className='text-xs text-slate-400'>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Consumers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Support</h1>
                        <ul className='text-xs text-slate-400'>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <ul className='text-xs text-slate-400'>
                            <li>San Francisco, CA</li>
                            <li>+1-404-10101</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-t w-[80%] mx-auto border-slate-800 mt-5 text-center pt-2'>
                <small>All right reserved <span className='text-blue-300'>&copy;Exxistence 2023</span></small>
            </div>
        </div >
    );
};

export default Footer;