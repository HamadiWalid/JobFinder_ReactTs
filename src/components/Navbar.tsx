import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-[#00ae78] text-black hover:bg-[#00ae78] hover:text-black rounded-md px-3 py-2 font-medium"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-medium";

  return (
    <nav className="bg-black border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Jobs Finder" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                JobFinder
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
