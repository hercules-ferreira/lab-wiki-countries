import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div>
      <nav
        className="navbar-dark"
        style={{
          height: '110px',
          backgroundColor: '#5429CC',
          paddingLeft: '20px',
        }}
      >
        <Link className="navbar-brand" to="/">
          <h1>Wiki Countries</h1>
        </Link>
      </nav>
    </div>
  );
}
