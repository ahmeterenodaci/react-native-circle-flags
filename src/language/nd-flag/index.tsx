import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NdFlagSource = require('./nd.webp');

export default function NdFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NdFlagSource} />;
}
