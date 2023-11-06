import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlink = <>
    <li>     <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                   HOME
                  </NavLink></li>
    <li>     <NavLink
                    to='/addblogs'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                   ADD BLOGS
                  </NavLink></li>
    <li>     <NavLink
                    to='/allblogs'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                   ALL BLOGS
                  </NavLink></li>
    <li>     <NavLink
                    to='/featuredblogs'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                  FEATURED BLOGS
                  </NavLink></li>
    <li>     <NavLink
                    to='/wishlist'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                  WISHLIST
                  </NavLink></li>
    <li>     <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive && 'bg-black underline'
                       
                    }
                  >
                  LOGIN
                  </NavLink></li>
              
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlink}
            </ul>
          </div>
          <img className="h-[150px]" src="https://i.ibb.co/wCRGJWH/attachment-70763960.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
           {navlink}
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;