import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [meme, getMeme] = useState();
  const [inputText, setInputText] = useState({
    top: "",
    bottom: ""
  })
  const [memeNum, setMemeNum] = useState(0)
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


  const randomNum = () => {
    setMemeNum(Math.floor(Math.random() * 100));
  }

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
      

      <div className='memePhoto card'>
        {meme ?
          <div className='memeFotoContainer'>
            <p id='top-p'>{inputText.top}</p>
            <img className='img-fluid' src={meme.data.memes[memeNum].url} alt='meme' />
            <p id='bottom-p'>{inputText.bottom}</p>
          </div>

          :
          <p>Error 404</p>

        }
        <div className='box-grande'>
          <div className="box-piccolo uno">
        <input id='top' onChange={handleChange} type="text" class="form-control" placeholder="write here the top text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <input id='bottom' onChange={handleChange} type="text" class="form-control" placeholder="write here the bottom text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        <button className='btn btn-info'>Save</button>
          </div>

          <div className='box-piccolo due'>
          <input class="form-control" type="file" id="inputFile" multiple />
          <button class="btn btn-info" type="button" id="inputFileUpload ">Upload</button>
          </div>
          </div>
          <button onClick={randomNum} className='btn btn-info random-btn-container'>Random Meme</button>
      </div>
    </div>
  )
}

export default App;
