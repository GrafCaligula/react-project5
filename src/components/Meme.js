import React from "react";
import memesData from "./memesData";

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = React.useState(
    memesData.data.memes
  );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);

    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemeImages[randomIndex].url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input 
          type="text" 
          className="form-input" 
          placeholder="Bottom text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        {meme.randomImage && (
          <img src={meme.randomImage} className="meme--image" alt="meme" />
        )}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
