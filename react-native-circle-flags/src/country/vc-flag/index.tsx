import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VcFlagSource = require('./vc.webp');

export default function VcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={VcFlagSource} />;
}
