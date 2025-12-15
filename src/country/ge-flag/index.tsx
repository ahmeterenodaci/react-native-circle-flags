import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GeFlagSource = require('./ge.webp');

export default function GeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GeFlagSource} />;
}
