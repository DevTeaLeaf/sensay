import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_BURGER_TYPES } from '../../store/reducer/BurgerReducer';

const BurgerIcon = () => {

    const dispatch = useDispatch();
    const burgerState = useSelector(state => state.burger);

    const burgerHander = () => {
        dispatch({
            type: ACTION_BURGER_TYPES.toggle,
        });
    };
    const burgerClose = () => {
        dispatch({
            type: ACTION_BURGER_TYPES.close,
        });
    };
    return (
        <div  className={`burger ${burgerState ? 'burger-open' : ''}`}>
            <i onClick={burgerHander}><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9H23" stroke="#565656" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1 1H23" stroke="#565656" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1 17H23" stroke="#565656" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg></i>
            <i onClick={burgerClose}><svg width="24" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5562 1L0.999803 16.5563" stroke="#565656" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1 1L16.5563 16.5563" stroke="#565656" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            </i>
        </div>
    );
};

export default BurgerIcon;