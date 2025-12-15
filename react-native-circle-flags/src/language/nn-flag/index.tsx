import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NnFlagSource = require('./nn.webp');

export default function NnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NnFlagSource} />;
}
