import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ImageList from './components/Image/ImageList'
import SearchArea from './components/SearchArea/SearchArea'
import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
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
  const searchFunc = async (data)=>{
    const response = await getResponse(data);
    setItems(response.data.results);
  }
  return (
    <>
      <Header/>
        <div className='container'>
          <div className="App">
            <SearchArea search={searchFunc} />
            <ImageList datas={items}/>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
