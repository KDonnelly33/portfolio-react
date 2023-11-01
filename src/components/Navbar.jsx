import NavTabs from "./NavTabs";
import { Link } from "react-router-dom";
// export default function Navbar() {
//     return (
//         <NavTabs
//         Links={[
//           <Link key={1} to="/">
//           About Me
//         </Link>,
//            <Link key={2} to="/contact">
//           Contact Me
//          </Link>,
//           <Link key={3} to="/portfolios">
//             Projects</Link>,
//         ]}
//       />
//     );
//   }

export default function Navbar() {
  const links = [
    <Link key={1} to="/">About Me</Link>,
    <Link key={2} to="/contact">Contact Me</Link>,
    <Link key={3} to="/portfolios">Projects</Link>,
  ];

  return (
    <NavTabs links={links} />
  );
}

