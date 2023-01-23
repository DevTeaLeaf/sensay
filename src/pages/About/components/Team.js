import React from 'react';
import { useTranslation } from 'react-i18next';

const Team = () => {

    const { t } = useTranslation();

    return (
        <section className="mt-100">
            <h1 className="team">{t('team')}</h1>

            <div className="articules">
            
                    <div className="articule">
                        <div className="budda-image">
                            <img src="./static/images/Riaz Zagi.png" alt="Riaz Zagi" />
                        </div>
                        <h4>Riazzagi</h4>
                        <h5>{t('articulesTitle')}</h5>
                        <p dangerouslySetInnerHTML={{__html: t('articulesDescr')}} />
                    </div>

                    <div className="articule">
                        <div className="budda-image">
                            <img src="./static/images/Stelum.png" alt="Stelum" />
                        </div>
                        <h4>Stelum</h4>
                        <h5>{t('articulesTitle1')}</h5>
                        <p dangerouslySetInnerHTML={{__html: t('articulesDescr2')}} />
                    </div>

                    <div className="articule">
                        <div className="budda-image">
                            <img src="./static/images/Boba.png" alt="Boba" />
                        </div>
                        <h4>Boba</h4>
                        <h5>{t('articulesTitle2')}</h5>
                        <p dangerouslySetInnerHTML={{__html: t('articulesDescr3')}} />
                    </div>

                    <div className="articule">
                        <div className="budda-image">
                            <img src="./static/images/Solarty.png" alt="Solarty" />
                        </div>
                        <h4>Solarty</h4>
                        <h5>{t('articulesTitle3')}</h5>
                        <p dangerouslySetInnerHTML={{__html: t('articulesDescr4')}} />
                    </div>
            </div>
        </section>
    );
};

export default Team;