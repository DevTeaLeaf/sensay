import React from 'react';
import { useTranslation } from 'react-i18next';


const Benefit = () => {

    const { t } = useTranslation();

    return (
        <section className="benefit">
            <div className="container">
                <div className="benefit-title">{t('benefitTitle')}</div>
                <div className="benefit-block">
                    <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                    <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                   {/* <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                    <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />*/}
                    <div className="benefit-icon">
                        <img src="./static/images/dashicons.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit1')}}
                    />
                </div>
                <div className="benefit-block2">
                    {/*<img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                    <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                    <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                    <img className='star-benefit' src="static/images/star-benefit-blue.svg" />*/}

                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon4.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit2')}}
                    />
                </div>

                <div className="benefit-block">
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                {/*<img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />*/}

                    <div className="benefit-icon icon5">
                        <img src="./static/images/benefit-icon5.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit3')}}
                    />
                </div>

                <div className="benefit-block3">
                {/*<img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />*/}

                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon3.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit4')}}
                    />
                </div>

                <div className="benefit-block">
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
             {/*   <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />
                <img className='star-benefit' src="static/images/star-benefit.svg" alt="" />*/}

                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon2.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit5')}}
                    />
                </div>

                <div className="benefit-block3">
                {/*<img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />
                <img className='star-benefit' src="static/images/star-benefit-blue.svg" />*/}

                    <div className="benefit-icon">
                        <img src="./static/images/benefit-icon.svg" alt="" />
                    </div>
                    <p 
                    dangerouslySetInnerHTML={{__html: t('benefit6')}}
                    />
                </div>

            </div>
        </section>
    );
};

export default Benefit;