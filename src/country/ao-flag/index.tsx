import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AoFlagSource = require('./ao.webp');

export default function AoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AoFlagSource} />;
}
