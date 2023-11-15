import { Link } from "react-router-dom";

import { LitIcon } from "$/components/icons/LitIcon";

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        className="flex items-center justify-center p-6 lg:px-8"
        aria-label="navigation"
      >
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5" aria-label="homepage">
            <span className="sr-only">Lit Playground</span>
            <LitIcon className="h-8 w-auto text-[#324FFF]" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
