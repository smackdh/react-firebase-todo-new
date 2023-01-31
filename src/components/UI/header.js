import logo from "../resources/scroll.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <h1 className="title">Todo List</h1>
    </header>
  );
};

export default Header;
