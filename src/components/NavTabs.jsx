export default function NavTabs({ links }) {
    return (
      <nav>
        <div>
            <ul> 
            {links.map((link) => (
            <li key={link.key}>{link}</li>
            ))}
            </ul>
        </div>
        </nav>
    );
    }