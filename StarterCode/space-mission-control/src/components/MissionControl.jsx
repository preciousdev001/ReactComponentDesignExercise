import { useState } from "react";

import styles from "./MissionControl.module.css";

import MissionCard from "./MissionCard.module.css";

function MissionControl({ initialMissions }) {
  const INITIAL_FILTER = "All";

  const [missions, setMissions] = useState(initialMissions);

  //   but isn't the idea to keep as simple as possible so ideally, wouldn't UpdateMissionStatus be it's own file?

  return (
    <div>
      <h1>Space Mission Control</h1>
    </div>
  );
}
