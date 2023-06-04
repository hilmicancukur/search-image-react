import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchArea from './components/SearchArea/SearchArea'

function App() {
  return (
    <>
      <Header/>
        <div className='container'>
          <div className="App">
            <SearchArea/>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
