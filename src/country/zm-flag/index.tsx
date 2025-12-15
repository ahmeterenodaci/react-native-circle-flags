import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ZmFlagSource = require('./zm.webp');

export default function ZmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ZmFlagSource} />;
}
