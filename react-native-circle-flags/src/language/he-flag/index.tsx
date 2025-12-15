import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HeFlagSource = require('./he.webp');

export default function HeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={HeFlagSource} />;
}
