import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';


function App() {
  const [meme, getMeme]= useState();
  const url = 'https://api.imgflip.com/get_memes';
  


useEffect(()=>{
getMemes();
},[])

  const getMemes = () => {
    axios.get(url)
    .then((response)=>{
      const allMemes= response.data;
      getMeme(allMemes)
    })
    .catch(error =>console.error (`Error: ${error}`));
  }
  //   let mappingMeme = 
  // console.log(meme.data.memes)
  return (
  <div>
    <h1>Hello World!</h1>
    <div className='memePhoto'>

    </div>
  </div>
  )
}

export default App;
