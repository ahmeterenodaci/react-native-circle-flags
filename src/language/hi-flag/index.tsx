import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HiFlagSource = require('./hi.webp');

export default function HiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HiFlagSource} />;
}
