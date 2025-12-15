import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NbFlagSource = require('./nb.webp');

export default function NbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NbFlagSource} />;
}
