import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NpFlagSource = require('./np.webp');

export default function NpFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NpFlagSource} />;
}
