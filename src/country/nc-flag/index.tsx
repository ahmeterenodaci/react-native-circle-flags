import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NcFlagSource = require('./nc.webp');

export default function NcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NcFlagSource} />;
}
