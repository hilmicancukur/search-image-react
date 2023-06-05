import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchArea from './components/SearchArea/SearchArea'
import Axios from 'axios'

function App() {
  const getResponse = async (data)=>{
    const response = await Axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      },
      params:{
        query: data
      }
    })
    return response;
  }
  const searchFunc = (data)=>{
    console.log(getResponse(data));
  }
  return (
    <>
      <Header/>
        <div className='container'>
          <div className="App">
            <SearchArea search={searchFunc} />
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
