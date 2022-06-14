import "./event-link.css";

type Props = {
  address: string;
  text: string;
  logo?: string;
};

export default function EventLink(props: Props) {
  return (
    <a href={props.address} className="event-link" target="_blank" rel="noreferrer">
      <img src={props.logo} alt=""></img>
      {props.text}
    </a>
  );
}
