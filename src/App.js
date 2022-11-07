import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [meme, getMeme] = useState();
  const [inputText, setInputText] = useState({
    top: "",
    bottom: ""
  }

  )
  const url = 'https://api.imgflip.com/get_memes';

  useEffect(() => {
    const getMemes = () => {
      axios.get(url)
        .then((response) => {
          const allMemes = response.data;
          getMeme(allMemes)
        })
        .catch(error => console.error(`Error: ${error}`));
    }


    getMemes();
  }, [])


  let randomNum = Math.floor(Math.random() * 100);

  const handleChange = (e) => {
    const keyName = e.target.id;
    const newValue = e.target.value.toUpperCase();

    setInputText((prevState) => ({ ...prevState, [keyName]: newValue }));
  };

  //  let mappingMeme = meme.data.memes.map((meme)=>
  //   <img src={meme.url} alt='meme'/> )

  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Meme generator!</h1>
      <h5 className="card-title text-center">Create your Meme</h5>
      <p className="card-text text-center">Create your customized meme with the best image around internet</p>
      <button className='btn btn-info text-center'>Random Meme</button>

      <div className='memePhoto card'>
        {meme ?
          <div className='memeFotoContainer'>
            <p id='top-p'>{inputText.top}</p>
            <img className='img-fluid' src={meme.data.memes[0].url} alt='meme' />
            <p id='bottom-p'>{inputText.bottom}</p>
          </div>

          :
          <p>Error 404</p>

        }

        <input id='top' onChange={handleChange} type="text" class="form-control" placeholder="write here the top text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <input id='bottom' onChange={handleChange} type="text" class="form-control" placeholder="write here the bottom text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <button className='btn btn-info'>Save</button>

      </div>
    </div>
  )
}

export default App;
