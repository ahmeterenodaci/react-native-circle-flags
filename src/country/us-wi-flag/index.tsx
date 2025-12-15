import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsWiFlagSource = require('./us-wi.webp');

export default function UsWiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsWiFlagSource} />;
}
