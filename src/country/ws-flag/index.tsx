import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const WsFlagSource = require('./ws.webp');

export default function WsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={WsFlagSource} />;
}
