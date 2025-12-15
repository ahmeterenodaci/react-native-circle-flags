import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SzFlagSource = require('./sz.webp');

export default function SzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SzFlagSource} />;
}
