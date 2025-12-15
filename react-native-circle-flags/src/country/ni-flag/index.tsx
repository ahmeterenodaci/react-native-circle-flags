import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NiFlagSource = require('./ni.webp');

export default function NiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NiFlagSource} />;
}
