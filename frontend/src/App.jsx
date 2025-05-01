import bogradarIcon from './assets/BogradarenIkon.png'
import './App.css'
import Searchbar from './components/Searchbar'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <Layout>
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
      </Layout>
    </>
  );
}

export default App
