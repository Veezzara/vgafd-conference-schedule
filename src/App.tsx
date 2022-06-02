import "./App.css";
import { useEffect, useState } from "react";
import { EventData } from "./api/types";
import { dataProvider } from "./api/dataProvider";
import Header from "./components/header/header";
import EventsList from "./components/events-list/events-list";

function App() {
  const [eventsData, setEventsData] = useState<EventData[]>([]);

  useEffect(() => {
    async function fetchEventData() {
      const data = await dataProvider.getEventsData();
      setEventsData(data);
    }
    fetchEventData();
  }, []);

  return (
    <div className="App">
      <Header />
      <EventsList events={eventsData} />
    </div>
  );
}

export default App;
