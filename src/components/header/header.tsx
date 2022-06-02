import Clock from "../common/clock/clock";
import Logo from "../common/logo/logo";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-item">
          <Logo />
        </div>
        <div className="header-item">
          <div className="header-text"></div>
        </div>
        <div className="header-item">
          <Clock />
        </div>
      </div>
    </header>
  );
}
