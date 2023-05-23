import { Component, createRef, RefObject } from "react";
import "./collapsible-block.css";

type Props = {
  header?: React.ReactNode;
  children?: React.ReactNode;
  parentCollapsible?: RefObject<CollapsibleBlock>;
};

export default class CollapsibleBlock extends Component<Props> {
  state = {
    isOpen: false,
    blockHeight: {
      headerHeight: 0,
      contentHeight: 0,
    },
  };

  headerRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.headerRef = createRef<HTMLDivElement>();
    this.contentRef = createRef<HTMLDivElement>();
  }

  getHeaderModifier = () => {
    return this.state.isOpen
      ? "collapsible-block-header-open"
      : "collapsible-block-header-collapsed";
  };

  updateHeight = (toggled: boolean) => {
    if (this.headerRef.current && this.contentRef.current) {
      const headerHeight = this.headerRef.current.clientHeight;
      const contentHeight = this.contentRef.current.clientHeight;
      const newOpen = toggled ? !this.state.isOpen : this.state.isOpen;

      const newState = {
        isOpen: newOpen,
        blockHeight: {
          headerHeight: headerHeight,
          contentHeight: contentHeight,
        },
      };
      this.setState(newState);
    }
  };

  toggleExpand = () => {
    this.updateHeight(true);
  };

  getHeight = () => {
    const height = this.state.isOpen
      ? this.state.blockHeight.headerHeight +
        this.state.blockHeight.contentHeight
      : this.state.blockHeight.headerHeight;
    return height;
  };

  getBlockStyle() {
    if (this.props.parentCollapsible) {
      return {
        height: `${this.getHeight()}px`,
      };
    } else {
      return {
        height: `${this.getHeight()}px`,
        transition: "0.2s",
        overflow: "hidden",
      };
    }
  }

  resizeListener() {
    const action = this.updateHeight.bind(this, false);
    setTimeout(action, 200);
  }

  componentDidMount() {
    this.updateHeight(false);
    window.addEventListener("resize", () => this.resizeListener());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.resizeListener());
  }

  componentDidUpdate() {
    if (!this.props.parentCollapsible) return;
    this.props.parentCollapsible.current?.updateHeight(false);
  }

  render(): React.ReactNode {
    return (
      <div className="collapsible-block" style={this.getBlockStyle()}>
        <div
          className={`collapsible-block-header ${this.getHeaderModifier()}`}
          onClick={this.toggleExpand}
          ref={this.headerRef}
        >
          {this.props.header}
        </div>
        <div className="collapsible-block-content" ref={this.contentRef}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
