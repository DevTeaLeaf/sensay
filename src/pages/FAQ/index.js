import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import faq from '../../locales/en/translation.json';
import '../../styles/faq.css'


const FAQ = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState([]);
    const accordionHandler = (id) => {
        const sectionIndex = selected.findIndex(item => item === id);
        let newSelected = [];

        if(sectionIndex !== -1) {
            selected.splice(sectionIndex, 1);
            newSelected = [...selected];
        } else {
            newSelected = [
                ...selected,
                id,
            ];
        }
        setSelected(newSelected);
    };

    const TextTitle = ({ translation, children}) => {
        const text = translation && t(translation);
      
        const extraProps = (text)
          ? { dangerouslySetInnerHTML: { __html: text } }
          : { children };
      
        return (
          <p
            {...extraProps}
          />
        );
      };

      const TextBody = ({ translation, children, id}) => {
        const { t } = useTranslation();
        const text = translation && t(translation);
      
        const extraProps = (text)
          ? { dangerouslySetInnerHTML: { __html: text } }
          : { children };
      
        return (
          <div className={`answer ${selected.includes(id) ? 'active' : ''}`}
            {...extraProps}
          />
        );
      };

    const RenderAccordion = ({title, body, id}) => {
        return (
            <div key={id} className="que-ans">
                <div className="question" onClick={() => accordionHandler(id)}>
                    <TextTitle translation={title} />
                    <div className="circle">
                        <svg className="menu-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
                        </svg>
                    </div>
                </div>
                <TextBody id={id} translation={body} />
            </div>
        )
    };

    return (
        <div>
            <main >
                <h1 className='faq-title'>{t('faqTitle')}</h1>
                <section className='faq-section'>
                    <div className='left-column'>
                        {faq.leftColumn.map((item, index) => {
                            return (
                                <RenderAccordion 
                                id={item.id}
                                key={item.id}
                                index={index}
                                title={`leftColumn.${index}.title`}
                                body={`leftColumn.${index}.body`}
                                />
                            )
                        } )
                        }

                    </div>
                    <div className='right-column'>
                    {faq.rightColumn.map((item, index) => {
                            return (
                                <RenderAccordion 
                                id={item.id}
                                key={item.id}
                                index={index}
                                title={`rightColumn.${index}.title`}
                                body={`rightColumn.${index}.body`}
                                />
                            )
                        } )
                        }

                    </div> 
                </section>
            </main>
        </div>
    );
};

export default FAQ; 