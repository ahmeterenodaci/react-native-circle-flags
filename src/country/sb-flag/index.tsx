import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SbFlagSource = require('./sb.webp');

export default function SbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SbFlagSource} />;
}
