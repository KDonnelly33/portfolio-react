
import Navbar from "./Navbar";

export default function Header() {
    return (
       <header className="darkgrey-background flex flex-col justify-center items-center">
    <h1 className="text-white text-3xl underline p-3 mb-2">Kevin Donnelly's Portfolio</h1>
    <Navbar/>
  </header>
    )
}