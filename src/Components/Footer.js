import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="flex-ft">
                    <div className="logo-bt"><img src="./static/images/logo-bt.svg" alt="" /></div>
                    </div>

                    <div className="flex-ft">
                    <div className="bt-info">
                        DISCOVER NFTS BY LUmETA, TRACK THE LATEST DROPS, AND FOLLOW THE COLLECTIONS!
                    </div>
                    <div className='wrapper-politics'>
                        <div className="copyright"><span>©</span> 2023 LUMETA</div>
                        <a href="#" className="politic">ALL RIGHTS RESERVED. <span>2023 </span></a>
                    </div>
                </div>
            </div>

            {/* <style>
                header .container:before{
                    background: none;
                }
            </style> */}
    </footer>
    );
};

export default Footer;