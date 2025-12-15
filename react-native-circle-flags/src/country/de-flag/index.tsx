import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DeFlagSource = require('./de.webp');

export default function DeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={DeFlagSource} />;
}
