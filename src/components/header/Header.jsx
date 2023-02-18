import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const state = useSelector((state) => state.carts);

  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // show fixed header nav

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    });

    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <nav
          className="navbar navbar-expand-lg  bg-warning shadow "
          ref={menuRef}
        >
          <div className="container-fluid">
            <Link className="navbar-brand uppercase fw-bold fs-4" to="/">
              Store API
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link className="nav-link fs-5 text-dark " to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item cart__icon">
                  <Link className="nav-link fs-5 text-dark" to="/cart">
                    Cart
                    <span className="cart__badge">{state.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
