export default function NavTabs({links}) {
    return (
      <nav>
        <div >
            <ul className="flex flex-row "> 
            {links.map((link) => (
            <li className="lightgrey-background mx-3 px-3 round-top-corners link text-color" key={link.key}>{link}</li>
            ))}
            </ul>
        </div>
        </nav>
    );
    }