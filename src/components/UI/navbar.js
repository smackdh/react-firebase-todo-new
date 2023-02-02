import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  console.log(location);
  const navStyle = {
    height: "50px",
    padding: "16px",
    borderBottom: "2px solid black",
  };

  return (
    <div style={navStyle}>
      {location === "/account" ? (
        "Bruh"
      ) : (
        <Link to="/account">Account Page</Link>
      )}
    </div>
  );
};

export default Navbar;
