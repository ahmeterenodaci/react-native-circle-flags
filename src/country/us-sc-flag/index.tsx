import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsScFlagSource = require('./us-sc.webp');

export default function UsScFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsScFlagSource} />;
}
