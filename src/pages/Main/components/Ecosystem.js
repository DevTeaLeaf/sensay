import React from 'react';
import { useTranslation } from 'react-i18next';

const Ecosystem = () => {

    const { t } = useTranslation();

    return (
        <section>
            <div className="container">
                <div className="eco-title">{t('ecoTitle')}</div>
                <div className="clear"></div>
                <div className="eco-block">
                {t('ecoBlock')}
                </div>
            </div>
            <div className="planet-main">
                <img className="planet_desc" src="./static/images/planet.png" alt="" />
                <img className="planet_mob" src="./static/images/planet.png" alt="" />
            </div>
            <div className="container">
                <div className="eco-block2">
                {t('ecoBlock2')}
                </div>
                <div className="clear"></div>   
            </div>
        </section>
    );
};

export default Ecosystem;