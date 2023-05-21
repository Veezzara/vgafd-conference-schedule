import Clock from "../common/clock/clock";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-item">
        </div>
        <div className="header-item">
          <div className="header-text">{process.env.REACT_APP_NAME}</div>
        </div>
        <div className="header-item">
          <Clock />
        </div>
      </div>
    </header>
  );
}
