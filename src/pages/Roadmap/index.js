import React from 'react';
import { useTranslation } from 'react-i18next';
import BallImages from './components/BallImages';
import Images from './components/Images';

const Roadmap = () => {
  
  const { t } = useTranslation();

    return (
        <>
            <Images />
            <BallImages />
            <main>
            <img className="how_budda" src="./static/images/budda-mb-hight.png" alt="" />
            <div className="roadmap-title">
              <h1>{t('roadTitle')}</h1>
            </div>
            <section className="path">
            <img src="./static/images/Vector 4.png" alt="" className="vector_mobile"/>
      <div className="crowdfinding step">
        <img src="./static/images/Balls/Ball0.png" alt="" className="ball-mb ball-mb-0"/>
        <h4>{t('planetTitle')}</h4>
        <p>{t('planetDescr')}</p>
      </div>
      <div className="foundation step">
        <img src="./static/images/Balls/Ball1.png" alt="" className="ball-mb ball-mb-1"/>

        <h4>{t('planetTitle1')}</h4>
        <p>{t('planetDescr1')}</p>
      </div>

      <div className="gpt step">
        <img src="./static/images/Balls/Ball2.png" alt="" className="ball-mb ball-mb-2"/>
        <div className="give-away">
          <h4>{t('planetTitle2')}</h4>
          <p dangerouslySetInnerHTML={{__html: t('planetDescr2')}} />
        </div>
        <div className="partners">
          <h5>{t('planetTitle3')}</h5>
          <p>{t('planetDescr3')}</p>
        </div>
        <div className="team">
          <h5>{t('planetTitle4')}</h5>
          <p>{t('planetDescr4')}</p>
        </div>
      </div>

      <div className="pre-sale step">
        <img src="./static/images/Balls/Ball3.png" alt="" className="ball-mb ball-mb-3"/>
        <h4 dangerouslySetInnerHTML={{__html: t('planetTitle5')}} />
        <p dangerouslySetInnerHTML={{__html: t('planetDescr5')}} />
      </div>

      <div className="post-pre-sale step">
        <img src="./static/images/Balls/Ball4.png" alt="" className="ball-mb ball-mb-4"/>
        <h4 dangerouslySetInnerHTML={{__html: t('planetTitle6')}} />
        <p dangerouslySetInnerHTML={{__html: t('planetDescr6')}} />
      </div>

      <div className="public-sale step">
        <img src="./static/images/Balls/Ball5.png" alt="" className="ball-mb ball-mb-5"/>
        <h4>{t('planetTitle7')}</h4>
        <p>{t('planetDescr7')}</p>
      </div>

      <div className="post-public-sale step">
        <img src="./static/images/Balls/Ball6.png" alt="" className="ball-mb ball-mb-6"/>
        <h4>{t('planetTitle8')}</h4>
        <p>{t('planetDescr8')}</p>
      </div>

      <div className="post-sale2 step">
        <img src="./static/images/Balls/Ball7.png" alt="" className="ball-mb ball-mb-7"/>
        <h4>{t('planetTitle9')}</h4>
        <p>{t('planetDescr9')}</p>
      </div>

      <div className="post-sale3 step">
        <img src="./static/images/Balls/Ball8.png" alt="" className="ball-mb ball-mb-8"/>
        <h4>{t('planetTitle10')}</h4>
        <p>{t('planetDescr10')}</p>
      </div>

      <div className="post-sale4 step">
        <img src="./static/images/Balls/Ball9.png" alt="" className="ball-mb ball-mb-9"/>
        <h4>{t('planetTitle11')}</h4>
        <p>{t('planetDescr11')}</p>
      </div>

      <div className="post-sale5 step">
        <img src="./static/images/Balls/Ball10.png" alt="" className="ball-mb ball-mb-10"/>
        <h4>{t('planetTitle12')}</h4>
        <p>{t('planetDescr12')}</p>
      </div>

      <div className="secret-sale step">
        <img src="./static/images/Balls/Ball11.png" alt="" className="ball-mb ball-mb-11"/>
        <h4>{t('planetTitle13')}</h4>
        <p>{t('planetDescr13')}</p>
      </div>
    </section>
            </main>

        </> 
    );
};

export default Roadmap;