import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BzFlagSource = require('./bz.webp');

export default function BzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BzFlagSource} />;
}
