import React from 'react';
import { Link } from 'react-router-dom';

import { gitUrl } from '../../App';

const Logo = () => {
    return (
        <div className="logo">
            <Link className="logo_block" to={`${gitUrl}`}><img src="static/images/logo_black.png" alt="" /></Link>
        </div>
    );
};

export default Logo;