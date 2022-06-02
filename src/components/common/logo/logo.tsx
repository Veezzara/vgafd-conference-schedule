import "./logo.css";
import logoPath from "../../../assets/VK_Monochrome_Compact_Logo.svg"

export default function Logo() {
  return <div className="app-logo">
    <img src={logoPath} draggable="false" alt="VK"></img>
  </div>;
}
