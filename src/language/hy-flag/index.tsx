import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HyFlagSource = require('./hy.webp');

export default function HyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HyFlagSource} />;
}
