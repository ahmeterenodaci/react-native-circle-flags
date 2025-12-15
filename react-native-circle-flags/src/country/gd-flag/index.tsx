import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GdFlagSource = require('./gd.webp');

export default function GdFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GdFlagSource} />;
}
