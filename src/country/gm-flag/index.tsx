import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GmFlagSource = require('./gm.webp');

export default function GmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GmFlagSource} />;
}
