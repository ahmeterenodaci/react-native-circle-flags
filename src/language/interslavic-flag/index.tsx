import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InterslavicFlagSource = require('./interslavic.webp');

export default function InterslavicFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={InterslavicFlagSource} />;
}
