import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MzFlagSource = require('./mz.webp');

export default function MzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MzFlagSource} />;
}
