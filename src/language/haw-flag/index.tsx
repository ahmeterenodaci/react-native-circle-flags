import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HawFlagSource = require('./haw.webp');

export default function HawFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HawFlagSource} />;
}
