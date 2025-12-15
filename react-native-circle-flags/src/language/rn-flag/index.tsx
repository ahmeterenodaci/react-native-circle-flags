import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RnFlagSource = require('./rn.webp');

export default function RnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RnFlagSource} />;
}
