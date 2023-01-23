import React from 'react';
import Home from '../../Components/Home';
import Benefit from './components/Benefit';
import Ecosystem from './components/Ecosystem';
import FindBudda from './components/FindBudda';


const Main = () => {

    return (
        <main>
            <Home />
            <FindBudda />
            <Benefit />
            <Ecosystem />
        </main>
    );
};

export default Main;