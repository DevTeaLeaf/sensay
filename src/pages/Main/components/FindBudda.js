import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import ReactPlayer from 'react-player';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';


const FindBudda = () => {
const [start, setStart] = useState(false);
    const { t } = useTranslation();

    const currentLanguageCode = cookies.get('i18next') || 'en';

    const VideoSrc = () => {
        switch (currentLanguageCode) {
            case 'ru': 
                return "static/video/rus.webm";
            case 'zh': 
                return "static/video/chines.webm";
            case 'ar': 
                return "static/video/arab.webm";
            case 'inc': 
                return "static/video/hindi.webm";
            default:
                return "static/video/eng.webm";
        }
    }

    return (
        <section className='find-budda'>
           <img className="bg-find-budd" src="static/images/Ellipse9.svg" alt="" />

            <div className='container' >
                <h2 className="find-budda-title">{t('findBuddaTitle')}</h2>

                <div className="find-budda-body"
                dangerouslySetInnerHTML={{__html: t('findBuddaBody')}}
                />
                
                <div className='find-budda-video-section'>
                    <div className="video-block-wrap">
                        <img className="yin-yang-left" src="static/images/inyan.png" alt=""/>
                        <img className="yin-yang-right" src="static/images/inyan.png" alt=""/>
                            <div className="wrapp_new-player">
                                <Video
                                    poster="static/images/video_banner.jpg"
                                    src={VideoSrc()}
                                >
                                    <source src={VideoSrc()}/>
                                </Video>
                            </div>
                    </div>
                </div>

                <div className="company-wrap">
                    <div className="company-block">
                        <img className='star' src="static/images/star.svg" alt="" />
                        <span>

                        {t('companyBlock')}
                        </span>
                    </div>

                    <div className="company-block2">
                        <img className='star' src="static/images/star.svg" alt="" />
                        <span>

                        {t('companyBlock2')}
                        </span>
                    </div>
                    <div className="clear"></div>
                </div>
            </div> 

            <div className="comapny-budda">
                <img className="bg-company-budda" src="static/images/company-budda-bg.png" alt="" />
                <div className="d-flex">
                    <div className="company-img"><img src="static/images/company-img.png" alt="" /></div>
                    <div className="company-img2"><img src="static/images/company-img2.png" alt="" /></div>
                    <div className="company-img3"><img src="static/images/company-img3.png" alt="" /></div>
                    <div className="company-img4"><img src="static/images/company-img4.png" alt="" /></div>
                </div>
            
            </div>
        </section>
    );
};

export default FindBudda;