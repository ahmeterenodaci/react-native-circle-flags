import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsNmFlagSource = require('./us-nm.webp');

export default function UsNmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsNmFlagSource} />;
}
