import bogradarIcon from './assets/BogradarenIkon.png'
import './App.css'
import Searchbar from './components/Searchbar'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <>
        <div style={{
          position: 'absolute',
          top: '35px',
          display: 'flex',
          justifyContent: 'center',
          left: '35px'
        }}>
          <Searchbar />
        </div>
        <div>
          <img 
            src={bogradarIcon} 
            className="logo" 
            alt="Bogradaren ikon" 
            style={{ width: '350px', height: 'auto', alignItems: 'center' }}
          />
        </div>
      <MenuBar />
    </>
  );
}

export default App
