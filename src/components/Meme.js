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

  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" placeholder="Top text" />
        <input type="text" className="form-input" placeholder="Bottom text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      {meme.randomImage && (<img src={meme.randomImage} alt="meme" className="meme" />)}
    </main>
  );
}
