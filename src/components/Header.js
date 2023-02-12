// CSS
import "./Header.css";

const Header = () => {
  const handleReaload = () => {
    window.location.reload(false);
  }

  return (
    <header>
        <div className="brand">
            <h1 onClick={handleReaload}>YAD</h1>
        </div>
    </header>
  )
}

export default Header