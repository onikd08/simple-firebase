import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Simple FireBase</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
