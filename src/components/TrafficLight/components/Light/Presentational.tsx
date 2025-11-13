import type { LightColorType } from "../../types";

interface Props {
  color: LightColorType;
}

const Light: React.FC<Props> = ({ color }) => {
  return (
    <div className={`light ${color ?? ""}`} />
  )
}

export default Light;
