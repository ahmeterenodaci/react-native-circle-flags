import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OcFlagSource = require('./oc.webp');

export default function OcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={OcFlagSource} />;
}
