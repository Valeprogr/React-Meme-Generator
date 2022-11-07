import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [meme, getMeme]= useState();
  const url = 'https://api.imgflip.com/get_memes';
  
useEffect(()=>{
  const getMemes = () => {
    axios.get(url)
    .then((response)=>{
      const allMemes= response.data;
      getMeme(allMemes)
    })
    .catch(error =>console.error (`Error: ${error}`));
  }


getMemes();
},[])

  
let randomNum = Math.floor(Math.random() * 100);

//  let mappingMeme = meme.data.memes.map((meme)=>
//   <img src={meme.url} alt='meme'/> )

  return (
  <div className='container-fluid'>
    <h1 className='text-center'>Meme generator!</h1>
    <div className='memePhoto card'>
    { meme ? <img className='img-fluid' src={meme.data.memes[0].url} alt='meme'/>
    
    :
    <p>Error 404</p>

    }
    <h5 class="card-title">Create your Meme</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button className='btn btn-info'>Edit</button>
   </div>
  </div>
  )
}

export default App;
