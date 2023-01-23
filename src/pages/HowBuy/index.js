import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/howtobuy.css';


const HowBuy = () => {

    const { t } = useTranslation();

    return (
        <main className='how-buy-page'> 
        <img className="how_light" src="./static/images/bg-header.png" alt="" />
        <img className="how_budda" src="./static/images/budda-mb-hight.png" alt="" />
        <img className="how_light-two" src="./static/images/Ellipse 77.png" alt="" />
        <img className="how_light-three" src="./static/images/Ellipse 77.png" alt="" />
        <img className="how_light-four" src="./static/images/Ellipse 77.png" alt="" />
            <h1 className="how-to-buy-title">{t('HowTitle')}</h1>
            <div className="videoblock">
                <img src="./static/images/Stars15.png" alt=""/>
                <p>{t('videoBlock')}</p>
                <div className="videoblock_someinfo">{t('videoInfo')}</div>
            </div>
            <section className='steps' >
                
                        <div className="numerous">
                            <div className="hollow"><h2>1</h2></div>
                            <p>
                                {t('steps')} <a target='_blank' href="https://metamask.io/">MetaMask.</a>
                            </p>
                        </div>

                        <div className="numerous">
                            <div className="hollow"><h2>2</h2></div>
                            <p>
                                {t('steps2')}
                            </p>
                        </div>

                        <div className="numerous">
                            <div className="hollow"><h2>3</h2></div>
                            <p>
                                {t('steps3')}
                            </p>
                        </div>

                        <div className="numerous">
                            <div className="hollow"><h2>4</h2></div>
                            <p>
                                {t('steps4')}
                            </p>
                        </div>

                        <div className="numerous">
                            <div className="hollow"><h2>5</h2></div>
                            <p>
                                {t('steps5')}
                            </p>
                        </div>
            </section>
        </main>
    );
};

export default HowBuy;