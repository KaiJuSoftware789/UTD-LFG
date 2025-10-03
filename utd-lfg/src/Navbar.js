import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const path = window.location.pathname;
  return (
  <nav className="nav">
    <Link to="/" className="site-title">
        UTD LFG
    </Link>
    <ul>
        <CustomLink to="/LFG">LFG</CustomLink>
        <CustomLink to="/tutorial">Tutorial</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/FAQ">FAQ</CustomLink>
        <CustomLink to="/help">Help</CustomLink>
    </ul>
</nav>
)
}

function CustomLink ({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
    <li className={isActive === to ? "active" : ""}>
          <Link to={to}{...props}>{children}</Link>
    </li>
   )
}
