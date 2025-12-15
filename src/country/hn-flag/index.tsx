import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HnFlagSource = require('./hn.webp');

export default function HnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HnFlagSource} />;
}
