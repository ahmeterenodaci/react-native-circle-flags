import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsOrFlagSource = require('./us-or.webp');

export default function UsOrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsOrFlagSource} />;
}
