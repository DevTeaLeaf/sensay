import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import BurgerMenu from './BurgerMenu';
import BuddaSlider from './UI/BuddaSlider';
import BurgerIcon from './UI/BurgerIcon';
import Lang from './UI/Lang';
import Logo from './UI/Logo';
import Socials from './UI/Socials';

import { gitUrl } from '../App'; 
const Header = () => {

    const { t } = useTranslation();
    const location = useLocation()
    
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        setPath(window.location.pathname)
    }, [location]);
    
    return (
        <>
            <BurgerMenu />
            <header>
                {
                    path !== '/roadmap' ? <img className="bg-header" src="static/images/bg-header.png" alt="" /> : null
                    
                }
                <div className="container">
                    <div className="logo-wrap">
                        <ul className="menu-top">
                            <li><Logo /></li>
                            <li><Link to={`${gitUrl}about`}>{t('menuTop')}</Link></li>
                            <li><Link to={`${gitUrl}roadmap`}>{t('menuTop1')}</Link></li>
                            <li><a href={'static/White Paper NFT SENSAY.pdf'} target="_blank" rel="noreferrer">{t('menuTop4')}</a></li>
                            <li><Link to={`${gitUrl}how-to-buy`}>{t('menuTop2')}</Link></li>
                            <li><Link to={`${gitUrl}faq`}>{t('menuTop3')}</Link></li>
                        </ul>
                        <div className="lang-mb-wrap">
                            <Lang />
                            <BurgerIcon />  
                        </div>
                    </div>
                    {path === `${gitUrl}` ? <BuddaSlider /> : null}
                </div>
                <Socials />
            </header>
        </>
    );
};

export default Header;