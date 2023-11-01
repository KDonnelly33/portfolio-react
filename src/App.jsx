import {Outlet} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// import ConctactForm from './pages/ContactForm'
// import AboutMe from './pages/AboutMe'


// import Portfolios from './pages/Portfolios'

function App() {


  return (
    <>
      <Header />
      <main>
        <Outlet />
          </main>
    </>
  )
}

export default App
