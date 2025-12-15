import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JmFlagSource = require('./jm.webp');

export default function JmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={JmFlagSource} />;
}
