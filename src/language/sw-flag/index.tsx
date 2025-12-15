import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SwFlagSource = require('./sw.webp');

export default function SwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SwFlagSource} />;
}
