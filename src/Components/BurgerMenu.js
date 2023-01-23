import React, {useState, useEffect, useCallback, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ACTION_BURGER_TYPES } from '../store/reducer/BurgerReducer';
import { gitUrl } from '../App';

const BurgerMenu = () => {

  const { t } = useTranslation();
  
  const dispatch = useDispatch();
  const burgerState = useSelector(state => state.burger);

    const burgerClose = () => {
    dispatch({
        type: ACTION_BURGER_TYPES.close,
    });
  };
  
  const [scroll, setScroll] = useState(window.pageYOffset);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visibles = scroll > currentScrollPos;
    
    setScroll({scroll: currentScrollPos, visibles})
  }, [scroll]);
  
  useEffect(() => {
    window.addEventListener("scroll", burgerClose)
    return () => {
      window.removeEventListener("scroll", burgerClose)
    }
  }, [handleScroll]);


  const refMenu = useRef(false)

  const closeOpenMenus = (e)=>{
    let burg = document.querySelector('burger')
     if(refMenu.current && !burgerState && !refMenu.current.contains(e.target)){
       burgerClose()
     }
   }
   document.addEventListener('mousedown',closeOpenMenus)
  return (
        <nav ref={refMenu} className={`mt-mobile ${!burgerState ? 'nav-open' : ''}`}>
              <div className="mt-munu-mb">
                <div className="header-navigation-wr">
                    <ul className="menu-mobile">
                      <li><Link onClick={burgerClose} to={`${gitUrl}`}>{t('menuMobile')}</Link></li>
                      <li><Link onClick={burgerClose} to={`${gitUrl}about`}>{t('menuMobile1')}</Link></li>
                      <li><Link onClick={burgerClose} to={`${gitUrl}roadmap`}>{t('menuMobile2')}</Link></li>
                      <li><a onClick={burgerClose} href={'static/White Paper NFT SENSAY.pdf'} target="_blank" rel="noreferrer">{t('menuMobile5')}</a></li>
                      <li><Link onClick={burgerClose} to={`${gitUrl}how-to-buy`}>{t('menuMobile3')}</Link></li>
                      <li><Link onClick={burgerClose} to={`${gitUrl}faq`}>{t('menuMobile4')}</Link></li>
                    </ul>
                </div>  
              </div>  
          </nav>
    );
};

export default BurgerMenu;