import "./Navbar.css";

type NavbarProps = {
  onNavigate: (page: string) => void;
};

function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Courier Discounts
      </div>

      <div className="navbar-links">
        <button onClick={() => onNavigate("home")}>
          Home
        </button>

        <button onClick={() => onNavigate("discounts")}>
          Discounts
        </button>

        <button onClick={() => onNavigate("about")}>
          About Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;