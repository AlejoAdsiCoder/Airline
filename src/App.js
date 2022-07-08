import logo from './logo.svg';
import './App.scss';
import { Header } from './components/Header';
import './styles/styles.scss';
import Offers from './components/Offers/index';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
