import "./logo.css";
import logoPath from "../../../assets/VK_Monochrome_Compact_Logo.svg";

export default function Logo() {
  return (
    <div className="app-logo">
      <a href={process.env.REACT_APP_VK_LINK} target="_blank" rel="noreferrer">
        <img src={logoPath} draggable="false" alt="VK"></img>
      </a>
    </div>
  );
}
