import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OrFlagSource = require('./or.webp');

export default function OrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={OrFlagSource} />;
}
