import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BwFlagSource = require('./bw.webp');

export default function BwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BwFlagSource} />;
}
