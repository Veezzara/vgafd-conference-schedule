import { Component, createRef, RefObject } from "react";
import { EventData } from "../../api/types";
import CollapsibleBlock from "../common/collapsible-block/collapsible-block";
import EventLink from "../event-link/event-link";
import "./events.css";
import twitchLogo from "../../assets/TwitchGlitchBlackOps.svg"
import ytLogo from "../../assets/yt_icon_mono_light.svg"

type Props = {
  event: EventData;
};

export default class Event extends Component<Props> {
  outerBlock: RefObject<CollapsibleBlock>;

  constructor(props: Props) {
    super(props);
    this.outerBlock = createRef();
  }

  render() {
    return (
      <CollapsibleBlock
        header={<EventHeader event={this.props.event} />}
        ref={this.outerBlock}
      >
        <EventBody
          event={this.props.event}
          outerBlock={this.outerBlock}
        ></EventBody>
      </CollapsibleBlock>
    );
  }
}

function EventHeader(props: Props) {
  function dateToTime(date: Date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div className="event-header">
      <div className="event-name">{props.event.name}</div>
      {props.event.date ? (
        <div className="event-time">{dateToTime(props.event.date)}</div>
      ) : undefined}
    </div>
  );
}

type BodyProps = {
  event: EventData;
  outerBlock: RefObject<CollapsibleBlock>;
};

function EventBody(props: BodyProps) {
  return (
    <div className="event-body">
      <div className="event-description">{props.event.description}</div>
      <div className="links-container">
        {props.event.twitchLink ? (
          <EventLink
            address={props.event.twitchLink}
            text="twitch"
            logo={twitchLogo}
          ></EventLink>
        ) : undefined}
        {props.event.youtubeLink ? (
          <EventLink
            address={props.event.youtubeLink}
            text="youtube"
            logo={ytLogo}
          ></EventLink>
        ) : undefined}
      </div>
      {props.event.rumors.length > 0 ? (
        <CollapsibleBlock
          header={<div className="event-rumors-header">Спойлеры и слухи</div>}
          parentCollapsible={props.outerBlock}
        >
          {props.event.rumors.map((rumor, index) => {
            return (
              <div className="event-rumor-body" key={index}>
                <p>
                  <a href={rumor.source} target="_blank" rel="noreferrer">
                    СУРС
                  </a>
                  <span>; — {rumor.description}</span>
                </p>
              </div>
            );
          })}
        </CollapsibleBlock>
      ) : undefined}
    </div>
  );
}
