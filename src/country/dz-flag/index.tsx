import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DzFlagSource = require('./dz.webp');

export default function DzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={DzFlagSource} />;
}
