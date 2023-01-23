import React from 'react';
import { useTranslation } from 'react-i18next';
import Philosophy from './components/Philosophy';
import Team from './components/Team';

const About = () => {

    const { t } = useTranslation();

    return (
        <main className='about-page'>
            <img className="how_budda" src="./static/images/budda-mb-hight.png" alt="" />
            <img className="bg-light budda-right" src="./static/images/Group 172.png" alt="" />
            <img className="bg-light about_second-light" src="./static/images/Ellipse 77.png" alt="" />
            <img className="bg-light about_three-light" src="./static/images/Ellipse 77.png" alt="" />
            <img className="bg-light about_four-light" src="./static/images/Ellipse 77.png" alt="" />
            <img className="bg-light about_ellipse-bottom" src="./static/images/Ellipse 3.png" alt="" />
            <div className="about-title">
                <h1>{t('aboutTitle')}</h1>
            </div>
            <Philosophy />
            <Team />
        </main>
    );
};

export default About;