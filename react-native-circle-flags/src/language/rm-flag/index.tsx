import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RmFlagSource = require('./rm.webp');

export default function RmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RmFlagSource} />;
}
