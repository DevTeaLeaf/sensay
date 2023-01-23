import React from 'react';
import { useTranslation } from 'react-i18next';

const Philosophy = () => {

    const { t } = useTranslation();

    return (
        <section className="philosophie_content">
            <h2 className="philosophie">{t('philosophie')}</h2>
            <div className="quote">
                <p>{t('quote')}</p>
            </div>
            <div className="continuation-of-the-quote"><p
            dangerouslySetInnerHTML={{__html: t('continuationQuote')}}
            />
            </div>
        </section>
    ); 
};

export default Philosophy;