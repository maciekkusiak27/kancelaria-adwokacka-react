import '../styles/app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import Navigation from './Navigation';
import CookieConsent from "react-cookie-consent";


function App() {
  return (
    <Router basename={process.env.PUBLICnpm_URL}>
        <div className="app">
          <nav>
            {<Navigation />}
          </nav>
          <header>
            {<Header />}
          </header>
          <main>
            <section className="page">
              {<Page />}
            </section>
          <CookieConsent>Ta strona wykorzystuje pliki cookies</CookieConsent>
          </main>
          <footer>
            <i>Kancelaria Adwokacka Adwokat Małgorzata Kowalska</i>
          </footer>
        </div>
      </Router>
);
  }


export default App;
