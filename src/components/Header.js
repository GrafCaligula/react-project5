
export default function Header() {
  return (
    <header className="header flex">
      <div className="header-logo flex">
        <img 
          src={require("./images/trollFace.png")}
          alt="logo"
          className="logo"
        />
        <h2>Meme Generator</h2>
      </div>
      <div className="header-title">React Course - Project 3</div>
    </header>
  )
}