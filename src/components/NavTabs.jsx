import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header>
    <h1>Felipe Sarmiento</h1>
    <nav>
    <ul>
      <li>
        <Link
          to="/"
          className={currentPage === '/' ? 'active' : ''}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'active' : ''}
        >
          Porfolio
        </Link>
      </li>
      <li>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'active' : ''}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'active' : ''}
        >
          Resume
        </Link>
      </li>
    </ul>
    </nav>
    </header>
  );
}

export default NavTabs;
