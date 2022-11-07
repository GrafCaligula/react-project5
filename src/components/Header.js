
export default function Header() {
  return (
    <div className="header flex">
      <div className="header-logo flex">
        <img 
          src={require("./images/trollFace.png")}
          alt="logo"
          className="logo"
        />
        <h1>Meme Generator</h1>
      </div>
      <div className="header-title">React Course - Project 3</div>
    </div>
  )
}