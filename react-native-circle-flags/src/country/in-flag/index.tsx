import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InFlagSource = require('./in.webp');

export default function InFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={InFlagSource} />;
}
