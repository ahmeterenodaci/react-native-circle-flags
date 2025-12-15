import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ImFlagSource = require('./im.webp');

export default function ImFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ImFlagSource} />;
}
