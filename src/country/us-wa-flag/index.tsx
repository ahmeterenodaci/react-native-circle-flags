import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsWaFlagSource = require('./us-wa.webp');

export default function UsWaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsWaFlagSource} />;
}
