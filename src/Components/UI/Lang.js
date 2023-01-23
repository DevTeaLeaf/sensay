import React, { useState, useEffect, useCallback, useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import i18next from 'i18next';
import { langs, SET_LANG } from '../../store/reducer/LangReducer';


const langsArr = [
    {
        code: 'en',
        lang: langs.USA,
        icon: './static/images/lang-icon.svg'
    },
    {
        code: 'ru',
        lang: langs.RUS,
        icon: './static/images/russia.svg'
    },
    {
        code: 'ar',
        lang: langs.UAE,
        icon: './static/images/sudan.svg'
    },
    {
        code: 'inc',
        lang: langs.IND,
        icon: './static/images/india.svg'
    },
        {
        code: 'zh',
        lang: langs.CHN,
        icon: './static/images/china.svg'
    },

]

const Lang = () => {

    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);
    
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const changeLangHandler = (newLang) => {
        dispatch({
            type: SET_LANG,
            payload: newLang.lang
        })
        setOpen(false);
        i18next.changeLanguage(newLang.code);
    };

    const LangClose = () => {
        setOpen(false);
    };

    const HandleClose = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', HandleClose, true)
        return () => {
            document.removeEventListener('click', HandleClose, true)
        }
    })

    const [scroll, setScroll] = useState(window.pageYOffset);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visibles = scroll > currentScrollPos;
    
    setScroll({scroll: currentScrollPos, visibles})
  }, [scroll]);
  
  useEffect(() => {
    window.addEventListener("scroll", LangClose)
    return () => {
      window.removeEventListener("scroll", LangClose)
    }
  }, [handleScroll]);

    return (
        <div ref={ref} className="search-select">
            <span 
                onClick={() => setOpen(!open)} 
                className="field"
            >
                <i className="icon">
                    <img src={langsArr.find(item => item.lang === lang).icon} alt="" />
                </i>
                <label className="seltext" htmlFor="opened">{langsArr.find(item => item.lang === lang).lang}</label>
            </span>
            <ul className={`select ${open ? 'open' : 'close'}`}>
                <li className="icon arrow"></li>
                {
                    langsArr.map(lang => (
                        <li 
                            key={lang.lang} 
                            className="sel" 
                            onClick={() => {
                                changeLangHandler(lang)
                            }}
                        >
                            <i className="icon list">
                                <img src={lang.icon} alt="" />
                            </i>
                            <span>{lang.lang}</span> 
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Lang;