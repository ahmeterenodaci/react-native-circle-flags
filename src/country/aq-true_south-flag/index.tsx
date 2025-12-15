import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AqTrueSouthFlagSource = require('./aq-true_south.webp');

export default function AqTrueSouthFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={AqTrueSouthFlagSource} />;
}
