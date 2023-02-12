// CSS
import './App.css';

// Components
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Downloader from './components/Downloader';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <CallToAction />
        <Downloader />
      </div>

      <Footer />
    </div>
  );
}

export default App;
