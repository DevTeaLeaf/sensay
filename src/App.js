import {
  Routes,
  Route,
} from "react-router-dom";

import Footer from './Components/Footer';
import Header from './Components/Header';
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Main from './pages/Main';

import './styles/App.css';
import './styles/fonts.css';
import './styles/main.css';
import './styles/about.css';
import './styles/roadmap.css';
import './styles/media.css';
import HowBuy from "./pages/HowBuy";
import FAQ from "./pages/FAQ";



export const gitUrl = '/';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={"/"} element={<Main />}  />
            <Route path={"/about"} element={<About />}  />
            <Route path={"/roadmap"} element={<Roadmap />}  />
            <Route path={"/how-to-buy"} element={<HowBuy />}  />
            <Route path={"/faq"} element={<FAQ />}  />
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
