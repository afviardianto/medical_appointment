import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // const navigate = useNavigate();
  const [token, setToken] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) setToken(true);
  }, []);

  return (
    <div>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 lg:text-3xl sm:text-2xl font font-medium mr-5" to="/admin">
                ALODOC
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <Link to="/admin/doctors" className="text-gray-500 transition hover:text-gray-500/75">
                      Doctors
                    </Link>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/admin/users">
                      Users
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Services
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Projects
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {token ? (
                ''
              ) : (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/admin/login"
                  >
                    Login
                  </a>
                </div>
              )}

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
