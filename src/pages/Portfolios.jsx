import {PROJECTS} from '../data.js'
import Portfolio from '../components/Portfolio.jsx'
export default function Portfolios() {
  return (
    <div>
      <h1>my portfolio</h1>
    <ul>
        {PROJECTS.map((project) => <Portfolio key = {project.title} {...project}/>)}
        
    </ul>
    </div>
  )
}