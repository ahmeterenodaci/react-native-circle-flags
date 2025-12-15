import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LcFlagSource = require('./lc.webp');

export default function LcFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LcFlagSource} />;
}
