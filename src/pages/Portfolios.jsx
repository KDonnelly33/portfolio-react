import {PROJECTS} from '../data.js'
import Portfolio from '../components/Portfolio.jsx'
export default function Portfolios() {
  return (
    <div className='mb-40 '>
      <h1 className="text-3xl header-text underline text-center my-4">My Portfolio</h1>
    <ul className=''>
        {PROJECTS.map((project) => <Portfolio key = {project.title} {...project}/>)}
        
    </ul>
    </div>
  )
}