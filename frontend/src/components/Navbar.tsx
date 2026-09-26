import "./Navbar.css";

type NavbarProps = {
  onNavigate: (page: string) => void;
};

function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        הנחות לשליחי וולט
      </div>

      <div className="navbar-links">
        <button onClick={() => onNavigate("home")}>
          בית
        </button>

        <button onClick={() => onNavigate("discounts")}>
          ההנחות 
        </button>

        <button onClick={() => onNavigate("about")}>
          מי אני
        </button>
      </div>
    </nav>
  );
}

export default Navbar;