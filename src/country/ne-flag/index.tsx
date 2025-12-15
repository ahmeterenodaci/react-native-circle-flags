import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NeFlagSource = require('./ne.webp');

export default function NeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NeFlagSource} />;
}
