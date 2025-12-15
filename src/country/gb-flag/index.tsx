import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbFlagSource = require('./gb.webp');

export default function GbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GbFlagSource} />;
}
