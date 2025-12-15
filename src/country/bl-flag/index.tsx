import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BlFlagSource = require('./bl.webp');

export default function BlFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BlFlagSource} />;
}
