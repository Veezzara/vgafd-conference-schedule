import "./content-block.css";

type Props = {
  header?: React.ReactNode;
  children?: React.ReactNode;
};

export default function ContentBlock(props: Props) {
  return (
    <div className="content-block">
      <div className="content-block-header">{props.header}</div>
      <div className="content-block-content">{props.children}</div>
    </div>
  );
}
