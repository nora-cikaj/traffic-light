import Light from "./components/Light/Presentational";
import { LightColor } from "./types";

const TrafficLight = () => {
  return (
    <div className="traffic-light">
        <Light color={LightColor.RED} />
        <Light color={LightColor.YELLOW} />
        <Light color={LightColor.GREEN} />
    </div>
  )
}

export default TrafficLight;
