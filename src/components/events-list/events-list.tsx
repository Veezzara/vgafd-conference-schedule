import "./events-list.css";
import { EventData } from "../../api/types";
import ContentBlock from "../common/content-block/content-block";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ru";
import Event from "../event/event";

type Props = {
  events: EventData[];
};

type EventsGroup = {
  date: Date;
  events: EventData[];
};

export default function EventsList(props: Props) {
  const [eventsGroups, setEventsGroups] = useState<EventsGroup[]>([]);

  useEffect(() => {
    const grouped = groupEvents(props.events);
    setEventsGroups(grouped);
  }, [props.events]);

  function groupEvents(eventsData: EventData[]) {
    const eventDates = eventsData.map((e) => e.date);

    const dates: Date[] = [];
    eventDates.forEach((e) => {
      if (
        !dates.find(
          (d) =>
            moment(e).startOf("day").diff(moment(d).startOf("day"), "days") ===
            0
        )
      )
        dates.push(e);
    });

    return dates.map((d) => {
      const events = eventsData.filter(
        (e) => moment(e.date).startOf("day").diff(moment(d).startOf("day"), "days") === 0
      );
      return {
        date: d,
        events: events,
      };
    });
  }

  function dateToBlockHeader(date: Date) {
    return moment(date).format("D MMMM[ | ]dd");
  }

  return (
    <div className="centered-content event-list">
      {eventsGroups.map((eg, index) => {
        return (
          <ContentBlock header={dateToBlockHeader(eg.date)} key={index}>
            {eg.events.map((e, i) => {
              return <Event event={e} key={i}></Event>;
            })}
          </ContentBlock>
        );
      })}
    </div>
  );
}
