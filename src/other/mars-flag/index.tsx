import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MarsFlagSource = require('./mars.webp');

export default function MarsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MarsFlagSource} />;
}
