import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GnFlagSource = require('./gn.webp');

export default function GnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GnFlagSource} />;
}
