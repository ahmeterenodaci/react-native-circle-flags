import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BjFlagSource = require('./bj.webp');

export default function BjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BjFlagSource} />;
}
