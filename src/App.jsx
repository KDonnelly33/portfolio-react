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
    <div className='lightgrey-background flex flex-col min-h-screen'>
      <Header />
      <main >
        <Outlet />
          </main>
          <Footer />
          </div>
    </>
  )
}

export default App
