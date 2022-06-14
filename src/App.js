import './styles/App.css';
import Header from './components/1_Header/Header';
import Pages from './components/2_Pages/Pages';
import Footer from './components/3_Footer/Footer';

function App() {

  return (
    <div className='app-wrapper'>
      < Header />
      < Pages />
      < Footer />
    </div>
  );
}

export default App;
