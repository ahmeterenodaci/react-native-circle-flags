import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GfFlagSource = require('./gf.webp');

export default function GfFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GfFlagSource} />;
}
