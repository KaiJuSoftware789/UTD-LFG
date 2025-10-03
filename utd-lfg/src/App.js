import Navbar from './Navbar';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Help from './pages/Help';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import {Route, Routes} from "react-router-dom";

function App() {
  //let component = <Home />;

    // switch (window.location.pathname) {
    //   case '/':
    //     component = <Home />;
    //     break;
    //   case '/about':
    //     component = <About />;
    //     break;
    //   case '/faq':
    //     component = <FAQ />;
    //     break;
    //   case '/help':
    //     component = <Help />;
    //     break;

    //   case '/tutorial':
    //     component = <Tutorial />;
    //     break;
    //   default:
    //     component = <Home />;
    //     break;
    // }

  return (
    <>
      <Navbar/>
      <div className = "container">
        <Routes>
          <Route path="/LFG" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
