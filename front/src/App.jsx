import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import Music from './pages/Music'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
            <div className="align-wrap">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/playlist' element={<Playlist/>}/>
                <Route path='/music' element={<Music/>}/>
              </Routes>
            </div>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
