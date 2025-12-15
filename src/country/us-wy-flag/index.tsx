import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsWyFlagSource = require('./us-wy.webp');

export default function UsWyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsWyFlagSource} />;
}
