import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ShAcFlagSource = require('./sh-ac.webp');

export default function ShAcFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ShAcFlagSource} />;
}
