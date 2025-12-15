import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VnFlagSource = require('./vn.webp');

export default function VnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={VnFlagSource} />;
}
