import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PhFlagSource = require('./ph.webp');

export default function PhFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={PhFlagSource} />;
}
