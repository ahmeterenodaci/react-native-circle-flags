import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GeAbFlagSource = require('./ge-ab.webp');

export default function GeAbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GeAbFlagSource} />;
}
