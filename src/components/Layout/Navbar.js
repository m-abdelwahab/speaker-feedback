import { Link } from "react-router-dom";
import React from "react";
import { Auth } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const history = useHistory();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  const logout = () =>
    Auth.signOut().then((data) => {
      setUser(null);
      history.push("/");
      return data;
    });

  return (
    <header className="flex-shrink-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center mb-4 md:mb-0"
          to="/"
        >
          <svg
            className="w-6 h-6 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-3 text-xl">SPEAKER FEEDBACK</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/events">
            Events
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>
        </nav>

        {authState === AuthState.SignedIn && user ? (
          <button
            onClick={() => logout()}
            className="inline-flex items-center px-5 py-2 border-0 bg-red-600 text-white focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0"
          >
            Logout
          </button>
        ) : (
          <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 text-white focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
            <Link to="/events">Sign Up</Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
