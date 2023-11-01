import {Outlet} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import ConctactForm from './pages/ContactForm'
// import AboutMe from './pages/AboutMe'


// import Portfolios from './pages/Portfolios'

function App() {


  return (
    <>
      <Header />
      <main className='lightgrey-background'>
        <Outlet />
          </main>
          <Footer />
          
    </>
  )
}

export default App
